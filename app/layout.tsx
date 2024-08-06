import { Footer } from "@/components/detailed/footer"
import Header from "@/components/header"
import { UserProvider } from "@/contexts/user"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { CartProvider } from "@/contexts/cart"
import { GoogleAnalytics } from "@next/third-parties/google"

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className,
          {
            "debug-screens": isDev,
          },
        )}
      >
        <UserProvider>
          <CartProvider>
            <div className="flex h-full min-h-screen w-full flex-col">
              <div className="flex h-full min-h-screen w-full flex-col">
                <Header />
                <main className="grid grow">{children}</main>
              </div>
              {/* we always want the footer below the fold */}
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </UserProvider>
      </body>
      <GoogleAnalytics gaId="G-CKHPE5XL4R" />
    </html>
  )
}
