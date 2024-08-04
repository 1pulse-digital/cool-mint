import { addToCart } from "@/app/actions"
import { myCart } from "@/app/cart/actions"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { parseError } from "@/lib/util/error"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { format } from "date-fns"
import { CalendarClock, Clock2, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"
import { Spinner } from "./ui/spinner"

interface WorkshopProps {
  masterClass: MasterClass
  session: Session
}

export const WorkshopItem: React.FC<WorkshopProps> = ({
  masterClass,
  session,
  // learnMoreLink,
}) => {
  const router = useRouter()
  const user = useUser()
  const cartContext = useCart()
  const pathname = usePathname()
  const [loading, setLoadding] = React.useState(false)

  const handleAddToCart = async () => {
    // ensure the user is logged in
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

    // get the latest version of the cart
    try {
      // TODO: only get the latest version if the add to cart fails on etag mismatch, not every time we click the button
      setLoadding(true)
      const cart = await myCart({})
      await addToCart({
        eTag: cart.auditEntry.eTag,
        product: session.product,
        quantity: 1n,
        variant: "",
      })
      setLoadding(false)
      cartContext.setAmount(cart.items.length + 1)
      toast.success("Added to cart")
      router.push("/cart")
    } catch (e: unknown) {
      setLoadding(false)
      toast.error("Failed to add to cart: " + parseError(e))
      console.error("Add to cart failed:", e)
    }
  }

  const handleShowClass = () => {
    router.push(`/classes/${masterClass.displayName.toLocaleLowerCase()}`)
  }

  const date = new Date(session.date)
  const stamp = format(date, "h:mm a")
  const soldOut = session.confirmedAttendees >= masterClass.maxAttendees
  return (
    <div className="flex w-full gap-x-4">
      <div className="grow">
        <div className="w-full">
          <span className="inline-flex items-center text-start text-primary">
            {format(new Date(session.date), "eeee, dd MMM")}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              handleShowClass()
            }}
            className="text-xl font-bold text-muted-foreground"
          >
            {masterClass.displayName}
          </Button>
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
              <p>{masterClass.duration / 60} hours</p>
            </div>
            <div className="flex space-x-2">
              <User size={16} className="text-primary" />
              <p>{masterClass.presenter}</p>
            </div>
          </div>
          <p className="py-2 text-sm font-normal text-white sm:text-base">
            {masterClass.shortDescription}
          </p>
        </div>
      </div>
      <div className="ml-4">
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
