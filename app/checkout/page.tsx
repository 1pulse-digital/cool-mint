import { Breadcrumbs } from "@/components/breadcrumbs"
import { myCart } from "../cart/actions"
import { CheckoutForm } from "./components/checkout-form"
import Script from "next/script"

const CheckoutPage: React.FC = async () => {
  const cart = await myCart({})

  return (
    <>
      <Script src="https://www.payfast.co.za/onsite/engine.js" />
      <main className="px-8 ">
        <Breadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Checkout", href: "/checkout" },
          ]}
        />
        <h1 className={"text-4xl font-bold"}>Checkout</h1>
        <CheckoutForm cart={cart} />
      </main>
    </>
  )
}

export default CheckoutPage
