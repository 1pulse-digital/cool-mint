# Class Gallery Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static 2-image class-page gallery with a full-width swipeable carousel (arrows + pagination dots) that shows *all* gallery images, plus a click-to-zoom lightbox.

**Architecture:** Extract a new `"use client"` `ClassGallery` component that receives the gallery images and renders the carousel + lightbox, replacing the inline static grid in the server component `app/classes/[slug]/page.tsx`. Reuse the existing Embla `carousel.tsx` (arrows/keyboard built in; dots built here from `setApi`) and Radix `dialog.tsx` (dark overlay) for the lightbox.

**Tech Stack:** Next.js 14 (App Router) + TypeScript, Vitest + React Testing Library (component tests), Embla Carousel 8, Radix Dialog, `next/image`, Tailwind/shadcn. npm; Prettier no-semicolons.

## Assumptions & prerequisites

1. **Vitest is already on `master`.** The duration-format work (which introduced Vitest — `vitest.config.mts` + the `test` script) has been squash-merged to `master`, so this branches cleanly off `master`. Task 1 below only adds the *component-testing* layer (React Testing Library) on top.
2. **Embla + jsdom limitation.** Embla needs real layout, which jsdom lacks, so component tests verify *structure and behavior* (image count, alt text, dot count, controls present for 2+ images, lightbox opens on click, empty/single-image handling) — not actual scroll physics. Swipe/scroll motion is verified in the manual visual step.
3. **Image data shape (from proto research):** each gallery image `Object` has `url`, `description` (documented as the alt-text source), `contentType` — **no width/height, captions, or blur data**. Aspect ratio is imposed by the container. Image count is unbounded (0 → N). All URLs are from the allowed `storage.googleapis.com/made-in-workshop/**` host.
4. Gallery design (carousel + lightbox) was approved in the batch spec; no new design decisions are needed here.

## Global Constraints

- Show **all** `gallery.images`, not just the first two.
- Alt text from each image's `description`; fall back to `masterClass.displayName` when `description` is empty. Never hardcode `"Gallery Image"`.
- Graceful counts: **0 images → render nothing**; **1 image → static featured image, no arrows/dots**; **2+ → full carousel with arrows + dots**.
- `next/image` with `object-cover` and a responsive `sizes` prop; only `storage.googleapis.com/made-in-workshop/**` is a permitted host.
- The class page (`app/classes/[slug]/page.tsx`) is a server component (`export const dynamic = "force-dynamic"`) — all interactivity lives in the new `"use client"` child.
- Styling: dark theme, gold/amber `--primary` (`43 97% 54%`), `rounded-lg`, shadcn tokens; match existing class-page conventions.
- Path alias `@/*` → repo root. Code style: no semicolons. `npm run lint` clean; `npm run build` succeeds.

---

### Task 1: Add React Testing Library for component tests

**Files:**
- Modify: `cool-mint/package.json` (devDependencies)
- Create: `cool-mint/vitest.setup.ts`
- Modify: `cool-mint/vitest.config.mts` (register the setup file)
- Test: `cool-mint/components/class-gallery.smoke.test.tsx` (temporary, removed in Task 2)

**Interfaces:**
- Consumes: Vitest from #2 (see Assumptions).
- Produces: RTL (`render`, `screen`) + `@testing-library/jest-dom` matchers available in `*.test.tsx`; jsdom environment already set by #2's config.

- [ ] **Step 1: Install RTL dev dependencies**

Run (from `cool-mint/`):
```bash
npm install -D @testing-library/react@^16 @testing-library/user-event@^14 @testing-library/jest-dom@^6
```

- [ ] **Step 2: Create the Vitest setup file**

Create `cool-mint/vitest.setup.ts`:
```ts
import "@testing-library/jest-dom/vitest"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

afterEach(() => {
  cleanup()
})
```

- [ ] **Step 3: Register the setup file in vitest.config.mts**

In `cool-mint/vitest.config.mts`, add `setupFiles` to the `test` block:
```ts
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", ".next"],
  },
```

- [ ] **Step 4: Add a temporary smoke test that renders JSX via RTL**

Create `cool-mint/components/class-gallery.smoke.test.tsx`:
```tsx
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("rtl setup", () => {
  it("renders JSX and matches jest-dom matchers", () => {
    render(<p>hello gallery</p>)
    expect(screen.getByText("hello gallery")).toBeInTheDocument()
  })
})
```

- [ ] **Step 5: Run the smoke test**

Run: `npm test`
Expected: PASS — confirms RTL renders and `toBeInTheDocument` (jest-dom) works.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.setup.ts vitest.config.mts components/class-gallery.smoke.test.tsx
git commit -m "test: add react testing library for component tests"
```

---

### Task 2: `ClassGallery` component — carousel + dots (TDD)

**Files:**
- Create: `cool-mint/components/class-gallery.tsx`
- Test: `cool-mint/components/class-gallery.test.tsx`
- Delete: `cool-mint/components/class-gallery.smoke.test.tsx`

**Interfaces:**
- Consumes: RTL (Task 1); `Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext` from `@/components/ui/carousel`; `next/image`.
- Produces: `export type GalleryImage = { url: string; description: string }` and `export function ClassGallery(props: { images: GalleryImage[]; title: string }): JSX.Element | null`. Later tasks add the lightbox to this same component.

- [ ] **Step 1: Write the failing test**

Create `cool-mint/components/class-gallery.test.tsx`:
```tsx
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ClassGallery } from "@/components/class-gallery"

const img = (n: number, desc = "") => ({
  url: `https://storage.googleapis.com/made-in-workshop/g${n}.jpg`,
  description: desc,
})

describe("ClassGallery", () => {
  it("renders nothing when there are no images", () => {
    const { container } = render(<ClassGallery images={[]} title="Woodworking 101" />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders a single image without carousel controls", () => {
    render(<ClassGallery images={[img(1, "A lathe")]} title="Woodworking 101" />)
    expect(screen.getByAltText("A lathe")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /previous|next/i })).toBeNull()
  })

  it("renders all images and carousel controls for 2+ images", () => {
    render(
      <ClassGallery
        images={[img(1, "A lathe"), img(2), img(3, "A chisel")]}
        title="Woodworking 101"
      />,
    )
    // all three images present
    expect(screen.getByAltText("A lathe")).toBeInTheDocument()
    expect(screen.getByAltText("A chisel")).toBeInTheDocument()
    // empty description falls back to the class title
    expect(screen.getAllByAltText("Woodworking 101").length).toBe(1)
    // arrows present
    expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument()
    // one pagination dot per image
    expect(screen.getAllByRole("button", { name: /go to image/i })).toHaveLength(3)
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `@/components/class-gallery`.

- [ ] **Step 3: Write the minimal implementation**

Create `cool-mint/components/class-gallery.tsx`:
```tsx
"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export type GalleryImage = { url: string; description: string }

const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"

function altFor(image: GalleryImage, title: string): string {
  return image.description.trim() || title
}

export function ClassGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title: string
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="py-10">
        <div className="relative h-[480px] overflow-hidden rounded-lg">
          <Image
            src={images[0].url}
            alt={altFor(images[0], title)}
            className="object-cover"
            sizes={IMAGE_SIZES}
            fill
          />
        </div>
      </div>
    )
  }

  return (
    <div className="py-10">
      <Carousel setApi={setApi} opts={{ loop: true }} className="mx-12">
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={image.url + i}>
              <div className="relative h-[480px] overflow-hidden rounded-lg">
                <Image
                  src={image.url}
                  alt={altFor(image, title)}
                  className="object-cover"
                  sizes={IMAGE_SIZES}
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={"dot-" + image.url + i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === selected}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === selected ? "bg-primary" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Delete the temporary smoke test**

Run: `rm components/class-gallery.smoke.test.tsx`

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS — all `ClassGallery` cases green. (Note: `CarouselPrevious`/`CarouselNext` render with accessible names "Previous slide"/"Next slide" from `carousel.tsx`; the `/previous/i` and `/next/i` matchers rely on that.)

- [ ] **Step 6: Commit**

```bash
git add components/class-gallery.tsx components/class-gallery.test.tsx components/class-gallery.smoke.test.tsx
git commit -m "feat: add ClassGallery carousel component with pagination dots"
```

---

### Task 3: Click-to-zoom lightbox (TDD)

**Files:**
- Modify: `cool-mint/components/class-gallery.tsx`
- Modify: `cool-mint/components/class-gallery.test.tsx`

**Interfaces:**
- Consumes: `Dialog, DialogContent` from `@/components/ui/dialog`; `@testing-library/user-event`.
- Produces: clicking any featured/carousel image opens a full-screen `Dialog` lightbox containing a carousel of all images, opened at the clicked index.

- [ ] **Step 1: Add the failing lightbox test**

Append to `cool-mint/components/class-gallery.test.tsx` (add `import userEvent from "@testing-library/user-event"` at the top):
```tsx
  it("opens a lightbox dialog when an image is clicked", async () => {
    const user = userEvent.setup()
    render(
      <ClassGallery
        images={[img(1, "A lathe"), img(2, "A chisel")]}
        title="Woodworking 101"
      />,
    )
    expect(screen.queryByRole("dialog")).toBeNull()
    await user.click(screen.getAllByAltText("A lathe")[0])
    expect(await screen.findByRole("dialog")).toBeInTheDocument()
  })
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — no dialog opens on click (images are not yet interactive).

- [ ] **Step 3: Implement the lightbox**

In `cool-mint/components/class-gallery.tsx`:

Add imports:
```tsx
import { Dialog, DialogContent } from "@/components/ui/dialog"
```

Add lightbox state inside the component (near the other `useState`s):
```tsx
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)
```

Wrap each carousel image (and the single-image case) so the image is a button that sets `lightboxIndex`. For the multi-image `CarouselItem` image container, wrap the `<div className="relative h-[480px] ...">` in:
```tsx
                <button
                  type="button"
                  className="relative block h-[480px] w-full overflow-hidden rounded-lg"
                  aria-label={`View ${altFor(image, title)} full screen`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={image.url}
                    alt={altFor(image, title)}
                    className="object-cover"
                    sizes={IMAGE_SIZES}
                    fill
                  />
                </button>
```
(Apply the same button-wrapping to the single-image branch with `onClick={() => setLightboxIndex(0)}`.)

Add the lightbox Dialog at the end of the returned JSX (before the closing wrapper), rendering a carousel of all images starting at `lightboxIndex`:
```tsx
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none">
          {lightboxIndex !== null && (
            <Carousel opts={{ startIndex: lightboxIndex, loop: true }}>
              <CarouselContent>
                {images.map((image, i) => (
                  <CarouselItem key={"lb-" + image.url + i}>
                    <div className="relative h-[80vh]">
                      <Image
                        src={image.url}
                        alt={altFor(image, title)}
                        className="object-contain"
                        sizes="100vw"
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS — all prior cases plus the lightbox-open case.

- [ ] **Step 5: Commit**

```bash
git add components/class-gallery.tsx components/class-gallery.test.tsx
git commit -m "feat: add click-to-zoom lightbox to ClassGallery"
```

---

### Task 4: Wire `ClassGallery` into the class page

**Files:**
- Modify: `cool-mint/app/classes/[slug]/page.tsx:157-179` (replace static grid), and imports (add `ClassGallery`, remove now-unused `Image` if no other use remains in the file — verify first).

**Interfaces:**
- Consumes: `ClassGallery`, `GalleryImage` from `@/components/class-gallery`.
- Produces: the class page renders the new gallery for all `masterClass.gallery.images`.

- [ ] **Step 1: Replace the static grid**

Add the import near the top of `cool-mint/app/classes/[slug]/page.tsx`:
```tsx
import { ClassGallery } from "@/components/class-gallery"
```
Replace the whole `{/* Class Images */}` block (lines 157–179) with:
```tsx
          {/* Class Images */}
          <ClassGallery
            images={masterClass.gallery.images.map((i) => ({
              url: i.url,
              description: i.description,
            }))}
            title={masterClass.displayName}
          />
```

- [ ] **Step 2: Check whether `Image` is still used in page.tsx**

Run: `grep -n "next/image\|<Image" app/classes/[slug]/page.tsx`
If no `<Image` usages remain, remove the now-unused `import Image from "next/image"` line. If other usages remain, leave the import.

- [ ] **Step 3: Verify build and lint**

Run: `npm run lint && npm run build`
Expected: lint clean (no unused-import errors); build succeeds.

- [ ] **Step 4: Manual visual verification** (controller/human — needs cool-mint dev + made-in-workshop backend with a class that has 3+ gallery images)

Load a class page and confirm: all gallery images appear in a full-width carousel; arrows and dots work; dots highlight the current image; clicking an image opens the full-screen lightbox at that image; the lightbox swipes/arrows through all images and closes on overlay/Esc; a class with exactly 1 image shows a single static image (no controls); a class with 0 images shows no gallery block. Check mobile width too.

- [ ] **Step 5: Commit**

```bash
git add app/classes/[slug]/page.tsx
git commit -m "feat: replace static class gallery with carousel + lightbox"
```

---

## Self-Review

**1. Spec coverage (#6 section):**
- Full-width swipeable carousel showing ALL images → Task 2. ✅
- Arrows (reused) + pagination dots (built from `setApi`) → Task 2. ✅
- Click-to-zoom lightbox via Dialog + synced carousel at clicked index → Task 3. ✅
- Real alt from `description`, fallback to `displayName` → Task 2 (`altFor`) + tested. ✅
- Responsive `sizes`, `object-cover`, container-imposed aspect ratio → Task 2. ✅
- Graceful 0/1/2+ counts → Task 2 (tested) . ✅
- `"use client"` child of the server page → Tasks 2 & 4. ✅

**2. Placeholder scan:** No TBD/TODO; every code step shows complete code. The two human-judgment points (unused-import check, manual visual) are explicit verification steps, not placeholders. ✅

**3. Type consistency:** `GalleryImage = { url, description }` and `ClassGallery({ images, title })` defined in Task 2, consumed unchanged in Tasks 3 and 4; `CarouselApi` imported from `@/components/ui/carousel` (it is exported there). Page maps proto `Object[]` → `GalleryImage[]` in Task 4. ✅

**Resolved decisions:**
- Vitest prerequisite: satisfied — the duration-format work is merged to `master`, so Vitest is present; this branches off `master`.
- Embla-in-jsdom testing scope (assumption #2): accepted — component tests cover structure/behavior (counts, alt, dots, lightbox open, empty/single handling); scroll physics is verified in the manual visual step.
