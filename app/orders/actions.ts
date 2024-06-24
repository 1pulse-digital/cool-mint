"use server"

import { transport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { MyOrders, MyOrdersRequest, MyOrdersResponse } from "@/lib/fusion/commerce/order.manager.pb"

export async function myOrders(
  request: MyOrdersRequest,
): Promise<MyOrdersResponse> {
  try {
    const response = await MyOrders(request, {
      rpcTransport: transport(["orders"]),
      headers: await authHeader(),
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
