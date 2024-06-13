import {
    PlaceOrder,
    PlaceOrderRequest,
    PlaceOrderResponse,
} from "@/lib/fusion/commerce/order.manager.pb"
import { initTransport } from "@/lib/transport"
import { revalidateTag } from "next/cache"
import { TwirpError } from "twirpscript"
import { authHeader } from "../actions"

initTransport()

export async function placeOrder(
  request: PlaceOrderRequest,
): Promise<PlaceOrderResponse> {
  try {
    const response = await PlaceOrder(request, {
      headers: await authHeader(),
    })
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`place order failed: ${e.msg}`)
    }
    throw e
  }
}
