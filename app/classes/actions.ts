"use server"

import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import {
  UpcomingSessionResponse,
  UpcomingSessions,
  UpcomingSessionsRequest,
} from "@/lib/fusion/masterClass/session.manager.pb"
import { cookies } from "next/headers"

initTransport()

export async function upcomingSessions(
  request: UpcomingSessionsRequest,
): Promise<UpcomingSessionResponse> {
  try {
    cookies().getAll() // force no-cache
    return await UpcomingSessions(request, {
      // Prevent caching
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to fetch upcoming sessions")
  }
}
