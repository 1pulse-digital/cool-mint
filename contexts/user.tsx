"use client"
import { onAuthStateChanged } from "@/lib/firebase/auth/state-changed"
import { User } from "firebase/auth"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext({} as User | null)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
