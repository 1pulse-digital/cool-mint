"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/contexts/user"
import signOut from "@/lib/firebase/auth/sign-out"
import { Role } from "@/lib/fusion/auth/role.pb"
import { CreditCard, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"

// generateAvatarFallback generates a 2-letter fallback for the user's avatar
export const generateFallbackName = (
  displayName?: string | null,
  email?: string | null,
) => {
  // use the first two letters of the user's name
  if (displayName) {
    return displayName.slice(0, 2).toUpperCase()
  }

  // use the first two letters of the user's email
  if (email) {
    const [name] = email.split("@")
    return name.slice(0, 2).toUpperCase()
  }
  return "MIW"
}

const handleLogout: MouseEventHandler<HTMLDivElement> = async (e) => {
  await signOut()
}

export const UserNav = (props: { role: Role }) => {
  const router = useRouter()
  const user = useUser()
  const fallback = generateFallbackName(user?.displayName, user?.email)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.photoURL ?? undefined} alt="user avatar" />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">
              {user?.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email ?? ""}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/orders")}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Orders</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=> {
            router.push("/login")
            handleLogout
          }}>
          Logout
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
