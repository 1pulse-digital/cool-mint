"use server"

import { IdTokenResult } from "firebase/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// handleLogin will set the token cookie and redirect to the admin page
export async function handleLogin(tokenResult: IdTokenResult) {
  const expires = new Date(tokenResult.expirationTime).getTime()
  const maxAge = Math.floor((expires - Date.now()) / 1000) - 30
  cookies().set("token", tokenResult.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAge,
    // maxAge: 60 * 60 * 24 * 1, // One day
    path: "/",
  })

  redirect("/admin")
}

// handleLogout will clear the token cookie and redirect to the sign in page
export async function handleLogout() {
  cookies().set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // One day
    path: "/",
  })

  redirect("/login")
}

export async function authHeader(): Promise<Record<string, string>> {
  const token = cookies().get("token")?.value
  return { Authorization: `Bearer ${token}` }
}
