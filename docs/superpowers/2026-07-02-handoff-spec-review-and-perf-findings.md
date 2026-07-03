# Handoff — Spec review + #4 performance probe findings

**Date:** 2026-07-02
**Author:** prepared for the agent/session implementing the June change-request batch
**Covers:**
1. Review of `specs/2026-07-02-june-change-requests-design.md` (the 5-item batch) — approve with **one blocker** and two minor notes.
2. Item **#4 (performance)** — results of the tier-1 (Cloud Run) and tier-3 (Atlas) zero/low-code probes, with a ranked, measured fix list so #4's spec can be written tightly instead of speculatively.

All findings below were verified against source and live infra (Cloud Logging, Cloud Run config, MongoDB Atlas read-only). Nothing was modified.

---

## Part 1 — Spec review (items #1, #2, #3, #5, #6)

**Overall: the spec is well-scoped and ready to plan, EXCEPT item #1 has a confirmed backend blocker that must be resolved before it's implementable.** #2, #5, #6 are clean. #3 is clean with one hard gate to honour.

### 🔴 BLOCKER — #1 "Free" classes cannot be booked (payment flow rejects R0)

The spec treats #1 as display-only and lists "No pricing/booking backend logic changes" as a non-goal. That assumption is **wrong for the booking path**, and this is verified in code, not hypothetical:

- Booking any class (free or not) goes: cart → `commerce.OrderManager.PlaceOrder` → `yoco.CreateCheckout`.
- `PlaceOrder` calls `CreateCheckout(Amount: order.Total)` **unconditionally** — there is no free/zero branch. (`pepper-mint/pkg/commerce/order.manager.go:382-383`)
- `CreateCheckout` **hard-rejects a zero amount**:
  ```go
  // pepper-mint/pkg/yoco/payment.service.go:105-106
  if request.Amount == 0 {
      return fmt.Errorf("amount must be greater than 0")
  }
  ```

**Consequence:** if a class is made free by setting its price to 0 (exactly how the spec says a class becomes free), a customer who tries to **book** it will get a checkout failure ("could not place order"), not a booking. So #1 as written makes free classes *look* free but *un-bookable*.

**Required addition (backend, in `pepper-mint`) — pick one, (a) recommended:**
- **(a) Zero-total bypass in `PlaceOrder`:** if `order.Total == 0`, skip Yoco entirely and take the order straight to the confirmed/completed path — i.e. create the order, then run the same seat-consumption + attendance-increment logic that `ConfirmOrder` performs on `payment.succeeded`, and publish `OrderConfirmedEventType`. No payment gateway round-trip. This is the clean model for free items.
- **(b)** Keep Yoco in the loop but special-case free orders earlier in the funnel so `PlaceOrder` is never reached with total 0 — messier, still needs a confirmed-order path.

**This adds a backend task to the batch.** It also intersects the reservation-lazy-expiry work in progress on `pepper-mint` (the seat-consumption path is being reworked there) — coordinate so the zero-total path calls the same hold-release/stock-consume helpers rather than duplicating them. Flag to whoever owns `pepper-mint` before implementing.

**Also (minor, same item):** the spec lists four *display* sites for "Free" (booking-card, session-picker, workshop, related-class-card) but not the **cart line-items / checkout / order-summary** render sites. A free class added to the cart should also read "Free" there. Confirm those sites are in scope or explicitly deferred.

### ✅ #2 — Duration format: clean

Helper rule (`h=floor(min/60)`, `m=min%60`, render `${h}h` / `${h}h ${m}m` / `${m}m`) is correct and covers the boundary cases. Consolidating `workshop.tsx`'s ad-hoc `duration/60` into the shared helper is the right call. No concerns.

### ✅ #3 — Inline session selection: clean, one hard gate

Approach (lift the session list out of the dialog, remove the "Next Session" callout, preserve 5-select cap / spots-left / `bookSessions` / loading+empty states) is sound. **Hard gate to honour:** the spec says "keep the dialog component only if still referenced elsewhere (verify before deleting)" — treat that as mandatory; grep for other `session-picker` dialog usages before removing the modal trigger. Edge cases (0/1/many sessions, bounded scroll) are correctly enumerated.

Note: the availability signal this UI shows ("spots left") is `MaxAttendees − ConfirmedAttendees` from the backend — see Part 2 / the reservation work. Those numbers are currently understated for some sessions until the pepper-mint reservation leak is fixed + data reconciled; #3's UI is correct regardless, just be aware the underlying numbers are being corrected separately.

### ✅ #5 — Meet up / Event tags: clean

Dashboard-only, tags are free-form strings capped at 3 (`z.array(...).max(3)`). Adding a suggestions set is low-risk. No storefront change needed. No concerns.

### ✅ #6 — Gallery carousel + lightbox: clean

Thorough and correct: reuse Embla `carousel.tsx`, build dots from `setApi`+`scrollSnapList`, lightbox via `dialog.tsx`, `next/image` with real alt from `description`, graceful 0/1/2+ counts, aspect ratio imposed by container (data carries no dimensions). Test matrix (0/1/2/6+ images) is right. No concerns.

### Net

Approve #2, #3, #5, #6 for planning as-is. **#1 needs the R0 booking path resolved first** — it converts #1 from "frontend-only" into "frontend + one backend task," and that backend task must be coordinated with the reservation work. Recommend updating the spec's #1 section and its "non-goals" line before running writing-plans.

---

## Part 2 — #4 performance: probe results (measured, not speculative)

Ran the two cheapest tiers. **Result: the bottleneck is localized.** Ranked by impact:

### 🥇 Primary cause — cold starts (fusion scales to zero)

- **Cloud Run config:** `fusion` (africa-south1) has **no `minScale`** → scales to zero. (`cool-mint` has maxScale=2, also no min.)
- **Latency distribution** of `masterClass.SessionManager/UpcomingSessions` from fusion request logs (400 samples, 30d) is sharply **bimodal**:
  | metric | value |
  |---|---|
  | min | 0.484s |
  | p50 | 0.665s |
  | p90 | **4.637s** |
  | p95 | **4.698s** |
  | p99 | 5.412s |
  | max | 5.561s |
  | mean | 1.828s |
  | requests > 4s | **117 / 400 (~29%)** |

  ~29% of requests take 4–5s while the rest are sub-second. That two-mode signature is the classic **cold-start tail**: roughly a third of visits hit a fresh instance.
- **Fix (highest ROI, near-zero code):** set `minScale=1` (or 2) on `fusion` (and consider `cool-mint`). Kills the 4–5s tail directly. This is a Cloud Run deploy-config change, not application code.

### 🥈 Secondary cause — N+1 queries + cross-region hop (the warm 0.665s)

Even warm, p50 is 0.665s for what should be a fast read. Two contributors:
- **N+1 in `UpcomingSessions`** (`pepper-mint/pkg/masterClass/session.manager.go:104`): after the single `Find`, it issues a **separate `GetProduct` per session** purely to check existence, plus a `FindOne` per unique master class (`:133`). A 17-session listing = 1 + ~17 + M round-trips. fusion↔Mongo is same-region (africa-south1) so each is cheap, but the count adds up.
  - **Fix:** drop the per-session product-existence check or batch it (one `$in` query over all product names), and batch the master-class fetches similarly. Application code in `pepper-mint`.
- **Cross-region hop:** `cool-mint` runs in **europe-west1**, `fusion`+Atlas in **africa-south1** — every SSR session RPC is a ~9,000 km round-trip. The class page is `force-dynamic` with caching disabled, so it's paid on every visit.
  - **Fix (cheapest first):** short-lived caching / `revalidate` on the session list in `cool-mint` where correctness allows (the list changes slowly). Larger, deferred option: co-locate the services (architectural — out of scope for a quick win).

### 🥉 Tertiary — missing index (real, but NOT the current bottleneck)

- The `UpcomingSessions` filter (`date >= now`, `product exists`, optional `parent`) runs as a **COLLSCAN** — there is no index on `date` or `parent` (sessions collection only has `{name:1}` and `{_id:1}`).
- BUT the collection is tiny (**127 docs**), so `explain` reports `execMs=0`, `totalDocsExamined=127`. The scan is instant at current scale.
- **Fix (cheap, preventive):** add a compound index `{parent: 1, date: 1}` on `masterClasses/sessions` (matches both `UpcomingSessions` with a master-class filter and `GetRelatedClasses`). Do it to future-proof as sessions grow, but do **not** expect a latency change now — it is not the bottleneck.

### Recommended #4 spec (now that it's measured)

Write a tight fix spec with three ordered work items:
1. **Cloud Run `minScale` on fusion** (config/deploy) — the big win; ship first, re-measure the bimodal tail.
2. **De-N+1 `UpcomingSessions`** (batch product/master-class lookups) + short-lived `revalidate` on the cool-mint class-page session fetch — addresses the warm latency + cross-region tax.
3. **Add `{parent:1, date:1}` index** on sessions — cheap, preventive.

The loading-indicator is intentionally untouched (per client). Re-run this same latency query after step 1 to confirm the tail collapses before doing 2/3.

---

## Data / access notes

- Probes used the **read-only** `claude` Atlas user and existing `gcloud` access — reproducible without new credentials. Latency query: `gcloud logging read 'resource.type="cloud_run_revision" AND resource.labels.service_name="fusion" AND jsonPayload.request.params.*="UpcomingSessions"' --freshness=30d`. Index/explain: `mongosh <uri> --eval 'db.getSiblingDB("pepper-mint").getCollection("masterClasses/sessions").find({date:{$gte:<now>},product:{$exists:true}}).explain("executionStats")'`.
- The `minScale` change and any Mongo index creation require write/deploy access this session's read-only creds do not have — hand to whoever owns the GCP project / Atlas cluster.
