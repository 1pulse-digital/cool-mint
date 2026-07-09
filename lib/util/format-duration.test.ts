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
  it("does not zero-pad the minutes segment", () => {
    expect(formatDuration(65)).toBe("1h 5m")
  })
  it("guards against NaN input", () => {
    expect(formatDuration(NaN)).toBe("0m")
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
