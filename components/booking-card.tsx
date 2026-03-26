"use client"

import { addToCart } from "@/app/actions"
import { myCart } from "@/app/cart/actions"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { parseError } from "@/lib/util/error"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { Clock, MapPin, SignalHigh, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"
import { Spinner } from "./ui/spinner"

interface BookingCardProps {
  displayName: string
  standardPrice: bigint
  difficulty: string
  duration: number
  maxAttendees: number
  spotsFilled: number
  firstAvailableSession?: Session
}

export const BookingCard: React.FC<BookingCardProps> = ({
  displayName,
  standardPrice,
  difficulty,
  duration,
  maxAttendees,
  spotsFilled,
  firstAvailableSession,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const [loading, setLoading] = React.useState(false)

  const spotsRemaining = maxAttendees - spotsFilled
  const fillPercentage = (spotsFilled / maxAttendees) * 100

  const handleReserveSpot = async () => {
    if (!firstAvailableSession) {
      toast.error("No available sessions")
      return
    }

    // ensure the user is logged in
    if (!user) {
      const loginUrl = new URL("/login", window.location.origin)
      if (pathname !== "/") {
        loginUrl.searchParams.set("redirect", pathname.slice(1))
      } else {
        loginUrl.searchParams.set("redirect", "#upcoming-sessions")
      }

      toast("Please login to book your spot", {
        action: {
          label: "Login",
          onClick: () => router.push(loginUrl.toString()),
        },
      })
      return
    }

    try {
      setLoading(true)
      const cart = await myCart({})
      await addToCart({
        eTag: cart.auditEntry.eTag,
        product: firstAvailableSession.product,
        quantity: 1n,
        variant: "",
      })
      setLoading(false)
      const amount = cart.items.reduce(
        (acc, item) => acc + Number(item.quantity),
        0,
      )
      cartContext.setAmount(amount + 1)
      toast.success("Added to cart")
      router.push("/cart")
    } catch (e: unknown) {
      setLoading(false)
      toast.error("Failed to add to cart: " + parseError(e))
      console.error("Add to cart failed:", e)
    }
  }

  const soldOut = !firstAvailableSession || spotsRemaining <= 0

  return (
    <div
      className={
        "rounded-lg border border-primary/10 bg-[#262626] px-6 py-6 font-helvetica"
      }
    >
      {/* Price */}
      <div className="mb-6">
        <span className="font-helvetica text-3xl font-bold text-primary">
          {moneyFormatter.format(standardPrice / 100n)}
        </span>
        <p className="text-sm text-muted-foreground">per person</p>
      </div>

      {/* Class Details */}
      <div className="space-y-4">
        {/* Difficulty */}
        <div className="flex items-start gap-3">
          <SignalHigh className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Difficulty</p>
            <p className="font-helvetica font-medium normal-case text-foreground">
              {difficulty}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="font-helvetica font-medium text-foreground">
              {duration} Minutes
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="font-helvetica font-medium text-foreground">
              10 Naaf St, Strydompark, Randburg, 2169
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Availability</p>
            <p className="font-helvetica font-medium text-foreground">
              {spotsFilled} / {maxAttendees} spots filled
            </p>
            {/* Progress Bar */}
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-primary">
              {spotsRemaining} spots remaining
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      {soldOut ? (
        <div className="mt-6 w-full rounded-lg bg-muted py-3 text-center font-helvetica font-semibold text-muted-foreground">
          Sold Out
        </div>
      ) : (
        <button
          onClick={handleReserveSpot}
          disabled={loading}
          className="relative mt-6 w-full rounded-lg bg-primary py-3 font-helvetica font-semibold text-background transition-colors hover:bg-primary/90 disabled:opacity-70"
        >
          Reserve Your Spot
          {loading && (
            <Spinner className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-background" />
          )}
        </button>
      )}

      {/* Cancellation Policy */}
      <p className="mt-4 text-center text-xs text-white/80">
        Free cancellation up to 48 hours before class
      </p>
    </div>
  )
}
