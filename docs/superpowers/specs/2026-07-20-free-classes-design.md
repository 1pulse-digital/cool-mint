# Design — Free classes (June change request #1)

**Date:** 2026-07-20
**Source:** item #1 of `specs/2026-07-02-june-change-requests-design.md`, unblocked
**Repos affected:** `pepper-mint` (backend booking path), `cool-mint` (price display)

## Overview

A class priced at `0` must read **"Free"** in the storefront *and* be bookable. Today it
can't be booked: booking routes cart → `commerce.OrderManager.PlaceOrder` →
`yoco.CreateCheckout`, and `CreateCheckout` hard-rejects a zero amount
(`pepper-mint/pkg/yoco/payment.service.go:112-113`), so a R0 order fails at checkout.

The reservation-hold rework this item was told to coordinate with has since landed (#149),
so the recommended zero-total bypass is now implementable by reusing the existing
`ConfirmOrder` path.

This is the last outstanding item of the June batch (#2, #3, #5, #6 have shipped).

## Scope decisions

1. **Booking flow:** the standard cart → checkout → billing flow, unchanged, with a R0 total.
   No separate one-click "book free" path.
2. **"Free" display:** shown everywhere a price renders — class-facing sites *and*
   cart / checkout / order-summary — so a free class reads "Free" end-to-end.
3. **Mixed carts** (a free class alongside a paid item) are explicitly out of the bypass:
   their total is nonzero, so they flow through the normal Yoco path untouched. The free
   item rides along as a R0 line item and is booked on confirmation. A customer pays only
   for the paid item(s) and receives both.

## Backend — R0 booking path (`pepper-mint`)

**File:** `pkg/commerce/order.manager.go`, in `PlaceOrder`.

Everything from the start of `PlaceOrder` through seat reservation (`:250-454`) is unchanged —
validation, cart clear, price/stock checks, order creation, coupon application, `AddHold`.
Replace the unconditional `CreateCheckout` call (`:459`) with a zero-total guard:

```go
if order.Total == 0 {
    // All-free cart: no payment gateway. Reuse the confirmed-order path,
    // which releases holds, consumes stock, increments attendance, generates
    // the invoice, and publishes OrderConfirmedEventType.
    confirmed, err := d.ConfirmOrder(ctx, &ConfirmOrderRequest{Order: order.Name})
    if err != nil {
        d.restoreCart(ctx, cart)
        return nil, errFn(err)
    }
    return &PlaceOrderResponse{
        Order:       confirmed,
        RedirectUrl: d.config.URL + "/order-confirmation/" + strings.Split(order.Name, "/")[1],
    }, nil
}
// else: existing Yoco path unchanged (:459-516)
```

Rationale:

- **Reuses `ConfirmOrder` verbatim** — no duplicated seat/stock/attendance logic, so it
  stays in step with the reservation-hold work. Same helpers, not a copy.
- `ConfirmOrder` is idempotent (`:155-165`) and does `RemoveHold` + `PruneExpiredHolds` +
  stock consume (`:185-191`), cleanly releasing the hold just added.
- `OrderPlacedEventType` is intentionally **not** published for the free path — it has no
  subscribers. Only `OrderConfirmedEventType` drives the masterClass attendance increment
  (`pkg/masterClass/event.handler.go:112`) and the billing invoice
  (`pkg/billing/event.handler.go:31`), and `ConfirmOrder` emits it.
- `RedirectUrl` reuses the same `/order-confirmation/<id>` URL the paid path's `SuccessUrl`
  builds (`:462`), so the frontend redirect is uniform.
- Guard is `order.Total == 0`, which by construction is the all-free cart; mixed carts have
  `Total > 0` and never enter the branch.

## Frontend — "Free" display (`cool-mint`)

Add `formatPrice(amount)` beside `lib/util/money-formatter.ts`: returns `"Free"` when the
amount is `0`, else the existing `moneyFormatter` ZAR string. Apply at every price site:

- Class-facing:
  - `components/booking-card.tsx` — `standardPrice`; omit "per person" when free.
  - `components/session-picker.tsx` — single- and multi-session totals; `0` → "Free".
  - `components/workshop.tsx`.
  - `components/related-class-card.tsx`.
- Cart / checkout:
  - cart line-items, order summary, and checkout total (in `app/cart`, `app/checkout`, and
    the cart context).

No frontend change is needed for the redirect: `app/checkout/components/checkout-form.tsx:91`
already does `router.push(response.redirectUrl)`, and the backend returns the confirmation
URL for free orders.

## Testing

- **Unit (`cool-mint`, Vitest):** `formatPrice` — `0` → "Free", nonzero → ZAR string.
- **Go (`pepper-mint`):**
  - All-free cart `PlaceOrder`: order returns `COMPLETED`, no `CreateCheckout` call, seat
    consumed, `OrderConfirmedEventType` published.
  - Mixed cart `PlaceOrder`: still calls Yoco (`Total > 0`), unchanged behaviour.
- **End-to-end:** book a R0 class locally against a dump; confirm a completed order and a
  consumed seat with no Yoco round-trip.

## Non-goals

- No proto/API contract change (the change is server-internal + display-only).
- No new one-click free-booking path.
- No change to how a class is *marked* free — it remains "set price to 0" via the dashboard.
