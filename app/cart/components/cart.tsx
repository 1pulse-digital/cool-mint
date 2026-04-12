"use client"

import { useCart } from "@/contexts/cart"
import { CartItem } from "@/lib/fusion/commerce/cart.pb"
import { MoneyField } from "@/components/money-field"
import React, { useEffect } from "react"
import { toast } from "sonner"
import { myCart, removeFromCart } from "../actions"
import { ShoppingCartItem } from "./cart-item"
import { addToCart } from "@/app/actions"

interface ShoppingCartProps {}

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const { cart, setCart, setAmount } = useCart()
  useEffect(() => {
    myCart({}).then((cart) => setCart(cart))
  }, [])

  const handleRemoveItem = (item: CartItem) => async () => {
    try {
      const updatedCart = await removeFromCart({
        eTag: cart.auditEntry.eTag || "",
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

  const handleIncreaseQuantity = (item: CartItem) => async () => {
    try {
      const updatedCart = await addToCart({
        eTag: cart.auditEntry.eTag,
        product: item.product,
        quantity: 1n,
        variant: "",
      })
      setCart(updatedCart)
      toast.success("Item added to cart")
    } catch (e) {
      console.error(e)
      toast.error("Failed to increase quantity")
    }
  }

  const handleDecreaseQuantity = (item: CartItem) => async () => {
    try {
      const updatedCart = await removeFromCart({
        eTag: cart.auditEntry.eTag || "",
        product: item.product,
        quantity: 1n,
      })
      setCart(updatedCart)
      toast.success("Item removed from cart")
    } catch (e) {
      console.error(e)
      toast.error("Failed to increase quantity")
    }
  }

  useEffect(() => {
    if (!cart) {
      return
    }
    const amount = cart.items.reduce(
      (acc, item) => acc + Number(item.quantity),
      0,
    )
    setAmount(amount)
  }, [cart, setAmount])

  if (!cart) {
    return <div>Loading...</div>
  }

  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0n,
  )

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
          handleDecreaseQuantity={handleDecreaseQuantity(item)}
          handleIncreaseQuantity={handleIncreaseQuantity(item)}
        />
      ))}
      {cart.items.length > 0 && (
        <div className="flex justify-end border-t border-muted pt-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span>Total:</span>
            <span className="text-primary">
              <MoneyField value={total} />
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
