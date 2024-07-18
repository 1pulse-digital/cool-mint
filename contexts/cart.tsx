import { Cart } from "@/lib/fusion/commerce/cart.pb";
import { createContext, useContext } from "react";

const CartContext = createContext({} as Cart | null)

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    
    return <CartContext.Provider value={null}>{children}</CartContext.Provider>
}