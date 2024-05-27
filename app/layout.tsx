import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/detailed/footer"
import Header from "@/components/header"
import { Toaster } from "sonner"
import { UserProvider } from "@/contexts/user"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })
const isDev = process?.env.NODE_ENV === "development"

export const metadata: Metadata = {
  title: "Made in Workshop",
  description: "Shared workshop and fabrication studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body
        className={cn("h-screen bg-background antialiased", inter.className, {
          "debug-screens": isDev,
        })}
      >
        <UserProvider>
          <Header />
          {children}
          <Footer />

          <Toaster />
        </UserProvider>
      </body>
    </html>
  )
}
