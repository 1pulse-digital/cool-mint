"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { Book, BookRequest, BookResponse } from "@/lib/fusion/workshop/tourBooking.manager.pb"

initTransport()

export async function bookTour(
  request: BookRequest,
): Promise<BookResponse> {
  try {
    return await Book(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      console.error("book tour",e)
      throw new Error(`book tour: ${e.code}: ${e.msg}`)
    }
    throw e
  }
}
