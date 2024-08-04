"use client"

import { useCart } from "@/contexts/cart"
import { CartItem } from "@/lib/fusion/commerce/cart.pb"
import React, { useEffect } from "react"
import { toast } from "sonner"
import { myCart, removeFromCart } from "../actions"
import { ShoppingCartItem } from "./cart-item"

interface ShoppingCartProps {}

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const { cart, setCart, setAmount } = useCart()
  useEffect(() => {
    myCart({}).then((cart) => setCart(cart))
  }, [])

  const handleRemoveItem = (item: CartItem) => async () => {
    try {
      const updatedCart = await removeFromCart({
        eTag: cart?.auditEntry.eTag || "",
        product: item.product,
        quantity: item.quantity,
      })
      setCart(updatedCart)
      toast.success("Item removed from cart")
    } catch (e) {
      console.error(e)
      toast.error("Failed to remove item from cart")
    }
  }

  useEffect(() => {
    if (!cart) {
      return
    }
    setAmount(cart.items.length || 0)
  }, [cart, setAmount])

  if (!cart) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid max-h-screen max-w-2xl gap-4 overflow-y-auto font-medium md:justify-center">
      {cart.items.length === 0 && (
        <div className="text-center">Your cart is empty</div>
      )}
      {cart.items.map((item) => (
        <ShoppingCartItem
          key={item.product}
          item={item}
          handleRemove={handleRemoveItem(item)}
        />
      ))}
    </div>
  )
}
