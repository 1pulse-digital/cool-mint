import { handleLogin } from "@/app/actions"
import {
  AuthError,
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { toast } from "sonner"
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
    const tokenResult = await result.user.getIdTokenResult()
    await handleLogin(tokenResult)
    toast.success(
      `You have been signed in. Your session will expire at ${new Date(tokenResult.expirationTime).toLocaleString()}.`,
    )
  } catch (e: unknown) {
    error = e as AuthError | Error
  }

  return { result, error }
}
