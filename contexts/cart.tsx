"use client"

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const CartAmountContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartAmountContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount, setAmount] = useState<number>(0);
  return (
    <CartAmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </CartAmountContext.Provider>
  );
};