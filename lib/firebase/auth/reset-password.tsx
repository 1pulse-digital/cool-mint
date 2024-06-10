"use client"

import firebase_app from "../config"

import { AuthError, getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "sonner"

interface ResetPasswordResult {
    error: AuthError | Error | null
    }

export default async function resetPassword(email: string): Promise<ResetPasswordResult> {
    let error: AuthError | Error | null = null
    try {
        await sendPasswordResetEmail(getAuth(firebase_app), email)
        toast.success("Password reset email sent.")
    } catch (e) {
        error = e as AuthError | Error
    }
    return { error }
}
