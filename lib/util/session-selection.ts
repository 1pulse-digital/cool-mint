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
