"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/contexts/user"
import signOut from "@/lib/firebase/auth/sign-out"
import { Role } from "@/lib/fusion/auth/role.pb"
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

export const UserNav = (props: {role: Role}) => {
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
            <p className="text-xs leading-none text-muted-foreground">
              ({props.role})
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
