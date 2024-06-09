"use server"

import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { RetrieveMyOrders, RetrieveMyOrdersRequest } from "@/lib/fusion/commerce/order.manager.pb"
import { Order } from "@/lib/fusion/commerce/order.pb"

initTransport()

export async function retrieveMyOrders(request: RetrieveMyOrdersRequest): Promise<Order[]> {
  try {
    const resopnse = await RetrieveMyOrders(request, {
        headers: await authHeader(),
        })

    return resopnse.orders
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      console.error(`orders`, e)
      throw new Error(`orders: ${e.msg}`)
    }
    throw e
  }
}