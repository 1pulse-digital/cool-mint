import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth"

import { UpdateMyUser } from "@/lib/fusion/auth/user.manager.pb"
import firebase_app from "../config"
import { initTransport } from "@/lib/transport"

const auth = getAuth(firebase_app)

interface SignUpResult {
  result: UserCredential | null
  error: AuthError | Error | null
}

export default async function signUp(
  email: string,
  password: string,
  displayName: string,
  phoneNumber: string,
): Promise<SignUpResult> {
  let result: UserCredential | null = null
  let error: AuthError | Error | null = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)

    // we haven't logged in client side yet so manually get the token from the result and create the header
    const token = await result.user.getIdToken()
    const headers = { Authorization: `Bearer ${token}` }
    initTransport()

    // set the display name and phone number
    await UpdateMyUser(
      {
        displayName: displayName,
        phoneNumber: phoneNumber,
        photoURL: "",
        updateMask: {
          paths: ["displayName", "phoneNumber"],
        },
      },
      {
        headers: headers,
      },
    )
  } catch (e: unknown) {
    error = e as AuthError | Error
  }

  return { result, error }
}
