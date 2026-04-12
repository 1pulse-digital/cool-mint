"use client"

import { AuthError, signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "../config"

interface SignOutResult {
  error: AuthError | Error | null
}

export default async function signOut(): Promise<SignOutResult> {
  let error: AuthError | Error | null = null
  try {
    await firebaseSignOut(auth)
  } catch (e) {
    error = e as AuthError | Error
  }

  return { error }
}
