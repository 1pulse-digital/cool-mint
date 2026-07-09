# Design — Session loading performance (June change request #4)

**Date:** 2026-07-02
**Source:** `issues/june.md` item #4 — "Class session loads too slow — can we make it faster?"
**Repos affected:** GCP Cloud Run config (`fusion`), `pepper-mint` (backend + Mongo index), `cool-mint` (caching)
**Status:** measured — this spec is grounded in probe results, not speculation.

## Scope decision (client)

Fix **real** performance only. **Do not** change the loading indicator — one already exists and
is considered adequate. This spec contains no UI/loading-state work.

**Cost constraint (client):** `fusion` **must keep scaling to zero** — a pinned warm instance
(`minScale ≥ 1`) is too expensive and is **rejected**. The strategy therefore is not to *avoid*
cold starts but to (a) keep them off the user-facing critical path via caching, and (b) make the
cold start itself much faster when it does happen.

## What was measured

Two zero/low-code probe tiers were run against live infra (read-only Atlas user + existing
`gcloud` access). The bottleneck is localized. Latency of
`masterClass.SessionManager/UpcomingSessions` from `fusion` request logs (400 samples, 30d) is
sharply **bimodal**:

| metric | value |
|---|---|
| min | 0.484s |
| p50 | 0.665s |
| p90 | 4.637s |
| p95 | 4.698s |
| p99 | 5.412s |
| max | 5.561s |
| mean | 1.828s |
| requests > 4s | **117 / 400 (~29%)** |

~29% of requests take 4–5s while the rest are sub-second — the classic **cold-start tail**.

## Root causes, ranked

### 1. Cold starts (primary) — `fusion` scales to zero
`fusion` (africa-south1) has **no `minScale`**, so ~a third of visits hit a fresh instance and
pay the 4–5s startup. `cool-mint` also has no min (maxScale=2). **Scale-to-zero is a fixed cost
requirement (see Scope), so the fix is NOT to pin an instance** — it is to remove cold starts
from the critical path (caching) and shrink the cold start itself (see Plan).

Note: 4–5s is abnormally slow for a Go service to start — a Go binary should boot in
milliseconds. That points to heavy *synchronous init* (most likely the MongoDB Atlas
connection/TLS handshake, config loading, or cache warming done eagerly at startup), not the Go
runtime. This is investigable and reducible.

### 2. Warm-path cost (secondary) — N+1 queries + cross-region hop
Even warm, p50 is 0.665s for a small read:
- **N+1 in `UpcomingSessions`** (`pepper-mint/pkg/masterClass/session.manager.go:104`, `:133`):
  after one `Find`, it issues a separate `GetProduct` per session (existence check) plus a
  `FindOne` per unique master class. A 17-session listing ≈ 1 + ~17 + M round-trips. fusion↔Mongo
  is same-region so each hop is cheap, but the count compounds.
- **Cross-region hop:** `cool-mint` (europe-west1) → `fusion`+Atlas (africa-south1) is a
  ~9,000 km round-trip, paid on every visit because the class page is `force-dynamic` with
  caching disabled.

### 3. Missing index (tertiary — real but NOT the current bottleneck)
The `UpcomingSessions` filter runs as a **COLLSCAN** (no index on `date`/`parent`; the
`masterClasses/sessions` collection only has `{name:1}`, `{_id:1}`). But the collection is tiny
(**127 docs**) so `explain` reports `execMs=0`. Instant at current scale; worth fixing
preventively as sessions grow, but expect **no latency change now**.

## Plan — ordered work items (scale-to-zero preserved)

1. **Get cold starts off the user-facing path — cache the session list in `cool-mint`.**
   Highest ROI, no infra cost, keeps `fusion` at scale-to-zero. The class page is currently
   `force-dynamic` with caching disabled, so *every* visit triggers a live cross-region RPC and
   risks a cold start. Switch the session/class fetch to **time-based revalidation** (ISR /
   `revalidate`, e.g. 60–300s — the list changes slowly) so the vast majority of visitors are
   served cached data and never touch `fusion`. A cold start then only occurs on the occasional
   background revalidation, invisible to the user. **Ship first**; this alone should collapse the
   user-perceived tail. (Verify correctness: booking still reads live availability at
   checkout/`bookSessions`; only the *display* list is cached.)
2. **Shrink the cold start itself** (so the rare uncached hit and other endpoints are fast, at
   min=0):
   - **Enable Cloud Run startup CPU boost** on `fusion` — allocates extra CPU during
     initialization, cutting startup time. Config-only, no ongoing warm-instance cost.
   - **Profile fusion startup** to find the 4–5s init cost (instrument `main`/init). If it's the
     Atlas connection/TLS handshake or cache warming done synchronously, make it **lazy/async**
     (connect on first use / in background) so the container becomes ready fast.
   - Consider shrinking the container image (smaller base, fewer layers) to cut pull/start time.
   - Re-measure the bimodal latency after each lever.
3. **De-N+1 `UpcomingSessions`** in `pepper-mint` — replace the per-session `GetProduct`
   existence check with a single batched `$in` query over all product names, and batch the
   master-class `FindOne`s similarly. Cuts the warm p50 (0.665s).
4. **Add compound index `{parent: 1, date: 1}`** on `masterClasses/sessions` — matches
   `UpcomingSessions` (with master-class filter) and `GetRelatedClasses`. Cheap, preventive.

**Optional middle-ground (only if 1+2 prove insufficient):** *scheduled* min-instances during
open business hours and 0 overnight, via Cloud Scheduler → Cloud Run admin API. Retains most of
the scale-to-zero cost saving while covering peak hours. Noted as a fallback, not the plan.

## Access / handoff notes

- Probes used the **read-only** `claude` Atlas user + existing `gcloud` access (reproducible,
  no new creds).
  - Latency query: `gcloud logging read 'resource.type="cloud_run_revision" AND resource.labels.service_name="fusion" AND jsonPayload.request.params.*="UpcomingSessions"' --freshness=30d`
  - Index/explain: `mongosh <uri> --eval 'db.getSiblingDB("pepper-mint").getCollection("masterClasses/sessions").find({date:{$gte:<now>},product:{$exists:true}}).explain("executionStats")'`
- The `minScale` change and Mongo index creation require **write/deploy access** the probe
  creds don't have — hand to whoever owns the GCP project / Atlas cluster.

## Non-goals

- No loading-indicator / UI change (per client).
- **No pinned warm instance (`minScale ≥ 1`) — too expensive; `fusion` keeps scaling to zero
  (per client).**
- No service co-location / region migration (large architectural change; out of scope for a
  quick win — revisit only if caching + cold-start reduction don't suffice).
- No proto/API contract changes.
