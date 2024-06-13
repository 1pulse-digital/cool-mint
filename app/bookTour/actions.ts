"use server"

import { transport } from "@/lib/transport"
import { revalidateTag } from "next/cache"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { TourBooking } from "@/lib/fusion/workshop/tourBooking.pb"
import {
  CreateTourBooking,
  CreateTourBookingRequest,
  DeleteTourBooking,
  DeleteTourBookingRequest,
  GetTourBooking,
  GetTourBookingRequest,
  ListTourBookings,
  ListTourBookingsRequest,
  ListTourBookingsResponse,
  UpdateTourBooking,
  UpdateTourBookingRequest,
} from "@/lib/fusion/workshop/tourBooking.repository.sky.pb"

export async function createTourBooking(
  request: CreateTourBookingRequest,
): Promise<TourBooking> {
  try {
    const response = await CreateTourBooking(request, {
      headers: await authHeader(),
    })
    // See: https://nextjs.org/docs/app/api-reference/functions/revalidateTag
    revalidateTag("tourBookings")
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.tourBooking.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function updateTourBooking(
  request: UpdateTourBookingRequest,
): Promise<TourBooking> {
  try {
    const response = await UpdateTourBooking(request, {
      headers: await authHeader(),
    })
    revalidateTag(request.tourBooking.name)
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.tourBooking.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function getTourBooking(request: GetTourBookingRequest): Promise<TourBooking> {
  try {
    return await GetTourBooking(request, {
      rpcTransport: transport(["tourBookings", request.name]),
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function deleteTourBooking(
  request: DeleteTourBookingRequest,
): Promise<void> {
  try {
    await DeleteTourBooking(request, {
      headers: await authHeader(),
    })
    revalidateTag("tourBookings")
    return
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function listTourBookings(
  request: ListTourBookingsRequest,
): Promise<ListTourBookingsResponse> {
  try {
    const response = await ListTourBookings(request, {
      rpcTransport: transport(["tourBookings"]),
      headers: await authHeader(),
    })
    return response
  } catch (e: unknown) {
    console.error("ListTourBookings error", e)
    if (e instanceof TwirpError) {
      throw new Error(`${e.msg}`)
    }
    throw e
  }
}
