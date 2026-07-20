"use client"

import { bookSessions } from "@/app/classes/actions"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import { parseError } from "@/lib/util/error"
import { formatPrice } from "@/lib/util/money-formatter"
import {
  firstSelectableSession,
  formatSessionDate,
  formatSessionTime,
  infoForSession,
  isSessionBooked,
  isSessionFull,
  spotsLeftFor,
  toggleSelection,
} from "@/lib/util/session-selection"
import { cn } from "@/lib/utils"
import { Calendar, Check, Clock, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

interface InlineSessionSelectorProps {
  maxAttendees: number
  standardPrice: bigint
  sessions: Session[]
  sessionInfos?: SessionInfo[]
  maxSelections?: number
}

export const InlineSessionSelector: React.FC<InlineSessionSelectorProps> = ({
  maxAttendees,
  standardPrice,
  sessions,
  sessionInfos,
  maxSelections = 5,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const infos = sessionInfos ?? []
  const [selected, setSelected] = React.useState<Session[]>(() => {
    const first = firstSelectableSession(sessions, infos, maxAttendees)
    return first ? [first] : []
  })
  const [loading, setLoading] = React.useState(false)

  const toggleSession = (session: Session) => {
    setSelected((prev) => toggleSelection(prev, session, maxSelections))
  }

  const handleAddToCart = async () => {
    if (!user) {
      const loginUrl = new URL("/login", window.location.origin)
      if (pathname !== "/") {
        loginUrl.searchParams.set("redirect", pathname.slice(1))
      }
      toast("Please login to book your spot", {
        action: {
          label: "Login",
          onClick: () => router.push(loginUrl.toString()),
        },
      })
      return
    }

    if (selected.length === 0) return

    try {
      setLoading(true)
      const response = await bookSessions({
        items: selected.map((s) => ({ session: s.name, quantity: 1 })),
      })

      if (response.cart) {
        cartContext.setCart(response.cart)
      }

      setLoading(false)

      if (response.errors.length > 0 && response.booked.length > 0) {
        toast.warning(
          `Added ${response.booked.length} session${response.booked.length > 1 ? "s" : ""} to cart. ${response.errors.length} failed: ${response.errors.map((e) => e.reason).join(", ")}`,
        )
      } else if (response.errors.length > 0) {
        toast.error(response.errors.map((e) => e.reason).join(", "))
        return
      } else {
        toast.success(
          response.booked.length === 1
            ? "Added to cart"
            : `Added ${response.booked.length} sessions to cart`,
        )
      }
      router.push("/cart")
    } catch (e: unknown) {
      setLoading(false)
      toast.error("Failed to add to cart: " + parseError(e))
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-helvetica font-semibold text-foreground">
          Select sessions
        </p>
        <span className="text-xs text-muted-foreground">
          up to {maxSelections}
        </span>
      </div>

      {sessions.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No upcoming sessions available
        </p>
      ) : (
        <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
          {sessions.map((session) => {
            const info = infoForSession(session, infos)
            const spotsLeft = spotsLeftFor(session, info, maxAttendees)
            const isFull = isSessionFull(session, info, maxAttendees)
            const isBooked = isSessionBooked(info)
            const isSelected = selected.some((s) => s.name === session.name)
            const isDisabled = isFull || isBooked

            return (
              <button
                key={session.name}
                type="button"
                disabled={isDisabled}
                aria-pressed={isSelected}
                onClick={() => toggleSession(session)}
                className={`w-full rounded-lg border p-3 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : isDisabled
                      ? "cursor-not-allowed border-muted/20 opacity-50"
                      : "border-muted/20 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border",
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/50",
                    )}
                  >
                    {isSelected && <Check className="h-3 w-3" />}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">
                        {formatSessionDate(session.date)}
                      </span>
                      <Clock className="ml-2 h-4 w-4 text-primary" />
                      <span className="text-foreground">
                        {formatSessionTime(session.date)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      {isBooked ? (
                        <Badge variant="secondary" className="text-xs">
                          Already Booked
                        </Badge>
                      ) : isFull ? (
                        <Badge variant="destructive" className="text-xs">
                          Full
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {spotsLeft} spots left
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {selected.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {selected.length} session{selected.length > 1 ? "s" : ""} selected
            </span>
            <span className="font-semibold text-primary">
              {formatPrice(standardPrice * BigInt(selected.length))}
            </span>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={loading}
            className="relative w-full"
          >
            {selected.length > 1
              ? `Add ${selected.length} Sessions to Cart`
              : "Add to Cart"}
            {loading && (
              <Spinner className="absolute right-4 h-4 w-4 text-background" />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
