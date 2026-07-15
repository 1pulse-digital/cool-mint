// Session date/time formatting is pinned to Africa/Johannesburg (SAST, UTC+2)
// rather than left to the runtime's local timezone. This deployment is
// South-Africa-only, and these components are server-rendered first (UTC on
// Cloud Run) then hydrated client-side (SAST in the browser) — without an
// explicit timeZone the two renders disagree and React throws a hydration
// mismatch, or worse, briefly shows a time that is 2 hours off on a booking
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
