import { MoneyField } from "@/components/money-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartItem } from "@/lib/fusion/commerce/cart.pb"
import { Trash } from "lucide-react"
import Image from "next/image"
import React from "react"

interface ShoppingCartItemProps {
  item: CartItem
  handleRemove: () => void
  handleIncreaseQuantity: () => void
  handleDecreaseQuantity: () => void
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  handleRemove,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  item,
}) => {
  return (
    <div className="flex gap-2">
      <Image
        src={item.thumbnail.url || "/icons/banner.webp"}
        alt={item.thumbnail.description || "Product Image"}
        height={60}
        width={90}
        className="rounded-xl"
      />
      <p className="grow text-xl ">
        {item.displayName || item.product || "Product Name Not Available"}
      </p>
      <div className="flex w-[200px] flex-nowrap items-center justify-end gap-2 font-bold text-primary">
        <MoneyField value={item.price} />
        <Button onClick={handleDecreaseQuantity} disabled={item.quantity <= 1n}>
          -
        </Button>
        <Input
          type="text"
          value={"x " + item.quantity.toString()}
          readOnly
          min="1"
          className="w-14"
        />
        <Button onClick={handleIncreaseQuantity}>+</Button>
        <Button variant={"destructive"} size={"sm"} onClick={handleRemove}>
          <Trash size={16} className="" />
        </Button>
      </div>
    </div>
  )
}
