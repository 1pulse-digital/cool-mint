import { describe, it, expect } from "vitest"
import {
  formatSessionDate,
  formatSessionTime,
  sessionMonthKey,
} from "./session-selection"

describe("formatSessionTime", () => {
  it("pins to Africa/Johannesburg (UTC+2), not the host zone", () => {
    // 07:00 UTC is 09:00 in SAST (UTC+2).
    const result = formatSessionTime("2026-07-12T07:00:00Z")
    expect(result).toContain("09")
    expect(result).not.toContain("07")
  })

  it("honours an explicit +02:00 offset in the stored value", () => {
    // 09:00 at +02:00 is already 09:00 SAST.
    expect(formatSessionTime("2026-07-12T09:00:00+02:00")).toContain("09")
  })

  it("rolls the time across midnight in SAST near a date boundary", () => {
    // 23:30 UTC is 01:30 the following day in SAST.
    expect(formatSessionTime("2026-07-12T23:30:00Z")).toContain("01")
  })

  it("returns an empty string for an unparseable date", () => {
    expect(formatSessionTime("")).toBe("")
    expect(formatSessionTime("not-a-date")).toBe("")
  })
})

describe("formatSessionDate", () => {
  it("rolls the date forward when SAST has already crossed midnight", () => {
    // 23:30 UTC on the 12th is 01:30 on the 13th in SAST.
    expect(formatSessionDate("2026-07-12T23:30:00Z")).toContain("13")
  })

  it("keeps a mid-day UTC session on the same calendar day in SAST", () => {
    expect(formatSessionDate("2026-07-12T09:00:00Z")).toContain("12")
  })

  it("returns an empty string for an unparseable date", () => {
    expect(formatSessionDate("")).toBe("")
    expect(formatSessionDate("not-a-date")).toBe("")
  })
})

describe("sessionMonthKey", () => {
  it("buckets by SAST month, not the host zone", () => {
    // 2026-07-31T23:30:00Z is 2026-08-01 01:30 in SAST -> August bucket.
    expect(sessionMonthKey("2026-07-31T23:30:00Z")).toBe("2026-08")
  })

  it("keeps a mid-month session in its own month", () => {
    expect(sessionMonthKey("2026-07-12T09:00:00Z")).toBe("2026-07")
  })

  it("returns an empty string for an unparseable date", () => {
    expect(sessionMonthKey("")).toBe("")
  })
})
