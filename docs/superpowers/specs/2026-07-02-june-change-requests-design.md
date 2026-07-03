# Design — June client change requests (Made in Workshop)

**Date:** 2026-07-02
**Source:** `issues/june.md`
**Repos affected:** `cool-mint` (storefront, most items), `pepper-mint/dashboard` (item #5 only)

## Overview

Six client-requested changes to the storefront class experience. This spec covers **five** of
them (#1, #2, #3, #5, #6) — three frontend-only changes in `cool-mint` (#2, #3, #6), one small
dashboard change in `pepper-mint` (#5), and one that spans **both** frontend and backend (#1 —
see its blocker below). No proto/API contract changes are required by any of these items.

**#4 (session loading performance) is split into its own spec** — it is a measurement-first
investigation of unknown size, not a bounded edit, and does not belong in this batch. See the
#4 section below for the handoff.

Primary files in play (from code exploration):

- Class page (server component): `cool-mint/app/classes/[slug]/page.tsx`
- Booking area: `cool-mint/components/booking-card.tsx`, `cool-mint/components/session-picker.tsx`
- Cards/listings: `cool-mint/components/workshop.tsx`, `cool-mint/components/related-class-card.tsx`
- Server actions: `cool-mint/app/classes/actions.ts` (`upcomingSessions`, `getMasterClass`, `bookSessions`)
- Money: `cool-mint/lib/util/money-formatter.ts`
- Building blocks: `cool-mint/components/ui/carousel.tsx` (Embla 8, arrows + keyboard),
  `cool-mint/components/ui/dialog.tsx` (Radix, dark `bg-black/80` overlay),
  `cool-mint/components/ui/aspect-ratio.tsx`
- Dashboard tags: `pepper-mint/dashboard/app/admin/masterClasses/[name]/components/class-information-form.tsx`

---

## #1 — Free classes (frontend display + backend booking path)

**Goal:** A class priced at `0` reads **"Free"** in the UI *and* can actually be booked.

### 🔴 Backend blocker (verified in code — must ship with #1)

A free class is created by setting its price to `0`. But booking any order routes
cart → `commerce.OrderManager.PlaceOrder` → `yoco.CreateCheckout`, and:

- `PlaceOrder` calls `CreateCheckout(Amount: order.Total)` unconditionally — no zero branch
  (`pepper-mint/pkg/commerce/order.manager.go:382-383`).
- `CreateCheckout` **hard-rejects a zero amount** (`pepper-mint/pkg/yoco/payment.service.go:105-106`):
  `if request.Amount == 0 { return error "amount must be greater than 0" }`.

So a R0 class would *look* free but **fail at checkout**. The display change alone is not shippable.

**Required backend work in `pepper-mint` (recommended: zero-total bypass):** in `PlaceOrder`,
when `order.Total == 0`, skip Yoco entirely and take the order straight to the confirmed path —
create the order, run the same seat-consumption + attendance-increment logic that `ConfirmOrder`
performs on `payment.succeeded`, and publish `OrderConfirmedEventType`. No payment-gateway
round-trip.

**Coordination:** this path intersects the in-progress **reservation-lazy-expiry** work in
`pepper-mint` (the seat-consumption path is being reworked). The zero-total path must call the
same hold-release / stock-consume helpers rather than duplicating them — coordinate with
whoever owns `pepper-mint` before implementing. *(See scope decision at the end of this spec.)*

### Frontend display

Add a `formatPrice(cents: bigint | number)` helper (beside `money-formatter.ts`) that returns
`"Free"` when the amount is `0`, else the existing ZAR string. Use it at **every** price site:

- `components/booking-card.tsx` (~line 112–118, `standardPrice`) — omit "per person" when free.
- `components/session-picker.tsx` (~lines 247–269, single & multi-session totals; 0 → "Free").
- `components/workshop.tsx` (~line 141).
- `components/related-class-card.tsx`.
- **Cart line-items / checkout / order-summary render sites** — a free class in the cart must
  also read "Free". (Locate these in `app/cart`, `app/checkout`, `app/orders` and the cart
  context.)

**Testing:** unit-test `formatPrice` (`0` → "Free", non-zero → ZAR); visual check on class page,
session picker, listing cards, and cart/checkout; **end-to-end book a R0 class** to confirm the
backend bypass creates a confirmed order and consumes a seat without hitting Yoco.

---

## #2 — Duration in hours, compact format (frontend only)

**Goal:** Show class duration in hours, consistently, instead of raw minutes.

**Chosen format (client):** compact `1h 30m` style:
- 120 min → `2h`
- 90 min → `1h 30m`
- 45 min → `45m`
- 60 min → `1h`

**Approach:** Add a `formatDuration(minutes: number)` helper. Rule: `h = floor(min/60)`,
`m = min % 60`; render `${h}h` when `m === 0`, `${h}h ${m}m` when both, `${m}m` when `h === 0`.
Apply everywhere duration is shown:

- `components/booking-card.tsx` (~lines 134–142, currently `"{duration} Minutes"`).
- `components/related-class-card.tsx` (~line 48, currently `"{duration} Minutes"`).
- `components/workshop.tsx` (~line 121, currently `"{duration/60} hours"`) — replace ad-hoc
  math with the shared helper so all sites agree.

**Testing:** unit-test the helper across the boundary cases above.

---

## #3 — Inline session selection on the class page (frontend)

**Goal:** Replace the single **"Next Session"** callout + **"Select Sessions"** modal with an
**inline** list of selectable sessions on the class page, so customers pick sessions without
opening a dialog.

**Current behaviour:** `booking-card.tsx` shows a "Next Session" highlight and a button that
opens `session-picker.tsx`'s dialog — a multi-select list (up to 5) of dated rows with
"spots left" checkboxes, which drives the `bookSessions` action.

**Approach:**
- Lift the session-list rendering out of the dialog in `session-picker.tsx` into an inline
  component rendered directly in the booking area (in/next to `booking-card.tsx`).
- **Remove** the "Next Session" callout (per client decision — replaced, not kept alongside).
- Preserve existing behaviour: multi-select **up to 5**, per-session "spots left", the same
  selection state and `bookSessions` booking action, loading/empty states.
- Remove the now-unused modal trigger; keep the dialog component only if still referenced
  elsewhere (verify before deleting).

**Edge cases:** 0 upcoming sessions (show a clear "no sessions scheduled" state), 1 session,
many sessions (list scrolls within a bounded height rather than pushing the page long).

**Testing:** verify selection, the 5-session cap, spots-left display, booking flow still works,
and the empty state.

**Awareness (not a #3 defect):** the "spots left" number is `MaxAttendees − ConfirmedAttendees`
from the backend and is currently *understated* for some sessions until the `pepper-mint`
reservation leak is fixed and data reconciled (separate work). #3's UI is correct regardless.

---

## #4 — Faster session loading (SPLIT OUT — separate spec)

**Not implemented in this batch.** #4 is tracked in its own, now-measured spec:
**`2026-07-02-session-loading-performance-design.md`**.

Summary of that spec (do not duplicate its detail here): the bottleneck was measured to be
`fusion` **cold starts** (scale-to-zero → ~29% of requests hit a 4–5s cold-start tail).
Per client cost constraint, `fusion` **must keep scaling to zero** — a pinned warm instance
(`minScale`) is rejected. The fix is therefore to (1) cache the session list in `cool-mint`
(ISR/`revalidate`) so cold starts leave the user path, (2) shrink the cold start itself
(startup CPU boost, lazy/async Atlas connect), then (3) de-N+1 `UpcomingSessions` and (4) add a
preventive index. The loading indicator is intentionally untouched (per client).

---

## #5 — Add "Meet up" and "Event" tags (pepper-mint dashboard)

**Goal:** Make "Meet up" and "Event" available as class tags.

**Current facts:** Tags are free-form strings, **capped at 3 per class**
(`z.array(...).max(3)` in `class-information-form.tsx`), rendered as pills on the storefront
class page. No fixed enum in the proto.

**Approach:**
1. Inspect the dashboard tag input: is it free-text or a fixed/suggested list?
2. If a fixed list → add "Meet up" and "Event" as options.
3. If free-text → add a lightweight predefined-suggestions set (including "Meet up" and
   "Event") so they are one-click while still allowing free entry.

**Scope:** dashboard-only change in `pepper-mint`; the storefront already renders whatever tags
a class carries, so no `cool-mint` change is needed for rendering.

**Testing:** confirm an admin can apply "Meet up"/"Event" to a class and it renders as a pill
on the storefront.

---

## #6 — Rebuild the class-page gallery: carousel + lightbox (frontend)

**Goal:** Replace the static 2-image grid with a proper gallery that shows **all** images.

**Current problems:** Static grid renders only `images[0]` and `images[1]` — images 2+ are
**silently dropped**; alt text is hardcoded `"Gallery Image"`; no interaction.

**Data constraints (from proto):** each gallery image `Object` has only `url`,
`description` (documented as the alt-text source), and `contentType` — **no width/height,
no captions, no blur data**. Image count is **unbounded** (0 → N). All URLs come from the
allowed `storage.googleapis.com/made-in-workshop/**` host.

**Chosen approach (client): full-width swipeable carousel + click-to-zoom lightbox.**
- New `"use client"` gallery component receiving `masterClass.gallery.images` as a prop
  (the class page is a server component, so interactivity must live in a child).
- **Carousel:** reuse `components/ui/carousel.tsx` (Embla 8 — arrows + keyboard already
  built). Show one featured image at a time, full content width; **add pagination dots**
  (build from `setApi` + `api.scrollSnapList()`/`api.on("select")`, since dots are not built in).
- **Lightbox:** clicking the featured image opens a full-screen zoom using
  `components/ui/dialog.tsx` (dark `bg-black/80` overlay already present; override
  `DialogContent` `max-w-*` for full-bleed), containing a carousel synced to the clicked index
  via `setApi`.
- **Images:** `next/image` with `object-cover`, real alt text from each image's `description`
  (fallback `masterClass.displayName`), and a proper responsive `sizes` prop (template:
  `industrialMachine.tsx`). Impose aspect ratio via the container (fixed height or
  `AspectRatio`) since the data carries none.
- **Graceful counts:** 0 images → render nothing (as today); 1 image → static featured image,
  no arrows/dots; 2+ → full carousel.

**Styling:** dark theme, gold/amber `--primary` (`43 97% 54%`), `font-helvetica` headings,
`rounded-lg`, shadcn tokens — match existing class-page conventions.

**Testing:** verify with 0, 1, 2, and 6+ images; arrows/dots/keyboard navigation; lightbox
open at correct index and swipe; alt text present.

---

## Out of scope / non-goals

- No proto or Twirp API contract changes.
- No new gallery data fields (captions, dimensions) — work within the existing `Object` shape.
- No booking backend changes **beyond** the zero-total bypass that #1 requires (see #1).
- No unrelated refactoring beyond consolidating duration/price formatting into shared helpers.

## Scope decision — #1 backend work: RESOLVED → (A), fix it properly

**Decision (client): Option (A) — keep #1 whole and fix it properly. No shortcuts; this is
going to production.** #1 ships only when a free class is both displayed as "Free" *and* fully
bookable end-to-end.

This means the batch **includes** the `pepper-mint` backend task: the zero-total bypass in
`PlaceOrder` (create order → run the same seat-consumption + attendance-increment logic as
`ConfirmOrder` → publish `OrderConfirmedEventType`, no Yoco round-trip).

**Hard requirements from this decision:**
- Coordinate with the **reservation-lazy-expiry** work owner in `pepper-mint` — the zero-total
  path must call the *same* hold-release / stock-consume helpers, not a duplicate. This is a
  sequencing dependency the implementation plan must respect (backend path may need to land or
  merge alongside the reservation work).
- The R0 path must be covered by backend tests (order confirmed, seat consumed, event
  published, idempotent) plus the frontend end-to-end check — not display-only verification.
- Do **not** set any class to R0 in production until the backend path is live and tested.

## Sequencing note

Items **#2** (shared helpers), **#3** (session area), **#5** (dashboard), and **#6**
(self-contained component) are independent and low-risk, and can proceed in any order.

**#1 is the exception** — it carries a `pepper-mint` backend task (zero-total booking bypass)
that depends on and must be coordinated with the in-progress reservation-lazy-expiry work. It is
**not** low-risk or freely orderable: its backend path may need to land or merge alongside the
reservation work, and its frontend "Free" display should only go live once the backend path is
tested. The implementation plan must sequence #1's backend work against that dependency.

**#4** is split into its own spec and is not part of this batch's plan; note that #3 and #4 both
touch the session/booking area, so when #4's caching fix lands it must be reconciled against #3's
inline-session changes (a cached session list must still reflect selection/availability correctly).
