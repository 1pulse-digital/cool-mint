import {
  PlaceOrder,
  PlaceOrderRequest,
  PlaceOrderResponse,
} from "@/lib/fusion/commerce/order.manager.pb"
import { initTransport } from "@/lib/transport"
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
      throw new Error(e.msg)
    }
    throw new Error("Failed to place order")
  }
}
