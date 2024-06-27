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
      throw new Error(e.msg)
    }
    throw new Error("Failed to add to cart")
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
  cookies().delete("token")
}

export async function authHeader(): Promise<Record<string, string>> {
  if (!cookies().has("token")) {
    return {}
  }

  const token = cookies().get("token")?.value
  if (!token) {
    return {}
  }

  return { Authorization: `Bearer ${token}` }
}
