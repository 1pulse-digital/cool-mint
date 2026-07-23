"use client"

import { useEffect, useRef } from "react"
import replay from "@erick303/web-replay-sdk"
import { useUser } from "@/contexts/user"

/**
 * Starts web-replay session recording on the client and keeps the recorded
 * session's identity in sync with the firebase auth state.
 *
 * Recording only starts when both NEXT_PUBLIC_REPLAY_INGEST_URL and
 * NEXT_PUBLIC_REPLAY_WRITE_KEY are set — otherwise this is a no-op, so the app
 * runs unchanged in environments where replay isn't configured.
 *
 * Must be rendered inside <UserProvider> so useUser() resolves.
 */
export function ReplayInit() {
  const user = useUser()
  const started = useRef(false)
  const identified = useRef<string | null>(null)

  // init once, as early as possible on the client (rrweb needs `window`, so
  // this runs in an effect rather than during render/SSR).
  useEffect(() => {
    const ingestUrl = process.env.NEXT_PUBLIC_REPLAY_INGEST_URL
    const writeKey = process.env.NEXT_PUBLIC_REPLAY_WRITE_KEY
    if (!ingestUrl || !writeKey) return
    if (started.current) return
    started.current = true
    replay.init({
      ingestUrl,
      writeKey,
      appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
    })
  }, [])

  // keep the replay identity in lockstep with firebase auth.
  useEffect(() => {
    if (!started.current) return
    const uid = user?.uid ?? null
    if (uid) {
      if (identified.current !== uid) {
        identified.current = uid
        replay.identify(uid, { email: user?.email ?? undefined })
      }
    } else if (identified.current !== null) {
      identified.current = null
      replay.reset()
    }
  }, [user])

  return null
}
