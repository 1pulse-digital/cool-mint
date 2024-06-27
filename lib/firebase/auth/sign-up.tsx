import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth"
import firebase_app from "../config"

const auth = getAuth(firebase_app)

interface SignUpResult {
  result: UserCredential | null
  error: AuthError | Error | null
}

export default async function signUp(
  email: string,
  password: string,
): Promise<SignUpResult> {
  let result: UserCredential | null = null
  let error: AuthError | Error | null = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e: unknown) {
    error = e as AuthError | Error
  }

  return { result, error }
}
