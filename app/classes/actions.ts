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
import { GetMasterClass, GetMasterClassRequest } from "@/lib/fusion/masterClass/masterClass.repository.sky.pb"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"

initTransport()

export async function upcomingSessions(
  request: UpcomingSessionsRequest,
): Promise<UpcomingSessionResponse> {
  try {
    cookies().getAll() // read cookies to prevent cache
    return await UpcomingSessions(request, {})
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to fetch upcoming sessions")
  }
}

const tag = "MasterClass"

export async function getMasterClass(
  request: GetMasterClassRequest,
): Promise<MasterClass> {
  try {
    return await GetMasterClass(request, {
      headers: await authHeader(), // this calls cookies and makes components using it not be able to SSG
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`get${tag}: ${e.code}: ${request.name} - ${e.msg}`)
    }
    throw e
  }
}
