"use client"

import { handleLogin, handleLogout } from "@/app/actions"
import { onAuthStateChanged } from "@/lib/firebase/auth/state-changed"
import { User } from "firebase/auth"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { createContext, Suspense, useContext, useEffect, useState } from "react"
import { toast } from "sonner"

const UserContext = createContext({} as User | null)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // TODO: why do we need to track this state again? Is it because of the message being displayed twice?
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // listen to firebase auth state changes
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
  const pathname = usePathname()

  useEffect(() => {
    if (user && redirect) {
      router.push("/" + redirect)
    } else if (user && (pathname === "/login" || pathname === "/register")) {
      router.push("/")
    }
  }, [user])
  return null
}
