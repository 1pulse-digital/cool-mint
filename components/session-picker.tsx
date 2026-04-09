"use client"

import { bookSessions, upcomingSessions } from "@/app/classes/actions"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { parseError } from "@/lib/util/error"
import { Calendar, Clock, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { toast } from "sonner"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Spinner } from "./ui/spinner"

interface SessionPickerProps {
  masterClassName: string
  masterClassDisplayName: string
  maxAttendees: number
  standardPrice: bigint
  open: boolean
  onOpenChange: (open: boolean) => void
  multi?: boolean
  maxSelections?: number
  sessionInfos?: SessionInfo[]
}

export const SessionPicker: React.FC<SessionPickerProps> = ({
  masterClassName,
  masterClassDisplayName,
  maxAttendees,
  standardPrice,
  open,
  onOpenChange,
  multi = false,
  maxSelections = 5,
  sessionInfos,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const [sessions, setSessions] = useState<Session[]>([])
  const [selected, setSelected] = useState<Session[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [fetchedInfos, setFetchedInfos] = useState<SessionInfo[]>([])

  // Use prop if provided, otherwise use fetched infos
  const infos = sessionInfos ?? fetchedInfos

  useEffect(() => {
    if (!open) {
      setSelected([])
      return
    }
    setFetching(true)
    upcomingSessions({ masterClass: masterClassName, user: "" }).then((response) => {
      const sorted = response.sessions.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
      setSessions(sorted)
      if (response.sessionInfos.length > 0) {
        setFetchedInfos(response.sessionInfos)
      }
      setFetching(false)
    })
  }, [open, masterClassName])

  const toggleSession = (session: Session) => {
    if (selected.find((s) => s.name === session.name)) {
      setSelected(selected.filter((s) => s.name !== session.name))
    } else if (!multi) {
      setSelected([session])
    } else if (selected.length < maxSelections) {
      setSelected([...selected, session])
    }
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
        const amount = response.cart.items.reduce(
          (acc, item) => acc + Number(item.quantity),
          0,
        )
        cartContext.setAmount(amount)
      }

      setLoading(false)
      onOpenChange(false)

      if (response.errors.length > 0 && response.booked.length > 0) {
        toast.warning(
          `Added ${response.booked.length} session${response.booked.length > 1 ? "s" : ""} to cart. ${response.errors.length} failed: ${response.errors.map((e) => e.reason).join(", ")}`,
        )
      } else if (response.errors.length > 0) {
        toast.error(
          response.errors.map((e) => e.reason).join(", "),
        )
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

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-ZA", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })
  }

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleTimeString("en-ZA", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto bg-[#1a1a1a] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-helvetica text-foreground">
            {multi ? "Select Sessions" : "Choose a Date"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {masterClassDisplayName}
            {multi && ` — select up to ${maxSelections}`}
          </p>
        </DialogHeader>

        {fetching ? (
          <div className="flex justify-center py-8">
            <Spinner className="h-6 w-6 text-primary" />
          </div>
        ) : sessions.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            No upcoming sessions available
          </p>
        ) : (
          <div className="space-y-2">
            {sessions.map((session) => {
              const info = infos.find(
                (si) => si.session === session.name,
              )
              const spotsLeft = info
                ? info.availableSpots
                : maxAttendees - session.confirmedAttendees
              const isFull = spotsLeft <= 0
              const isBooked = info?.isUserBooked ?? false
              const isSelected = selected.some(
                (s) => s.name === session.name,
              )
              const isDisabled = isFull || isBooked

              return (
                <button
                  key={session.name}
                  disabled={isDisabled}
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
                    {multi && (
                      <Checkbox
                        checked={isSelected}
                        disabled={isDisabled}
                        className="pointer-events-none"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">
                          {formatDate(session.date)}
                        </span>
                        <Clock className="ml-2 h-4 w-4 text-primary" />
                        <span className="text-foreground">
                          {formatTime(session.date)}
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
                    {isSelected && !multi && (
                      <div className="text-sm font-semibold text-primary">
                        {moneyFormatter.format(standardPrice / 100n)}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {selected.length > 0 && (
          <div className="mt-4 space-y-3">
            {multi && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {selected.length} session{selected.length > 1 ? "s" : ""}{" "}
                  selected
                </span>
                <span className="font-semibold text-primary">
                  {moneyFormatter.format(
                    (standardPrice * BigInt(selected.length)) / 100n,
                  )}
                </span>
              </div>
            )}
            <Button
              onClick={handleAddToCart}
              disabled={loading}
              className="relative w-full"
            >
              {multi
                ? `Add ${selected.length} Session${selected.length > 1 ? "s" : ""} to Cart`
                : "Add to Cart"}
              {loading && (
                <Spinner className="absolute right-4 h-4 w-4 text-background" />
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
