"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { AvailableSlots, AvailableSlotsRequest, AvailableSlotsResponse } from "@/lib/fusion/workshop/tourBooking.manager.pb"

initTransport()

export async function availableSlots(
  request: AvailableSlotsRequest,
): Promise<AvailableSlotsResponse> {
  try {
    return await AvailableSlots(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`availableSlots: ${e.code}: ${e.msg}`)
    }
    throw e
  }
}
