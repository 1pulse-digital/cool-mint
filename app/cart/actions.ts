"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import {
  MyCart,
  MyCartRequest,
  RemoveFromCart,
  RemoveFromCartRequest,
} from "@/lib/fusion/commerce/cart.manager.pb"
import { Cart } from "@/lib/fusion/commerce/cart.pb"

initTransport()

export async function myCart(request: MyCartRequest): Promise<Cart> {
  try {
    return await MyCart(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to get cart")
  }
}

export async function removeFromCart(
  request: RemoveFromCartRequest,
): Promise<Cart> {
  try {
    return await RemoveFromCart(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to remove from cart")
  }
}
