"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { UpcomingSessionResponse, UpcomingSessions, UpcomingSessionsRequest } from "@/lib/fusion/masterClass/session.manager.pb"

initTransport()

export async function upcomingSessions(
  request: UpcomingSessionsRequest,
): Promise<UpcomingSessionResponse> {
  try {
    return await UpcomingSessions(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      console.error(`upcomingSessions`, e)
      throw new Error(`upcomingSessions: ${e.code}: ${e.msg}`)
    }
    throw e
  }
}
