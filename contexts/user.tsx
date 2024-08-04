"use client"

import { handleLogin, handleLogout } from "@/app/actions"
import { onAuthStateChanged } from "@/lib/firebase/auth/state-changed"
import { User } from "firebase/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { createContext, Suspense, useContext, useEffect, useState } from "react"
import { toast } from "sonner"

const UserContext = createContext({} as User | null)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult()
        await handleLogin(tokenResult)
        setHasLoggedIn(true)
        setUser(user)
        if (!hasLoggedIn) {
          toast.success("Signed in.")
        }
      } else {
        // don't take the user to /login automatically
        await handleLogout()
        setUser(null)
        if (hasLoggedIn) {
          toast.success("Signed out.")
        }
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Suspense>
        <Redirector user={user} />
      </Suspense>
      {children}
    </UserContext.Provider>
  )
}

const Redirector = ({ user }: { user: User | null }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") ?? ""

  useEffect(() => {
    if (user && redirect) {
      router.push("/" + redirect)
    } else if (user) {
      router.push("/")
    }
  }, [user])
  return null
}
