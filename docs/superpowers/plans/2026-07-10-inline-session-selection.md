# Inline Session Selection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the class page's "Next Session" callout + "Select Sessions" modal with an inline, always-visible multi-session selection list inside the booking card, so customers pick sessions (up to 5) and book without opening a dialog.

**Architecture:** The class page (`app/classes/[slug]/page.tsx`) is a server component that already fetches and sorts the upcoming sessions server-side. We pass that full `sessions` array (plus the existing `sessionInfos`) into `BookingCard`, which renders a new client component `InlineSessionSelector` in place of the removed callout / "Reserve Your Spot" button / "Book multiple sessions" modal trigger. All selection and availability logic is extracted into a pure, dependency-free module `lib/util/session-selection.ts` and unit-tested in the node/jsdom environment already configured on `master` (no new test dependencies). The rendered component's interaction is verified manually in the browser (the repo has no React Testing Library on `master`, and #3 must not depend on the unmerged gallery branch that introduced it). The booking action (`bookSessions`), cart wiring, login gate, toasts, and redirect to `/cart` are preserved unchanged — only lifted from the dialog into the inline component.

**Tech Stack:** Next.js 14 (App Router) + TypeScript, shadcn/ui (`Checkbox`, `Badge`, `Button`, `Spinner`), Tailwind, `date-fns`/`Intl` for formatting, Vitest (already on `master`). Package manager npm. Prettier **no semicolons**.

**Working directory:** the cool-mint worktree at `.claude/worktrees/inline-session-selection` (branch `feat/inline-session-selection`, based on `origin/master`). All commands run from the worktree root.

## Global Constraints

- **Unified single CTA (client decision):** the inline list is the *only* booking surface in the card. There is **no** separate "Reserve Your Spot" button and **no** "Next Session" callout — both are removed. The first *selectable* session is pre-selected by default; one CTA below the list books whatever is selected.
- Preserve existing booking behaviour exactly: multi-select **up to 5**; per-session "spots left" / "Full" / "Already Booked" states; the same `bookSessions` server action; the same login gate, `cartContext.setCart`, toast messages, and `router.push("/cart")` redirect; the same empty state.
- **Bounded height:** with many sessions the list scrolls within a fixed max height (`max-h-80 overflow-y-auto`) rather than lengthening the card.
- **No data-fetching in the new component** — it consumes the server-fetched `sessions` prop. Do not call `upcomingSessions` client-side.
- **Do not modify** `components/session-picker.tsx` or `components/related-class-card.tsx`. `SessionPicker` stays as-is because `related-class-card.tsx` still uses it in single mode. (Its now-caller-less `multi` branch is out of scope; leave it.)
- **No new npm dependencies** and **no changes to `vitest.config.mts`**. Tests run under the existing config (jsdom env, `@vitejs/plugin-react`, `vite-tsconfig-paths`).
- No proto/API contract changes. No changes to the "Choose Your Date" section (`components/classes.tsx`, `components/base/upcomingWorkshops.tsx`, `components/workshop.tsx`) — that is a separate existing booking path.
- Code style: **no semicolons** (`.prettierrc`); `npm run lint` and `npx tsc --noEmit` must stay clean. Path alias `@/*` → repo root.

## File Structure

- `lib/util/session-selection.ts` (new) — pure selection/availability helpers. One responsibility: the rules for which sessions are bookable and how selection toggles within the cap. No React, no I/O.
- `lib/util/session-selection.test.ts` (new) — unit tests for the above.
- `components/inline-session-selector.tsx` (new) — `"use client"` component: renders the selectable list + summary + CTA, owns selection state and the add-to-cart flow.
- `components/booking-card.tsx` (modify) — remove callout / reserve button / modal trigger / `SessionPicker` mount; render `InlineSessionSelector`; trim now-unused props and imports.
- `app/classes/[slug]/page.tsx` (modify) — pass `sessions={masterClassSessions}` to `BookingCard`; stop passing `firstAvailableSession`, `masterClassName`, `displayName`.

---

## Task 1: Pure selection & availability helpers (TDD)

**Files:**
- Create: `lib/util/session-selection.ts`
- Test: `lib/util/session-selection.test.ts`

**Interfaces:**
- Consumes: `Session` from `@/lib/fusion/masterClass/session.pb` (`{ name, uid, parent, date, product, confirmedAttendees, attendees }`); `SessionInfo` from `@/lib/fusion/masterClass/session.manager.pb` (`{ session, availableSpots, isUserBooked }`).
- Produces (used by Task 2's component):
  - `infoForSession(session: Session, infos: SessionInfo[]): SessionInfo | undefined`
  - `spotsLeftFor(session: Session, info: SessionInfo | undefined, maxAttendees: number): number`
  - `isSessionBooked(info: SessionInfo | undefined): boolean`
  - `isSessionFull(session: Session, info: SessionInfo | undefined, maxAttendees: number): boolean`
  - `firstSelectableSession(sessions: Session[], infos: SessionInfo[], maxAttendees: number): Session | undefined`
  - `toggleSelection(selected: Session[], session: Session, maxSelections: number): Session[]`

- [ ] **Step 1: Write the failing test**

Create `lib/util/session-selection.test.ts`:
```ts
import { describe, it, expect } from "vitest"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import {
  firstSelectableSession,
  infoForSession,
  isSessionBooked,
  isSessionFull,
  spotsLeftFor,
  toggleSelection,
} from "./session-selection"

const session = (name: string, confirmedAttendees = 0): Session => ({
  name,
  uid: name,
  parent: "masterClasses/x",
  date: "2026-07-12T09:00:00Z",
  product: "",
  confirmedAttendees,
  attendees: [],
})

const info = (
  name: string,
  availableSpots: number,
  isUserBooked = false,
): SessionInfo => ({ session: name, availableSpots, isUserBooked })

describe("spotsLeftFor", () => {
  it("uses SessionInfo.availableSpots when the info is present", () => {
    expect(spotsLeftFor(session("s1", 5), info("s1", 3), 6)).toBe(3)
  })

  it("falls back to maxAttendees - confirmedAttendees when no info", () => {
    expect(spotsLeftFor(session("s1", 4), undefined, 6)).toBe(2)
  })
})

describe("isSessionBooked", () => {
  it("is true when the info marks the user booked", () => {
    expect(isSessionBooked(info("s1", 3, true))).toBe(true)
  })

  it("is false when info is absent or not booked", () => {
    expect(isSessionBooked(info("s1", 3, false))).toBe(false)
    expect(isSessionBooked(undefined)).toBe(false)
  })
})

describe("isSessionFull", () => {
  it("is true when zero spots remain", () => {
    expect(isSessionFull(session("s1"), info("s1", 0), 6)).toBe(true)
  })

  it("is false when spots remain", () => {
    expect(isSessionFull(session("s1"), info("s1", 1), 6)).toBe(false)
  })
})

describe("infoForSession", () => {
  it("matches the info whose session equals the session name", () => {
    const infos = [info("s1", 1), info("s2", 2)]
    expect(infoForSession(session("s2"), infos)?.availableSpots).toBe(2)
  })

  it("returns undefined when no info matches", () => {
    expect(infoForSession(session("s3"), [info("s1", 1)])).toBeUndefined()
  })
})

describe("firstSelectableSession", () => {
  it("returns the first session with spots that is not booked", () => {
    const sessions = [session("full"), session("open"), session("open2")]
    const infos = [info("full", 0), info("open", 2), info("open2", 3)]
    expect(firstSelectableSession(sessions, infos, 6)?.name).toBe("open")
  })

  it("skips sessions the user has already booked", () => {
    const sessions = [session("booked"), session("open")]
    const infos = [info("booked", 2, true), info("open", 2)]
    expect(firstSelectableSession(sessions, infos, 6)?.name).toBe("open")
  })

  it("returns undefined when nothing is selectable", () => {
    const sessions = [session("full")]
    const infos = [info("full", 0)]
    expect(firstSelectableSession(sessions, infos, 6)).toBeUndefined()
  })
})

describe("toggleSelection", () => {
  const s1 = session("s1")
  const s2 = session("s2")

  it("adds a session that is not selected", () => {
    expect(toggleSelection([], s1, 5).map((s) => s.name)).toEqual(["s1"])
  })

  it("removes a session that is already selected", () => {
    expect(toggleSelection([s1, s2], s1, 5).map((s) => s.name)).toEqual(["s2"])
  })

  it("does not add beyond maxSelections", () => {
    const five = [1, 2, 3, 4, 5].map((n) => session("s" + n))
    const result = toggleSelection(five, session("s6"), 5)
    expect(result).toHaveLength(5)
    expect(result.map((s) => s.name)).not.toContain("s6")
  })

  it("still allows removing when at the cap", () => {
    const five = [1, 2, 3, 4, 5].map((n) => session("s" + n))
    const result = toggleSelection(five, five[0], 5)
    expect(result.map((s) => s.name)).toEqual(["s2", "s3", "s4", "s5"])
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run (from the worktree root): `npm test`
Expected: FAIL — cannot resolve `./session-selection` (module does not exist yet).

- [ ] **Step 3: Create the module**

Create `lib/util/session-selection.ts`:
```ts
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"

// Per-session availability comes from the parallel SessionInfo array (matched by
// `info.session === session.name`); capacity is the master class's maxAttendees.
export function infoForSession(
  session: Session,
  infos: SessionInfo[],
): SessionInfo | undefined {
  return infos.find((si) => si.session === session.name)
}

export function spotsLeftFor(
  session: Session,
  info: SessionInfo | undefined,
  maxAttendees: number,
): number {
  return info ? info.availableSpots : maxAttendees - session.confirmedAttendees
}

export function isSessionBooked(info: SessionInfo | undefined): boolean {
  return info?.isUserBooked ?? false
}

export function isSessionFull(
  session: Session,
  info: SessionInfo | undefined,
  maxAttendees: number,
): boolean {
  return spotsLeftFor(session, info, maxAttendees) <= 0
}

// The session to pre-select by default: the first one that is neither full nor
// already booked by the user.
export function firstSelectableSession(
  sessions: Session[],
  infos: SessionInfo[],
  maxAttendees: number,
): Session | undefined {
  return sessions.find((s) => {
    const info = infoForSession(s, infos)
    return !isSessionFull(s, info, maxAttendees) && !isSessionBooked(info)
  })
}

// Toggle a session in/out of the selection, enforcing the max-selection cap.
// Removing an already-selected session always succeeds, even at the cap.
export function toggleSelection(
  selected: Session[],
  session: Session,
  maxSelections: number,
): Session[] {
  if (selected.some((s) => s.name === session.name)) {
    return selected.filter((s) => s.name !== session.name)
  }
  if (selected.length >= maxSelections) {
    return selected
  }
  return [...selected, session]
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run (from the worktree root): `npm test`
Expected: PASS — `session-selection` suite green; `format-duration` suite (pre-existing) still green.

- [ ] **Step 5: Lint & type-check the new files**

Run (from the worktree root):
```bash
npm run lint
npx tsc --noEmit
```
Expected: clean. If `tsc` reports pre-existing errors unrelated to `lib/util/session-selection.*`, note them in the report rather than fixing them (out of scope).

- [ ] **Step 6: Commit**

```bash
git add lib/util/session-selection.ts lib/util/session-selection.test.ts
git commit -m "feat: add pure session selection/availability helpers"
```

---

## Task 2: Inline selector component + wire it into the booking card

**Files:**
- Create: `components/inline-session-selector.tsx`
- Modify: `components/booking-card.tsx`
- Modify: `app/classes/[slug]/page.tsx`

**Interfaces:**
- Consumes: the Task 1 helpers; `bookSessions` from `@/app/classes/actions`; `useCart`, `useUser`; `Session`, `SessionInfo`; `moneyFormatter`; `parseError`; shadcn `Badge`/`Button`/`Checkbox`/`Spinner`.
- Produces: `InlineSessionSelector` (default export not required; named export). `BookingCard` renders it. `page.tsx` feeds `BookingCard` the `sessions` array.

- [ ] **Step 1: Create the `InlineSessionSelector` component**

Create `components/inline-session-selector.tsx`:
```tsx
"use client"

import { bookSessions } from "@/app/classes/actions"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import { parseError } from "@/lib/util/error"
import { moneyFormatter } from "@/lib/util/money-formatter"
import {
  firstSelectableSession,
  infoForSession,
  isSessionBooked,
  isSessionFull,
  spotsLeftFor,
  toggleSelection,
} from "@/lib/util/session-selection"
import { Calendar, Clock, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Spinner } from "./ui/spinner"

interface InlineSessionSelectorProps {
  maxAttendees: number
  standardPrice: bigint
  sessions: Session[]
  sessionInfos?: SessionInfo[]
  maxSelections?: number
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })

const formatTime = (dateStr: string) =>
  new Date(dateStr).toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
  })

export const InlineSessionSelector: React.FC<InlineSessionSelectorProps> = ({
  maxAttendees,
  standardPrice,
  sessions,
  sessionInfos,
  maxSelections = 5,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const infos = sessionInfos ?? []
  const [selected, setSelected] = React.useState<Session[]>(() => {
    const first = firstSelectableSession(sessions, infos, maxAttendees)
    return first ? [first] : []
  })
  const [loading, setLoading] = React.useState(false)

  const toggleSession = (session: Session) => {
    setSelected((prev) => toggleSelection(prev, session, maxSelections))
  }

  const handleAddToCart = async () => {
    if (!user) {
      const loginUrl = new URL("/login", window.location.origin)
      if (pathname !== "/") {
        loginUrl.searchParams.set("redirect", pathname.slice(1))
      }
      toast("Please login to book your spot", {
        action: {
          label: "Login",
          onClick: () => router.push(loginUrl.toString()),
        },
      })
      return
    }

    if (selected.length === 0) return

    try {
      setLoading(true)
      const response = await bookSessions({
        items: selected.map((s) => ({ session: s.name, quantity: 1 })),
      })

      if (response.cart) {
        cartContext.setCart(response.cart)
      }

      setLoading(false)

      if (response.errors.length > 0 && response.booked.length > 0) {
        toast.warning(
          `Added ${response.booked.length} session${response.booked.length > 1 ? "s" : ""} to cart. ${response.errors.length} failed: ${response.errors.map((e) => e.reason).join(", ")}`,
        )
      } else if (response.errors.length > 0) {
        toast.error(response.errors.map((e) => e.reason).join(", "))
        return
      } else {
        toast.success(
          response.booked.length === 1
            ? "Added to cart"
            : `Added ${response.booked.length} sessions to cart`,
        )
      }
      router.push("/cart")
    } catch (e: unknown) {
      setLoading(false)
      toast.error("Failed to add to cart: " + parseError(e))
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-helvetica font-semibold text-foreground">
          Select sessions
        </p>
        <span className="text-xs text-muted-foreground">
          up to {maxSelections}
        </span>
      </div>

      {sessions.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No upcoming sessions available
        </p>
      ) : (
        <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
          {sessions.map((session) => {
            const info = infoForSession(session, infos)
            const spotsLeft = spotsLeftFor(session, info, maxAttendees)
            const isFull = isSessionFull(session, info, maxAttendees)
            const isBooked = isSessionBooked(info)
            const isSelected = selected.some((s) => s.name === session.name)
            const isDisabled = isFull || isBooked

            return (
              <button
                key={session.name}
                type="button"
                disabled={isDisabled}
                onClick={() => toggleSession(session)}
                className={`w-full rounded-lg border p-3 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : isDisabled
                      ? "cursor-not-allowed border-muted/20 opacity-50"
                      : "border-muted/20 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={isSelected}
                    disabled={isDisabled}
                    className="pointer-events-none"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">
                        {formatDate(session.date)}
                      </span>
                      <Clock className="ml-2 h-4 w-4 text-primary" />
                      <span className="text-foreground">
                        {formatTime(session.date)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      {isBooked ? (
                        <Badge variant="secondary" className="text-xs">
                          Already Booked
                        </Badge>
                      ) : isFull ? (
                        <Badge variant="destructive" className="text-xs">
                          Full
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {spotsLeft} spots left
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {selected.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {selected.length} session{selected.length > 1 ? "s" : ""} selected
            </span>
            <span className="font-semibold text-primary">
              {moneyFormatter.format(
                (standardPrice * BigInt(selected.length)) / 100n,
              )}
            </span>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={loading}
            className="relative w-full"
          >
            {selected.length > 1
              ? `Add ${selected.length} Sessions to Cart`
              : "Add to Cart"}
            {loading && (
              <Spinner className="absolute right-4 h-4 w-4 text-background" />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Rewrite `booking-card.tsx` to use the inline selector**

Replace the entire contents of `components/booking-card.tsx` with:
```tsx
"use client"

import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import { formatDuration } from "@/lib/util/format-duration"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { Clock, MapPin, SignalHigh, Users } from "lucide-react"
import React from "react"
import { InlineSessionSelector } from "./inline-session-selector"

interface BookingCardProps {
  standardPrice: bigint
  difficulty: string
  duration: number
  maxAttendees: number
  spotsFilled: number
  sessions: Session[]
  sessionInfos?: SessionInfo[]
}

export const BookingCard: React.FC<BookingCardProps> = ({
  standardPrice,
  difficulty,
  duration,
  maxAttendees,
  spotsFilled,
  sessions,
  sessionInfos,
}) => {
  const spotsRemaining = maxAttendees - spotsFilled
  const fillPercentage = (spotsFilled / maxAttendees) * 100

  return (
    <div
      className={
        "rounded-lg border border-primary/10 bg-[#262626] px-6 py-6 font-helvetica"
      }
    >
      {/* Price */}
      <div className="mb-6">
        <span className="font-helvetica text-3xl font-bold text-primary">
          {moneyFormatter.format(standardPrice / 100n)}
        </span>
        <p className="text-sm text-muted-foreground">per person</p>
      </div>

      {/* Class Details */}
      <div className="space-y-4">
        {/* Difficulty */}
        <div className="flex items-start gap-3">
          <SignalHigh className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Difficulty</p>
            <p className="font-helvetica font-medium normal-case text-foreground">
              {difficulty}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="font-helvetica font-medium text-foreground">
              {formatDuration(duration)}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="font-helvetica font-medium text-foreground">
              10 Naaf St, Strydompark, Randburg, 2169
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Availability</p>
            <p className="font-helvetica font-medium text-foreground">
              {spotsFilled} / {maxAttendees} spots filled
            </p>
            {/* Progress Bar */}
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-primary">
              {spotsRemaining} spots remaining
            </p>
          </div>
        </div>
      </div>

      {/* Inline session selection + booking CTA */}
      <InlineSessionSelector
        maxAttendees={maxAttendees}
        standardPrice={standardPrice}
        sessions={sessions}
        sessionInfos={sessionInfos}
        maxSelections={5}
      />

      {/* Cancellation Policy */}
      <p className="mt-4 text-center text-xs text-white/80">
        Free cancellation up to 48 hours before class
      </p>
    </div>
  )
}
```

- [ ] **Step 3: Update the class page to pass `sessions`**

In `app/classes/[slug]/page.tsx`, the `<BookingCard .../>` element is currently (around lines 132–142):
```tsx
              <BookingCard
                masterClassName={masterClass.name}
                displayName={masterClass.displayName}
                standardPrice={masterClass.standardPrice}
                difficulty={masterClass.difficulty}
                duration={masterClass.duration}
                maxAttendees={totalSpots}
                spotsFilled={spotsFilled}
                firstAvailableSession={firstAvailableSession}
                sessionInfos={sessionInfos}
              />
```
Replace it with (drop `masterClassName`, `displayName`, `firstAvailableSession`; add `sessions`):
```tsx
              <BookingCard
                standardPrice={masterClass.standardPrice}
                difficulty={masterClass.difficulty}
                duration={masterClass.duration}
                maxAttendees={totalSpots}
                spotsFilled={spotsFilled}
                sessions={masterClassSessions}
                sessionInfos={sessionInfos}
              />
```
Leave the rest of `page.tsx` unchanged: `firstAvailableSession` is still computed locally to derive `spotsFilled` (line ~49–53), so keep that block. Do **not** remove the `firstAvailableSession` local variable.

- [ ] **Step 4: Verify lint & types**

Run (from the worktree root):
```bash
npm run lint
npx tsc --noEmit
```
Expected: clean. Common gotchas this must catch:
- No unused imports/vars in `booking-card.tsx` (removed: `bookSessions`, `useCart`, `useUser`, `usePathname`, `useRouter`, `toast`, `parseError`, `format` from date-fns, `Calendar`, `Spinner`, `SessionPicker`, and the removed props).
- No unused `firstAvailableSession`-related props in `page.tsx` (the JSX no longer passes them, but the local `const firstAvailableSession` is still used for `spotsFilled`).
If `tsc` reports pre-existing errors unrelated to the three changed files, note them in the report (out of scope).

- [ ] **Step 5: Run the full test suite**

Run (from the worktree root): `npm test`
Expected: PASS — `session-selection` and `format-duration` suites green. (No test renders `InlineSessionSelector`; its interaction is covered by the manual verification gate below, since React Testing Library is not available on `master`.)

- [ ] **Step 6: Commit**

```bash
git add components/inline-session-selector.tsx components/booking-card.tsx "app/classes/[slug]/page.tsx"
git commit -m "feat: inline multi-session selection on the class page"
```

---

## Manual Verification Gate (browser — required before merge)

The rendered component is not unit-tested (no RTL on `master`). Before this branch merges, verify in the browser (`npm run dev`, open a class page):

1. **List renders inline** — no "Next Session" callout, no "Reserve Your Spot" button, no "Book multiple sessions" link, no dialog. The selectable list sits inside the booking card under the availability block.
2. **Default selection** — the first session with spots (not full, not already booked) is pre-checked, the summary reads "1 session selected", and the total equals one seat's price.
3. **Multi-select + cap** — checking more sessions updates the count and total; the 6th selection is refused (cap 5). Unchecking removes it.
4. **Per-session states** — a full session shows the "Full" badge and is not selectable; "N spots left" shows for available ones.
5. **Booking flow** — logged out → login toast with redirect; logged in → "Add to Cart" books the selected sessions, cart updates, redirect to `/cart`. Error/partial-error toasts behave as before.
6. **Empty state** — a class with no upcoming sessions shows "No upcoming sessions available" and no CTA.
7. **Bounded height** — a class with many sessions scrolls the list within the card instead of lengthening the page.
8. **Related-class card unaffected** — the "Book" button on related-class cards still opens the `SessionPicker` dialog (single mode) and books correctly.

---

## Self-Review

**1. Spec coverage (#3):**
- Replace "Next Session" callout + "Select Sessions" modal with an inline selectable list → Task 2 removes both and renders `InlineSessionSelector` inline. ✅
- Multi-select up to 5 → `toggleSelection` cap (Task 1), tested; `maxSelections={5}` wired (Task 2). ✅
- Per-session "spots left" / Full / Already Booked → `spotsLeftFor`/`isSessionFull`/`isSessionBooked` (Task 1) drive the badges (Task 2). ✅
- Same `bookSessions` action, cart, login gate, toasts, redirect → lifted verbatim into `InlineSessionSelector.handleAddToCart`. ✅
- Empty state → "No upcoming sessions available" (Task 2). ✅
- Many sessions scroll within bounded height → `max-h-80 overflow-y-auto` (Task 2, Global Constraints). ✅
- Remove the now-unused modal trigger; keep `SessionPicker` (still used by `related-class-card.tsx`) → Global Constraints; `session-picker.tsx` untouched. ✅

**2. Placeholder scan:** No TBD/TODO; every code step shows complete file content or an exact before/after JSX replacement. The lint step lists the concrete unused symbols to remove — that is a verification checklist, not a placeholder. ✅

**3. Type consistency:** `InlineSessionSelectorProps` (`maxAttendees`, `standardPrice: bigint`, `sessions: Session[]`, `sessionInfos?: SessionInfo[]`, `maxSelections?`) matches the `<InlineSessionSelector>` call in `booking-card.tsx`. `BookingCardProps` matches the `<BookingCard>` call in `page.tsx` (both drop `masterClassName`/`displayName`/`firstAvailableSession`, both add `sessions`). Helper signatures in Task 1's "Produces" block match their imports and call sites in Task 2. `standardPrice` stays `bigint` end-to-end; totals use `/ 100n` as before. ✅
