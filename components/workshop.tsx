import { bookSessions } from "@/app/classes/actions"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { parseError } from "@/lib/util/error"
import { formatDuration } from "@/lib/util/format-duration"
import { moneyFormatter } from "@/lib/util/money-formatter"
import {
  formatSessionDate,
  formatSessionTime,
} from "@/lib/util/session-selection"
import { CalendarClock, Clock2, User, Scale3D } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"
import { Spinner } from "./ui/spinner"

interface WorkshopProps {
  masterClass: MasterClass
  session: Session
  single: boolean
}

export const WorkshopItem: React.FC<WorkshopProps> = ({
  single,
  masterClass,
  session,
  // learnMoreLink,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const [loading, setLoadding] = React.useState(false)

  // TODO: Move this into a hook/context so that it can be reused
  const handleAddToCart = async () => {
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
      setLoadding(true)
      const response = await bookSessions({
        items: [{ session: session.name, quantity: 1 }],
      })

      setLoadding(false)

      if (response.errors.length > 0) {
        toast.error(response.errors[0].reason)
        return
      }

      if (response.cart) {
        const amount = response.cart.items.reduce(
          (acc, item) => acc + Number(item.quantity),
          0,
        )
        cartContext.setAmount(amount)
      }

      toast.success("Added to cart")
      router.push("/cart")
    } catch (e: unknown) {
      setLoadding(false)
      toast.error("Failed to add to cart: " + parseError(e))
      console.error("Add to cart failed:", e)
    }
  }

  // TODO: remap behind the scenes with nexts js server side route
  const url = masterClass.name.replace("masterClasses/", "classes/")

  const stamp = formatSessionTime(session.date)
  const soldOut = session.confirmedAttendees >= masterClass.maxAttendees
  return (
    <div className="flex w-full flex-col gap-x-4 sm:flex-row ">
      <div className="grow">
        <div className="w-full">
          <span className="inline-flex items-center text-start text-primary">
            {formatSessionDate(session.date)}
          </span>
          {!single && (
            <Link href={url}>
              <Button
                variant="ghost"
                size="sm"
                className="text-xl font-bold text-muted-foreground"
              >
                {masterClass.displayName}
              </Button>
            </Link>
          )}
        </div>
        <div className="w-full py-4">
          <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <div className="pl-4">
          <div className="flex space-x-4 text-xs text-foreground">
            <div className="flex space-x-2">
              <CalendarClock size={16} className="text-primary" />
              <p>{stamp}</p>
            </div>
            <div className="flex space-x-2">
              <Clock2 size={16} className="text-primary" />
              <p>{formatDuration(masterClass.duration)}</p>
            </div>
            <div className="flex space-x-2">
              <User size={16} className="text-primary" />
              <p>{masterClass.presenter}</p>
            </div>
            {masterClass.difficulty !== MasterClass.Difficulty.UNSPECIFIED && (
              <div className="flex space-x-2">
                <Scale3D size={16} className="text-primary" />
                <p>{masterClass.difficulty}</p>
              </div>
            )}
          </div>
          <p className="py-2 text-sm font-normal text-white sm:text-base">
            {masterClass.shortDescription}
          </p>
        </div>
      </div>
      <div className=" ml-4">
        <p className="text- pt-4 font-bold text-primary lg:pt-0">
          {moneyFormatter.format(masterClass.standardPrice / 100n)}
        </p>
        <p className="py-1 text-base text-foreground">
          {Math.max(masterClass.maxAttendees - session.confirmedAttendees, 0)}{" "}
          Spots Left
        </p>
        <div className="w-40 py-5">
          {soldOut ? (
            <span className="font-bold text-muted">Sold Out</span>
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={loading}
              className="relative pr-4"
            >
              Book a Spot
              {loading && (
                <Spinner className="absolute right-0 top-0 h-4 w-4 text-background" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
