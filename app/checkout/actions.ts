import {
  PlaceOrder,
  PlaceOrderRequest,
  PlaceOrderResponse,
} from "@/lib/fusion/commerce/order.manager.pb"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"
import { authHeader } from "../actions"
import { ApplyCoupon, ApplyCouponRequest, RemoveCoupon, RemoveCouponRequest } from "@/lib/fusion/commerce/cart.manager.pb"
import { Cart } from "@/lib/fusion/commerce/cart.pb"

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

export async function applyCoupon(
  request: ApplyCouponRequest,
): Promise<Cart> {
  try {
    const response = await ApplyCoupon(request, {
      headers: await authHeader(),
    })
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to apply coupon")
  }
}
export async function removeCoupon(
  request: RemoveCouponRequest,
): Promise<Cart> {
  try {
    const response = await RemoveCoupon(request, {
      headers: await authHeader(),
    })
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to remove coupon")
  }
}

