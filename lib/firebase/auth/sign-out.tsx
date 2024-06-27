"use client"

import firebase_app from "../config"

import { AuthError, signOut as firebaseSignOut, getAuth } from "firebase/auth"

const auth = getAuth(firebase_app)

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
