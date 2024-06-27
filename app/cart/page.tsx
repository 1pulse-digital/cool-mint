import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { myCart } from "./actions"
import { ShoppingCart } from "./components/cart"
import HeaderTitle from "@/components/header-title"

const Cart: React.FC = async () => {
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
