# Plan: session-picker fast-follows (PR #118 out-of-scope items 2 & 3)

Two independent fast-follow cleanups to the inline-session-selection work in PR
#118 (`feat/inline-session-selection`). Both live in `cool-mint`. This branch
(`fix/inline-session-followups`) is stacked on the PR branch.

## Context

PR #118 replaced the class page's "Next Session" callout + "Select Sessions"
modal with an inline multi-session selector (`components/inline-session-selector.tsx`)
built on pure helpers in `lib/util/session-selection.ts`. Two loose ends were
noted as out of scope:

- **Item 2:** `components/session-picker.tsx` still carries a `multi` mode that
  no caller uses anymore, plus its own copies of availability + date/time logic
  that duplicate the shared helpers.
- **Item 3:** On a class with no upcoming sessions the "Choose Your Date" section
  renders an empty tab bar instead of hiding.

## Global Constraints

- Package manager is **npm**. `npm test` (vitest), `npm run lint`, `npx tsc --noEmit`
  must all stay green. Baseline before this branch: 24/24 tests pass.
- Prettier style: **no semicolons**; `prettier-plugin-tailwindcss` sorts classes.
  Match surrounding code exactly.
- **No behavior change** for the one live caller of `SessionPicker`
  (`components/related-class-card.tsx`), which uses it in single-select dialog
  mode. Single-select semantics must be preserved exactly: clicking the selected
  row deselects it; clicking a different row *replaces* the selection.
- Do not touch `components/inline-session-selector.tsx` or
  `lib/util/session-selection.ts` (already shipped in #118) except to consume
  existing exports.
- Session date/time in customer-facing session lists must render in **SAST
  (Africa/Johannesburg)** — use the shared `formatSessionDate` / `formatSessionTime`
  helpers, never a runtime-local `new Date().toLocaleString`.

## Task 1: Collapse SessionPicker onto shared helpers, remove dead multi mode

**File:** `components/session-picker.tsx` (only). Its sole caller is
`components/related-class-card.tsx`, which never passes `multi` (defaults to
`false`), so every `multi`-conditional branch is dead code.

**Remove the dead `multi` mode:**
- Drop the `multi` and `maxSelections` props from `SessionPickerProps` and the
  component signature.
- Remove the `Checkbox` import and its render block (the presentational checkbox
  only ever appeared in multi mode).
- Simplify `toggleSession` to single-select only: selected row → deselect;
  other row → replace selection with `[session]`. (Do **not** use the shared
  `toggleSelection` helper — its cap-based append semantics differ from
  single-select replace.)
- Remove the multi-only dialog title ("Select Sessions"), the "select up to N"
  subtitle suffix, the multi selection-count/subtotal summary row, and the
  multi "Add N Sessions to Cart" button label. Title is always "Choose a Date";
  button label is always "Add to Cart".

**Collapse duplicated logic onto `lib/util/session-selection.ts`:**
- Replace the inline `spotsLeft` / `isFull` / `isBooked` computations with
  `infoForSession`, `spotsLeftFor`, `isSessionFull`, `isSessionBooked`.
- Delete the component-local `formatDate` / `formatTime` (which lack a `timeZone`
  and are a latent SAST/hydration bug) and use the shared `formatSessionDate` /
  `formatSessionTime`.

**Preserve unchanged:** the fetch-on-open effect, the `sessionInfos` prop and
fetched-infos fallback (`infos = sessionInfos ?? fetchedInfos`), the login-gate +
toast + `bookSessions` → cart → `/cart` flow, and the per-row price shown for the
selected session in single mode.

**Verification:** `npx tsc --noEmit` and `npm run lint` clean. There is no unit
test for this component; confirm `related-class-card.tsx` still type-checks and
its `<SessionPicker>` usage compiles unchanged.

## Task 2: Hide the "Choose Your Date" section when there are no upcoming sessions

**File:** `app/classes/[slug]/page.tsx` (only).

The page already server-fetches sessions into `masterClassSessions` (sorted). The
"Choose Your Date" block — the `<hr>` divider, the `<div id="choose-date">` heading,
and the `<Suspense><UpcomingClasses …/></Suspense>` wrapper (roughly lines
179–190) — currently renders unconditionally, so an empty class shows a heading
over an empty tab bar.

**Change:** wrap that whole block in `{masterClassSessions.length > 0 && ( … )}`
so it renders nothing when there are no upcoming sessions. Hide the section
entirely — do **not** add an empty-state message here; the booking card already
shows its own "No upcoming sessions available" state.

**Verification:** `npx tsc --noEmit` and `npm run lint` clean. Confirm the JSX
still balances and the divider/spacing for the following "Related Classes"
section is unaffected when sessions exist.
