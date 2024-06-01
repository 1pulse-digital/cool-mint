import { Cart } from "@/lib/fusion/commerce/cart.pb"
import React from "react"
import { ShoppingCartItem } from "./cart-item"

interface ShoppingCartProps {
  cart: Cart
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart }) => {
  return (
    <div className="sm:start grid bg-background pt-4 text-center font-medium text-primary md:justify-center md:text-left lg:justify-center xl:justify-center 2xl:justify-center">
      {cart.items.map((item, idx) => (
        <ShoppingCartItem
          key={idx}
          price={item.price}
          productName={item.productName}
          quantity={item.quantity}
        />
      ))}
    </div>
  )
}
