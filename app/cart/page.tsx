import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { myCart } from "./actions"
import { ShoppingCart } from "./components/cart"
import HeaderTitle from "@/components/header-title"

const RightArrow = () => (
  <svg
    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
)

const Cart: React.FC = async () => {
  // TODO: redirect to login if not logged in (DONE by middleware.ts?)
  const cart = await myCart({})

  return (
    <div className={"px-8"}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Cart", href: "/cart" },
        ]}
      />
      <HeaderTitle>Your Cart</HeaderTitle>
      <div className="flex justify-center">
        <ShoppingCart />
      </div>
      <div className="mt-16 flex justify-center">
        <div className="container flex justify-between">
          <Link href="/classes">
            <Button variant={"link"} className="text-lg font-semibold">
              <MoveLeft className="mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <Link href="/checkout">
            <Button>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
      <div className="py-8 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

export default Cart
