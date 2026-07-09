# Duration Hours Format (#2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show class duration consistently as a compact `1h 30m`-style string everywhere it appears, instead of raw minutes / ad-hoc division.

**Architecture:** Add a single pure helper `formatDuration(minutes)` in `cool-mint/lib/util/`, unit-tested with a newly-introduced Vitest framework, then swap the three render sites to use it. Duration is stored on `MasterClass.duration` as an integer number of **minutes**.

**Tech Stack:** Next.js 14 (App Router) + TypeScript, Vitest (introduced here), Tailwind/shadcn. Package manager: **npm**. Prettier: **no semicolons**, `prettier-plugin-tailwindcss`.

## Global Constraints

- Compact duration format (verbatim from spec): 120 min → `2h`; 90 min → `1h 30m`; 45 min → `45m`; 60 min → `1h`.
- Rule: `h = floor(min/60)`, `m = min % 60`; render `${h}h` when `m === 0`, `${h}h ${m}m` when both, `${m}m` when `h === 0`.
- Path alias: `@/*` → repo root (`tsconfig.json`).
- Code style: no semicolons; lib helpers camelCase; components PascalCase.
- All commands run from `cool-mint/` (its own git repo). Package manager is npm.
- Do not introduce ESLint/Prettier violations — `npm run lint` must stay clean.

---

### Task 1: Introduce Vitest test framework

**Files:**
- Create: `cool-mint/vitest.config.ts`
- Modify: `cool-mint/package.json` (devDependencies + scripts)
- Test: `cool-mint/lib/util/sanity.test.ts` (temporary sanity check, removed in Task 2)

**Interfaces:**
- Consumes: nothing (foundational).
- Produces: an `npm test` script that runs Vitest over `**/*.test.{ts,tsx}`; the `@/*` path alias resolves in tests; `jsdom` environment available for future component tests.

- [ ] **Step 1: Install Vitest dev dependencies**

Run (from `cool-mint/`):
```bash
npm install -D vitest@^2 @vitejs/plugin-react@^4 vite-tsconfig-paths@^5 jsdom@^25
```
Expected: packages added to `devDependencies`, `package-lock.json` updated, no peer-dep errors that abort install.

- [ ] **Step 2: Create the Vitest config**

Create `cool-mint/vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", ".next"],
  },
})
```

- [ ] **Step 3: Add test scripts to package.json**

In `cool-mint/package.json`, add to the `"scripts"` block (alongside `dev`/`build`/`start`/`lint`):
```json
    "test": "vitest run",
    "test:watch": "vitest"
```

- [ ] **Step 4: Add a temporary sanity test**

Create `cool-mint/lib/util/sanity.test.ts`:
```ts
import { describe, it, expect } from "vitest"

describe("vitest framework", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2)
  })
})
```

- [ ] **Step 5: Run the sanity test to verify the framework works**

Run: `npm test`
Expected: PASS — 1 test file, 1 passing test. Confirms Vitest, TS, and the config load correctly.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.ts lib/util/sanity.test.ts
git commit -m "test: introduce vitest test framework"
```

---

### Task 2: `formatDuration` helper (TDD)

**Files:**
- Create: `cool-mint/lib/util/format-duration.ts`
- Test: `cool-mint/lib/util/format-duration.test.ts`
- Delete: `cool-mint/lib/util/sanity.test.ts` (no longer needed)

**Interfaces:**
- Consumes: Vitest (Task 1).
- Produces: `export function formatDuration(minutes: number): string` — importable from `@/lib/util/format-duration`. Returns the compact string per Global Constraints.

- [ ] **Step 1: Write the failing test**

Create `cool-mint/lib/util/format-duration.test.ts`:
```ts
import { describe, it, expect } from "vitest"
import { formatDuration } from "@/lib/util/format-duration"

describe("formatDuration", () => {
  it("formats whole hours", () => {
    expect(formatDuration(120)).toBe("2h")
    expect(formatDuration(60)).toBe("1h")
  })
  it("formats hours and minutes", () => {
    expect(formatDuration(90)).toBe("1h 30m")
    expect(formatDuration(150)).toBe("2h 30m")
  })
  it("formats sub-hour durations as minutes", () => {
    expect(formatDuration(45)).toBe("45m")
    expect(formatDuration(0)).toBe("0m")
  })
  it("clamps negatives and rounds fractional minutes", () => {
    expect(formatDuration(-10)).toBe("0m")
    expect(formatDuration(90.4)).toBe("1h 30m")
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `@/lib/util/format-duration` (module does not exist yet).

- [ ] **Step 3: Write the minimal implementation**

Create `cool-mint/lib/util/format-duration.ts`:
```ts
export function formatDuration(minutes: number): string {
  const total = Math.max(0, Math.round(minutes))
  const hours = Math.floor(total / 60)
  const mins = total % 60
  if (hours === 0) return `${mins}m`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}
```

- [ ] **Step 4: Delete the temporary sanity test**

Run: `rm lib/util/sanity.test.ts`

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS — all `formatDuration` cases green; no sanity test remaining.

- [ ] **Step 6: Commit**

```bash
git add lib/util/format-duration.ts lib/util/format-duration.test.ts lib/util/sanity.test.ts
git commit -m "feat: add formatDuration helper"
```

---

### Task 3: Wire the three render sites to `formatDuration`

**Files:**
- Modify: `cool-mint/components/booking-card.tsx:139`
- Modify: `cool-mint/components/related-class-card.tsx:48`
- Modify: `cool-mint/components/workshop.tsx:121`

**Interfaces:**
- Consumes: `formatDuration` from `@/lib/util/format-duration` (Task 2).
- Produces: no new exports; all three sites render the compact duration string.

- [ ] **Step 1: Update `booking-card.tsx`**

Add the import near the other imports at the top of `cool-mint/components/booking-card.tsx`:
```tsx
import { formatDuration } from "@/lib/util/format-duration"
```
Replace the duration line (currently line 139, `{duration} Minutes`):
```tsx
              {duration} Minutes
```
with:
```tsx
              {formatDuration(duration)}
```
(`duration` is the existing minutes prop already in scope in this component.)

- [ ] **Step 2: Update `related-class-card.tsx`**

Add the import near the top of `cool-mint/components/related-class-card.tsx`:
```tsx
import { formatDuration } from "@/lib/util/format-duration"
```
Replace the duration line (currently line 48, `{course.duration} Minutes`):
```tsx
              {course.duration} Minutes
```
with:
```tsx
              {formatDuration(course.duration)}
```

- [ ] **Step 3: Update `workshop.tsx`**

Add the import near the top of `cool-mint/components/workshop.tsx`:
```tsx
import { formatDuration } from "@/lib/util/format-duration"
```
Replace the ad-hoc division line (currently line 121, `{masterClass.duration / 60} hours`):
```tsx
              <p>{masterClass.duration / 60} hours</p>
```
with:
```tsx
              <p>{formatDuration(masterClass.duration)}</p>
```

- [ ] **Step 4: Verify build and lint pass**

Run: `npm run lint && npm run build`
Expected: lint clean; build succeeds with no TypeScript errors (confirms `formatDuration` is imported correctly and `duration`/`course.duration`/`masterClass.duration` are all `number`).

- [ ] **Step 5: Manual visual verification**

Run `npm run dev`, then check that duration renders in compact form (e.g. `2h`, `1h 30m`) in all three places:
- Individual class page booking card (the "Time" row) — `/classes/<slug>`.
- A related-class card at the bottom of a class page.
- A workshop/class listing card (`workshop.tsx` usage).

Confirm no site still shows "Minutes" or a decimal like `2.5 hours`.

- [ ] **Step 6: Commit**

```bash
git add components/booking-card.tsx components/related-class-card.tsx components/workshop.tsx
git commit -m "feat: display class duration in compact hours format"
```

---

## Self-Review

**1. Spec coverage (#2 section):**
- Compact format `1h 30m` with the exact boundary cases (120/90/45/60) → Task 2 test + implementation. ✅
- `formatDuration(minutes)` shared helper → Task 2. ✅
- Applied at `booking-card.tsx`, `related-class-card.tsx`, and `workshop.tsx` (replacing the ad-hoc `duration/60`) → Task 3. ✅
- "unit-test the helper across the boundary cases" → Task 2 covers all spec cases plus 0/negative/fractional guards. ✅

**2. Placeholder scan:** No TBD/TODO; every code step shows complete code. ✅

**3. Type consistency:** `formatDuration(minutes: number): string` defined in Task 2 and consumed with `number` arguments (`duration`, `course.duration`, `masterClass.duration`) in Task 3. Import path `@/lib/util/format-duration` consistent across all tasks. ✅
