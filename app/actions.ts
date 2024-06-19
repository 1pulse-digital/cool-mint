"use server"

import {
  AddToCart,
  AddToCartRequest,
} from "@/lib/fusion/commerce/cart.manager.pb"
import { Cart } from "@/lib/fusion/commerce/cart.pb"
import { IdTokenResult } from "firebase/auth"
import { cookies } from "next/headers"
import { TwirpError } from "twirpscript"

export async function addToCart(request: AddToCartRequest): Promise<Cart> {
  try {
    return await AddToCart(request, {
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      console.error(`add to cart`, e)
      throw new Error(`add to cart: ${e.msg}`)
    }
    throw e
  }
}

// handleLogin will set the token cookie
export async function handleLogin(tokenResult: IdTokenResult) {
  const expires = new Date(tokenResult.expirationTime).getTime()
  const maxAge = Math.floor((expires - Date.now()) / 1000) - 30
  cookies().set("token", tokenResult.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAge,
    path: "/",
  })
}

// handleLogout will clear the token cookie and
export async function handleLogout() {
  cookies().set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  })
}

export async function authHeader(): Promise<Record<string, string>> {
  const token = cookies().get("token")?.value ?? "made-in-workshop"
  return { Authorization: `Bearer ${token}` }
}
