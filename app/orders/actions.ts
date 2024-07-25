"use server"

import { authHeaders, initTransport, transport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import {
  MyOrders,
  MyOrdersRequest,
  MyOrdersResponse,
} from "@/lib/fusion/commerce/order.manager.pb"
import { cookies } from "next/headers"

initTransport()

export async function myOrders(
  request: MyOrdersRequest,
): Promise<MyOrdersResponse> {
  try {
    const response = await MyOrders(request, {
      rpcTransport: transport(["orders"]),
      headers: authHeaders(cookies().get("token")?.value),
    })
    return response
  } catch (e: unknown) {
    console.error("MyOrders error", e)
    if (e instanceof TwirpError) {
      throw new Error(`${e.msg}`)
    }
    throw e
  }
}
