import "@testing-library/jest-dom/vitest"
import { afterEach, vi } from "vitest"
import { cleanup } from "@testing-library/react"

// Suppress known-benign next/image fetchPriority warning (React@18 + next@14.1 quirk).
// Silently drop errors containing "fetchPriority"; all other errors pass through unchanged.
const originalError = console.error
const originalWarn = console.warn
console.error = (...args: any[]) => {
  if (args.some((arg) => typeof arg === "string" && arg.includes("fetchPriority"))) {
    return
  }
  originalError(...args)
}
console.warn = (...args: any[]) => {
  if (args.some((arg) => typeof arg === "string" && arg.includes("fetchPriority"))) {
    return
  }
  originalWarn(...args)
}

// jsdom has no layout engine and doesn't implement matchMedia or
// IntersectionObserver, both of which Embla (used by components/ui/carousel)
// reads on init regardless of viewport size. Stub them so carousel-based
// components can mount under jsdom.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Non-firing mocks: constructors and no-op methods only; callbacks are never invoked.
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
vi.stubGlobal("IntersectionObserver", MockIntersectionObserver)

class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
vi.stubGlobal("ResizeObserver", MockResizeObserver)

afterEach(() => {
  cleanup()
})
