"use client"

import { handleLogin, handleLogout } from "@/app/actions"
import { onAuthStateChanged } from "@/lib/firebase/auth/state-changed"
import { User } from "firebase/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "sonner"

const UserContext = createContext({} as User | null)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") ?? ""

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult()
        await handleLogin(tokenResult)
        setHasLoggedIn(true)
        setUser(user)
        if (!hasLoggedIn) {
          toast.success("Signed in.")
          router.push("/" + redirect)
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

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
