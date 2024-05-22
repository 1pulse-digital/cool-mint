"use client"
import { handleLogout } from "@/app/actions"
import firebase_app from "../config"

import { AuthError, getAuth, signOut as firebaseSignOut } from "firebase/auth"
import { toast } from "sonner"

const auth = getAuth(firebase_app)

interface SignOutResult {
  error: AuthError | Error | null
}

export default async function signOut(): Promise<SignOutResult> {
  let error: AuthError | Error | null = null
  try {
    await firebaseSignOut(auth)
    await handleLogout()
    toast.success("You have been signed out.")
  } catch (e) {
    error = e as AuthError | Error
  }

  return { error }
}
