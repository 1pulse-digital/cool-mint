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
