import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import Script from "next/script"
import { myCart } from "../cart/actions"
import { CheckoutForm } from "./components/checkout-form"

const CheckoutPage: React.FC = async () => {
  const cart = await myCart({})

  return (
    <>
      <Script src="https://www.payfast.co.za/onsite/engine.js" />
      <div className="px-8">
        <Breadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Checkout", href: "/checkout" },
          ]}
        />
        <HeaderTitle>Checkout</HeaderTitle>
        <CheckoutForm cart={cart} />
      </div>
    </>
  )
}

export default CheckoutPage

export const dynamic = "force-dynamic"
