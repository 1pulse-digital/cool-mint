"use client"

import { Cart } from "@/lib/fusion/commerce/cart.pb"
import React, { createContext, useContext, useState, useEffect } from "react"

interface CartContextType {
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  cart: Cart
  setCart: React.Dispatch<React.SetStateAction<Cart>>
}

const CartAmountContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartAmountContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount, setAmount] = useState<number>(0)
  const [cart, setCart] = useState<Cart>(Cart.initialize())

  return (
    <CartAmountContext.Provider value={{ cart, setCart, amount, setAmount }}>
      {children}
    </CartAmountContext.Provider>
  )
}
