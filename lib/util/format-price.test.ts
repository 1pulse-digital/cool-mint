import { describe, it, expect } from "vitest"
import { formatPrice, moneyFormatter } from "@/lib/util/money-formatter"

describe("formatPrice", () => {
  it("returns Free for zero", () => {
    expect(formatPrice(0)).toBe("Free")
    expect(formatPrice(0n)).toBe("Free")
  })
  it("formats cents as a ZAR amount", () => {
    expect(formatPrice(150000)).toBe(moneyFormatter.format(1500))
    expect(formatPrice(150000n)).toBe(moneyFormatter.format(1500))
  })
  it("preserves sub-rand cents", () => {
    expect(formatPrice(150050)).toBe(moneyFormatter.format(1500.5))
  })
})
