# Free Classes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A class priced at `0` reads "Free" everywhere in the storefront and can actually be booked.

**Architecture:** One backend change in `pepper-mint` — when an order's total is `0`, `PlaceOrder` skips the Yoco payment gateway and reuses the existing `ConfirmOrder` path (which releases the stock hold, consumes the seat, increments attendance, generates the invoice, and publishes `OrderConfirmedEventType`). One frontend change in `cool-mint` — a `formatPrice` helper that returns "Free" for `0`, routed through the shared `MoneyField` component (covers cart/checkout/orders) and applied at the class-facing price sites.

**Tech Stack:** Go 1.25 + Twirp (pepper-mint); Next.js 14 + TypeScript + Vitest (cool-mint).

## Global Constraints

- **No proto/API contract change.** The backend change is server-internal; do not touch `proto/` or regenerate clients.
- **pepper-mint build prerequisite:** generated code must already be present (`task` codegen run once) or `go test ./pkg/commerce/` will not compile. This plan touches no generated files.
- **Free is defined as price `0`.** No new "free" flag; a class is free when its price is `0` cents.
- **Mixed carts are out of the bypass.** A cart whose total is `> 0` (a free class alongside a paid item) flows through the unchanged Yoco path; the free item rides along as a R0 line item. The guard is exactly `order.Total == 0`.
- **Commit convention:** Conventional Commits (`feat(...)`, `test(...)`). pepper-mint commits scoped `commerce`/`fusion`; cool-mint scoped as appropriate. End commit messages with the `Co-Authored-By` trailer already configured for this session.
- **cool-mint currency:** ZAR via `Intl.NumberFormat("en-ZA", …)`, amounts stored in cents.
- **cool-mint lint in worktrees:** if working in a nested worktree, run `npx eslint <files>` rather than `npm run lint`.

---

### Task 1: Backend — zero-total booking bypass (pepper-mint)

**Files:**
- Modify: `pepper-mint/pkg/commerce/order.manager.go` (in `PlaceOrder`, at the `CreateCheckout` call, currently line ~459)
- Test: `pepper-mint/pkg/commerce/order.manager_test.go` (append two tests)

**Interfaces:**
- Consumes: existing `DefaultOrderManager.ConfirmOrder(ctx, *ConfirmOrderRequest) (*Order, error)`, `restoreCart`, `d.config.URL`, `PlaceOrderResponse{Order, RedirectUrl}`.
- Produces: no new exported symbols; behaviour change only.

- [ ] **Step 1: Write the failing test — free cart bypasses Yoco and confirms**

Append to `pepper-mint/pkg/commerce/order.manager_test.go`:

```go
func TestPlaceOrder_freeCartBypassesYocoAndConfirms(t *testing.T) {
	now := time.Date(2026, 7, 20, 9, 0, 0, 0, time.UTC)
	prod := &Product{
		Name:          "products/p1",
		StockQuantity: 6,
		SalePrice:     0,
		RegularPrice:  0,
		TaxStatus:     Product_TAX_STATUS_NONE,
	}
	var stored *Order
	m := &DefaultOrderManager{
		now:     func() time.Time { return now },
		counter: &mongo.CounterMock{},
		cartManager: &DefaultCartManager{
			now: func() time.Time { return now },
			cartRepository: &SkyCartRepositoryMock{
				GetCartFunc: func(t *testing.T, ctx context.Context, r *GetCartRequest) (*Cart, error) {
					return &Cart{
						AuditEntry: &audit.Entry{ETag: "e"},
						Items:      []*CartItem{{Product: "products/p1", Quantity: 1, Price: 0}},
					}, nil
				},
				UpdateCartFunc: func(t *testing.T, ctx context.Context, r *UpdateCartRequest) (*Cart, error) {
					return r.Cart, nil
				},
			},
		},
		productRepository: &SkyProductRepositoryMock{
			GetProductFunc: func(t *testing.T, ctx context.Context, r *GetProductRequest) (*Product, error) {
				return prod, nil
			},
			UpdateProductFunc: func(t *testing.T, ctx context.Context, r *UpdateProductRequest) (*Product, error) {
				prod = r.Product
				return r.Product, nil
			},
		},
		orderRepository: &SkyOrderRepositoryMock{
			CreateOrderFunc: func(t *testing.T, ctx context.Context, r *CreateOrderRequest) (*Order, error) {
				r.Order.Name = "orders/000500"
				stored = r.Order
				return r.Order, nil
			},
			GetOrderFunc: func(t *testing.T, ctx context.Context, r *GetOrderRequest) (*Order, error) {
				return stored, nil
			},
			UpdateOrderFunc: func(t *testing.T, ctx context.Context, r *UpdateOrderRequest) (*Order, error) {
				stored = r.Order
				return r.Order, nil
			},
		},
		cartRepository: &SkyCartRepositoryMock{
			UpdateCartFunc: func(t *testing.T, ctx context.Context, r *UpdateCartRequest) (*Cart, error) {
				return r.Cart, nil
			},
		},
		publisher: &events.NoOpPublisher{},
		yocoPaymentSVC: &yoco.PaymentServiceMock{
			CreateCheckoutFunc: func(t *testing.T, ctx context.Context, r *yoco.CreateCheckoutRequest) (*yoco.CheckoutResponse, error) {
				t.Fatal("free order must not call Yoco")
				return nil, nil
			},
		},
	}
	ctx := auth.WithEmail(auth.WithUID(context.Background(), "u1"), "u1@x.io")
	resp, err := m.PlaceOrder(ctx, &PlaceOrderRequest{ETag: "e", BillingAddress: &BillingAddress{Email: "u1@x.io"}})
	if err != nil {
		t.Fatalf("PlaceOrder failed: %v", err)
	}
	if resp.Order.Status != Order_COMPLETED {
		t.Fatalf("order status = %s, want COMPLETED", resp.Order.Status)
	}
	if prod.StockQuantity != 5 || len(prod.Holds) != 0 {
		t.Fatalf("after free booking: stock=%d holds=%d, want 5/0", prod.StockQuantity, len(prod.Holds))
	}
	if !strings.Contains(resp.RedirectUrl, "/order-confirmation/000500") {
		t.Fatalf("redirect = %q, want it to contain /order-confirmation/000500", resp.RedirectUrl)
	}
}
```

- [ ] **Step 2: Run it and verify it fails**

Run: `cd pepper-mint && go test ./pkg/commerce/ -run TestPlaceOrder_freeCartBypassesYocoAndConfirms -v`
Expected: FAIL — the `t.Fatal("free order must not call Yoco")` fires (current code calls `CreateCheckout` unconditionally, and Yoco would otherwise reject amount 0).

- [ ] **Step 3: Add the zero-total bypass**

In `pepper-mint/pkg/commerce/order.manager.go`, in `PlaceOrder`, immediately **before** the existing `checkoutResponse, err := d.yocoPaymentSVC.CreateCheckout(...)` call (the block starting around line 459), insert:

```go
	// All-free cart: no payment gateway. Reuse the confirmed-order path, which
	// releases holds, consumes stock, increments attendance, generates the
	// invoice, and publishes OrderConfirmedEventType. Mixed carts have a
	// non-zero total and fall through to the Yoco path below unchanged.
	if order.Total == 0 {
		confirmed, err := d.ConfirmOrder(ctx, &ConfirmOrderRequest{Order: order.Name})
		if err != nil {
			d.restoreCart(ctx, cart)
			slog.ErrorContext(ctx, "Failed to confirm free order", "error", err)
			return nil, errFn(err)
		}
		return &PlaceOrderResponse{
			Order:       confirmed,
			RedirectUrl: d.config.URL + "/order-confirmation/" + strings.Split(order.Name, "/")[1],
		}, nil
	}
```

Leave the existing Yoco block that follows exactly as-is.

- [ ] **Step 4: Run it and verify it passes**

Run: `cd pepper-mint && go test ./pkg/commerce/ -run TestPlaceOrder_freeCartBypassesYocoAndConfirms -v`
Expected: PASS.

- [ ] **Step 5: Write the mixed-cart regression test**

Encodes the confirmed behaviour: a free class + a paid item → Yoco is called for the paid total, both line items are on the order. Append:

```go
func TestPlaceOrder_mixedCartChargesPaidTotalViaYoco(t *testing.T) {
	now := time.Date(2026, 7, 20, 9, 0, 0, 0, time.UTC)
	var checkoutAmount int64 = -1
	products := map[string]*Product{
		"products/free": {Name: "products/free", StockQuantity: 6, SalePrice: 0, RegularPrice: 0, TaxStatus: Product_TAX_STATUS_NONE},
		"products/paid": {Name: "products/paid", StockQuantity: 6, SalePrice: 10000, RegularPrice: 10000, TaxStatus: Product_TAX_STATUS_NONE},
	}
	m := &DefaultOrderManager{
		now:     func() time.Time { return now },
		counter: &mongo.CounterMock{},
		cartManager: &DefaultCartManager{
			now: func() time.Time { return now },
			cartRepository: &SkyCartRepositoryMock{
				GetCartFunc: func(t *testing.T, ctx context.Context, r *GetCartRequest) (*Cart, error) {
					return &Cart{
						AuditEntry: &audit.Entry{ETag: "e"},
						Items: []*CartItem{
							{Product: "products/free", Quantity: 1, Price: 0},
							{Product: "products/paid", Quantity: 1, Price: 10000},
						},
					}, nil
				},
				UpdateCartFunc: func(t *testing.T, ctx context.Context, r *UpdateCartRequest) (*Cart, error) { return r.Cart, nil },
			},
		},
		productRepository: &SkyProductRepositoryMock{
			GetProductFunc: func(t *testing.T, ctx context.Context, r *GetProductRequest) (*Product, error) {
				return products[r.Name], nil
			},
			UpdateProductFunc: func(t *testing.T, ctx context.Context, r *UpdateProductRequest) (*Product, error) {
				products[r.Product.Name] = r.Product
				return r.Product, nil
			},
		},
		orderRepository: &SkyOrderRepositoryMock{
			CreateOrderFunc: func(t *testing.T, ctx context.Context, r *CreateOrderRequest) (*Order, error) {
				r.Order.Name = "orders/000501"
				return r.Order, nil
			},
			UpdateOrderFunc: func(t *testing.T, ctx context.Context, r *UpdateOrderRequest) (*Order, error) { return r.Order, nil },
		},
		cartRepository: &SkyCartRepositoryMock{
			UpdateCartFunc: func(t *testing.T, ctx context.Context, r *UpdateCartRequest) (*Cart, error) { return r.Cart, nil },
		},
		publisher: &events.NoOpPublisher{},
		yocoPaymentSVC: &yoco.PaymentServiceMock{
			CreateCheckoutFunc: func(t *testing.T, ctx context.Context, r *yoco.CreateCheckoutRequest) (*yoco.CheckoutResponse, error) {
				checkoutAmount = r.Amount
				return &yoco.CheckoutResponse{Id: "c1", RedirectUrl: "https://pay"}, nil
			},
		},
	}
	ctx := auth.WithEmail(auth.WithUID(context.Background(), "u1"), "u1@x.io")
	resp, err := m.PlaceOrder(ctx, &PlaceOrderRequest{ETag: "e", BillingAddress: &BillingAddress{Email: "u1@x.io"}})
	if err != nil {
		t.Fatalf("PlaceOrder failed: %v", err)
	}
	if checkoutAmount != 10000 {
		t.Fatalf("Yoco charged %d, want 10000 (paid item only)", checkoutAmount)
	}
	if len(resp.Order.LineItems) != 2 {
		t.Fatalf("order has %d line items, want 2 (free + paid)", len(resp.Order.LineItems))
	}
}
```

- [ ] **Step 6: Run both tests and verify they pass**

Run: `cd pepper-mint && go test ./pkg/commerce/ -run 'TestPlaceOrder_(freeCartBypassesYocoAndConfirms|mixedCartChargesPaidTotalViaYoco)' -v`
Expected: PASS (both). Then run the whole package to confirm no regression: `go test ./pkg/commerce/`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
cd pepper-mint && git add pkg/commerce/order.manager.go pkg/commerce/order.manager_test.go
git commit -m "feat(commerce): confirm zero-total orders without Yoco

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Frontend — `formatPrice` helper (cool-mint)

**Files:**
- Modify: `cool-mint/lib/util/money-formatter.ts` (add `formatPrice`)
- Test: `cool-mint/lib/util/format-price.test.ts` (create)

**Interfaces:**
- Consumes: existing `moneyFormatter` in the same file.
- Produces: `export function formatPrice(cents: bigint | number): string` — returns `"Free"` when the amount is `0`, else the ZAR string for `cents / 100`. Used by Tasks 3 and 4.

- [ ] **Step 1: Write the failing test**

Create `cool-mint/lib/util/format-price.test.ts`:

```ts
import { describe, it, expect } from "vitest"
import { formatPrice, moneyFormatter } from "@/lib/util/money-formatter"

describe("formatPrice", () => {
  it("returns Free for zero", () => {
    expect(formatPrice(0)).toBe("Free")
    expect(formatPrice(0n)).toBe("Free")
  })
  it("formats cents as a ZAR amount", () => {
    expect(formatPrice(150000)).toBe(moneyFormatter.format(1500))
    expect(formatPrice(150000n)).toBe(moneyFormatter.format(1500))
  })
  it("preserves sub-rand cents", () => {
    expect(formatPrice(150050)).toBe(moneyFormatter.format(1500.5))
  })
})
```

- [ ] **Step 2: Run it and verify it fails**

Run: `cd cool-mint && npx vitest run lib/util/format-price.test.ts`
Expected: FAIL — `formatPrice` is not exported.

- [ ] **Step 3: Implement `formatPrice`**

Append to `cool-mint/lib/util/money-formatter.ts`:

```ts
export function formatPrice(cents: bigint | number): string {
  const value = Number(cents)
  if (value === 0) return "Free"
  return moneyFormatter.format(value / 100)
}
```

- [ ] **Step 4: Run it and verify it passes**

Run: `cd cool-mint && npx vitest run lib/util/format-price.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
cd cool-mint && git add lib/util/money-formatter.ts lib/util/format-price.test.ts
git commit -m "feat: add formatPrice helper returning Free for zero

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Frontend — "Free" in cart / checkout / orders via `MoneyField` (cool-mint)

`MoneyField` is the single component behind cart line-items, cart total, checkout order-summary, and the orders table. Routing it through `formatPrice` gives "Free" at all of those sites at once. The discount row in `order-summary.tsx` is guarded by `discount > 0n`, so it never passes `0` to `MoneyField` — a blanket zero→"Free" mapping is safe.

**Files:**
- Modify: `cool-mint/components/money-field.tsx`

**Interfaces:**
- Consumes: `formatPrice` from Task 2.
- Produces: `MoneyField` renders "Free" when `value === 0n`.

- [ ] **Step 1: Route `MoneyField` through `formatPrice`**

In `cool-mint/components/money-field.tsx`, replace the body so it uses the shared helper. Change the component to:

```tsx
"use client"

import { formatPrice } from "@/lib/util/money-formatter"

export const MoneyField: React.FC<{ value: bigint; className?: string }> = ({
  value,
  className,
}) => <span className={className}>{formatPrice(value)}</span>
```

Then check whether the local `moneyFormatter` export in this file is still imported anywhere:

Run: `cd cool-mint && grep -rn "moneyFormatter" app components contexts | grep -v node_modules | grep "money-field"`
- If the only remaining reference is the definition in `money-field.tsx` itself and nothing imports `moneyFormatter` *from* `@/components/money-field`, delete the local `moneyFormatter` definition from `money-field.tsx`.
- If something does import it from there, leave the definition in place.

(Run this to see external importers: `grep -rn "from \"@/components/money-field\"" app components contexts | grep -v node_modules` — if any line also imports `moneyFormatter`, keep it.)

- [ ] **Step 2: Verify build + lint pass**

Run: `cd cool-mint && npx tsc --noEmit && npx eslint components/money-field.tsx`
Expected: no errors.

- [ ] **Step 3: Visual check**

Run the app against a local dump (see the local full-stack recipe), add a R0 class to the cart, and confirm the cart line-item, cart total, and checkout order-summary all read "Free". Confirm a paid item still shows its ZAR price, and a discounted order still shows the struck-through total + discount correctly.

- [ ] **Step 4: Commit**

```bash
cd cool-mint && git add components/money-field.tsx
git commit -m "feat: show Free for zero-value amounts in cart and checkout

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Frontend — "Free" at class-facing price sites (cool-mint)

These sites render the class price directly with `moneyFormatter.format(price / 100n)`. Convert each to `formatPrice(priceCents)`. Note this passes raw cents (not pre-divided), so `formatPrice` does the `/100` and the zero-detection correctly.

**Files:**
- Modify: `cool-mint/components/booking-card.tsx`
- Modify: `cool-mint/components/inline-session-selector.tsx`
- Modify: `cool-mint/components/session-picker.tsx`
- Modify: `cool-mint/components/related-class-card.tsx`
- Modify: `cool-mint/components/workshop.tsx`

**Interfaces:**
- Consumes: `formatPrice` from Task 2.

- [ ] **Step 1: `booking-card.tsx` — price + omit "per person" when free**

Replace the import `import { moneyFormatter } from "@/lib/util/money-formatter"` with `import { formatPrice } from "@/lib/util/money-formatter"`, then change the price block:

```tsx
      {/* Price */}
      <div className="mb-6">
        <span className="font-helvetica text-3xl font-bold text-primary">
          {formatPrice(standardPrice)}
        </span>
        {standardPrice !== 0n && (
          <p className="text-sm text-muted-foreground">per person</p>
        )}
      </div>
```

- [ ] **Step 2: `inline-session-selector.tsx` — multi-session total**

Swap the import to `formatPrice`, then change the total:

```tsx
            <span className="font-semibold text-primary">
              {formatPrice(standardPrice * BigInt(selected.length))}
            </span>
```

- [ ] **Step 3: `session-picker.tsx` — selected-session price**

Swap the import to `formatPrice`, then:

```tsx
                    {isSelected && (
                      <div className="text-sm font-semibold text-primary">
                        {formatPrice(standardPrice)}
                      </div>
                    )}
```

- [ ] **Step 4: `related-class-card.tsx` — card price**

Swap the import to `formatPrice`, then:

```tsx
            <span className="font-semibold text-primary">
              {formatPrice(course.standardPrice)}
            </span>
```

- [ ] **Step 5: `workshop.tsx` — listing price**

Swap the import to `formatPrice`, then:

```tsx
        <p className="text- pt-4 font-bold text-primary lg:pt-0">
          {formatPrice(masterClass.standardPrice)}
        </p>
```

- [ ] **Step 6: Verify build + lint pass**

Run: `cd cool-mint && npx tsc --noEmit && npx eslint components/booking-card.tsx components/inline-session-selector.tsx components/session-picker.tsx components/related-class-card.tsx components/workshop.tsx`
Expected: no errors. Confirm no stray `moneyFormatter` import remains in these five files: `grep -l moneyFormatter components/booking-card.tsx components/inline-session-selector.tsx components/session-picker.tsx components/related-class-card.tsx components/workshop.tsx` should print nothing.

- [ ] **Step 7: Visual check**

With the app running against a local dump, view a R0 class page (booking card reads "Free", no "per person"), a listing/related card ("Free"), and the session selector (selected + multi-session total read "Free"). Confirm a paid class still shows its ZAR price and "per person".

- [ ] **Step 8: Commit**

```bash
cd cool-mint && git add components/booking-card.tsx components/inline-session-selector.tsx components/session-picker.tsx components/related-class-card.tsx components/workshop.tsx
git commit -m "feat: show Free for zero-price classes on class-facing pages

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: End-to-end verification (both repos)

**Files:** none (verification only).

- [ ] **Step 1: Run fusion + cool-mint + Mongo locally against a dump** (see the local full-stack recipe: pubsub emulator, no gcloud auth).

- [ ] **Step 2: Make a class free** in the dashboard (set its price to `0`), or seed a R0 masterClass/product in the dump.

- [ ] **Step 3: Book the free class end-to-end** through the storefront: it reads "Free" on the class page and in the cart, checkout completes **without** a Yoco redirect, and lands on `/order-confirmation/<id>`.

- [ ] **Step 4: Confirm the booking took effect** — the order is `COMPLETED`, the session's `confirmedAttendees` incremented and the user is in `attendees`, and product stock decremented by one. Confirm no Yoco call was made (fusion logs show the zero-total bypass, not a `CreateCheckout`).

- [ ] **Step 5: Sanity-check a mixed cart** — a free class + a paid item still redirects to Yoco and charges only the paid item's price.
