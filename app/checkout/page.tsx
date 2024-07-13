import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { myCart } from "../cart/actions"
import { CheckoutForm } from "./components/checkout-form"
import { OrderSummary } from "./components/order-summary"

const CheckoutPage: React.FC = async () => {
  const cart = await myCart({})

  return (
    <div className="px-8">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Checkout", href: "/checkout" },
        ]}
      />
      <HeaderTitle>Checkout</HeaderTitle>
      <div className="mb-8 flex flex-col-reverse md:flex-row">
        <div className="md:grow">
          <CheckoutForm cart={cart} />
        </div>
        <div className={"flex justify-center"}>
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

export const dynamic = "force-dynamic"
