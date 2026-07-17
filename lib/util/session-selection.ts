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

// Session date/time formatting is pinned to Africa/Johannesburg (SAST, UTC+2)
// rather than left to the runtime's local timezone. This deployment is
// South-Africa-only, and these components are server-rendered first (UTC on
// Cloud Run) then hydrated client-side (SAST in the browser) — without an
// explicit timeZone the two renders disagree and React throws a hydration
// mismatch, or worse, briefly shows a time that's 2 hours off on a booking
// decision. South Africa observes no DST, so the offset is unambiguous
// year-round.

const SAST = "Africa/Johannesburg"

function toValidDate(dateStr: string): Date | null {
  const date = new Date(dateStr)
  return Number.isNaN(date.getTime()) ? null : date
}

export function formatSessionDate(dateStr: string): string {
  const date = toValidDate(dateStr)
  if (!date) return ""
  return date.toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: SAST,
  })
}

export function formatSessionTime(dateStr: string): string {
  const date = toValidDate(dateStr)
  if (!date) return ""
  return date.toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: SAST,
  })
}

// Stable "yyyy-MM" key for grouping sessions into month tabs, bucketed in SAST
// so a session near a UTC midnight boundary lands in the month a Cape Town
// visitor would expect — and buckets identically on the server and client.
export function sessionMonthKey(dateStr: string): string {
  const date = toValidDate(dateStr)
  if (!date) return ""
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    timeZone: SAST,
  }).formatToParts(date)
  const year = parts.find((p) => p.type === "year")?.value
  const month = parts.find((p) => p.type === "month")?.value
  return `${year}-${month}`
}
