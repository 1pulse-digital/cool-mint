"use client"

import {
  AuthError,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth"
import firebase_app from "../config"

const auth = getAuth(firebase_app)

interface SignInResult {
  result: UserCredential | null
  error: AuthError | Error | null
}

export default async function signIn(
  email: string,
  password: string,
): Promise<SignInResult> {
  let result: UserCredential | null = null
  let error: AuthError | Error | null = null
  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e: unknown) {
    error = e as AuthError | Error
  }

  return { result, error }
}
