"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import logo from "../images/miw-logo.webp"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { UserNav } from "./user-nav"

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Machines",
    href: "/machines",
  },
  {
    name: "Pricing",
    href: "/memberships",
  },
  {
    name: "Classes",
    href: "/classes",
  },

  {
    name: "News",
    href: "/news",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-4"
    fill="#EFEFEF"
    viewBox="0 0 24 24"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
)

const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0.88em"
    height="1.5em"
    viewBox="0 0 740 850"
  >
    <path
      fill="#EFEFEF"
      d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
    />
  </svg>
)

const Linkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-4"
    fill="#EFEFEF"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
)

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden grow flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-6">
        <Link href="/" className="flex w-[140px] lg:w-[160px] items-center gap-2 lg:p-4">
          <Image src={logo} alt="Logo" />
          <span className="sr-only">Made In Workshop</span>
        </Link>
        <div className="flex grow items-center justify-center gap-6 md:gap-5 md:text-sm lg:gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground transition-colors hover:text-primary ",
                pathname === item.href && "font-bold text-primary",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-lg font-semibold"
              onClick={close}
            >
              <Image src={logo} alt="Logo" height={60} />
              <span className="sr-only">Made In Workshop</span>
            </Link>
            {navigationItems.map((item) => (
              <Link
                onClick={close}
                key={item.name}
                href={item.href}
                className={cn(
                  "hover:text-primary",
                  pathname === item.href && "font-bold text-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Socials */}
          <div className="mt-8 flex justify-center gap-6">
            <Link
              className="border-primary hover:border-t"
              href="https://www.facebook.com/madeinworkshop/"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              className="border-primary hover:border-t"
              href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              className="border-primary hover:border-t"
              href="https://za.linkedin.com/company/made-in-workshop"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex grow items-center justify-center md:hidden">
        <Link
          href="/"
          className="flex w-[160px] items-center gap-2 p-4 md:hidden"
        >
          <Image src={logo} alt="Logo" />
          <span className="sr-only">Made In Workshop</span>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
        {/* Socials */}
        <div className="hidden gap-2 lg:flex">
          <Link
            className="border-primary hover:border-t"
            href="https://www.facebook.com/madeinworkshop/"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link
            className="border-primary hover:border-t"
            href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link
            className="border-primary hover:border-t"
            href="https://za.linkedin.com/company/made-in-workshop"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </div>
        <UserNav />
      </div>
    </header>
  )
}

export default Header
