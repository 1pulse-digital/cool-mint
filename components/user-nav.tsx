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
import { CreditCard, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import { Badge } from "./ui/badge"
import { useCart } from "@/contexts/cart"

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

export const UserNav = () => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const fallback = generateFallbackName(user?.displayName, user?.email)
  const pathname = usePathname()

  if (!user) {
    return (
      <div className="flex gap-2">
        <Button
          onClick={() => {
            const loginUrl = new URL("/login", window.location.origin)
            if (pathname !== "/") {
              loginUrl.searchParams.set("redirect", pathname.slice(1))
            }
            router.push(loginUrl.toString())
          }}
          size={"sm"}
        >
          Login
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            const registerURL = new URL("/register", window.location.origin)
            if (pathname !== "/") {
              registerURL.searchParams.set("redirect", pathname.slice(1))
            }
            router.push(registerURL.toString())
          }}
          size={"sm"}
        >
          Sign Up
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="relative inline-block md:ml-4">
        <Link className="block border-primary" href="/cart">
          <ShoppingCart className="h-5 w-5 hover:text-primary" />
          {cartContext.amount > 0 && (
            <Badge
              className="background-primary absolute -right-4 -top-4 h-5 w-5 justify-center rounded-full text-xs text-secondary"
              variant="default"
            >
              {cartContext.amount}
            </Badge>
          )}
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.photoURL ?? undefined}
                alt="user avatar"
              />
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
              {/* <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/orders")}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>My Orders</span>
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            Logout
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
