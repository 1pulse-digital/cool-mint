"use server"

import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import {
  UpcomingSessionResponse,
  UpcomingSessions,
  UpcomingSessionsRequest,
} from "@/lib/fusion/masterClass/session.manager.pb"

initTransport()

export async function upcomingSessions(
  request: UpcomingSessionsRequest,
): Promise<UpcomingSessionResponse> {
  try {
    return await UpcomingSessions(request, {
      // Prevent caching
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to fetch upcoming sessions")
  }
}
