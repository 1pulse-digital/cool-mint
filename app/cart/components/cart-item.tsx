import { MoneyField } from "@/components/money-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartItem } from "@/lib/fusion/commerce/cart.pb"
import { format, parse } from "date-fns"
import { Trash } from "lucide-react"
import Image from "next/image"
import React from "react"

/**
 * Extracts and formats a session date from a product name like
 * "products/session-woodworking-101-2026-05-02-09-00"
 */
function extractSessionDate(productName: string): string | null {
  const match = productName.match(/(\d{4}-\d{2}-\d{2}-\d{2}-\d{2})$/)
  if (!match) return null
  try {
    const date = parse(match[1], "yyyy-MM-dd-HH-mm", new Date())
    return format(date, "EEE, d MMM yyyy 'at' HH:mm")
  } catch {
    return null
  }
}

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
      <div className="min-w-0 grow">
        <p className="text-xl">
          {item.displayName || item.product || "Product Name Not Available"}
        </p>
        {extractSessionDate(item.product) && (
          <p className="text-sm text-muted-foreground">
            {extractSessionDate(item.product)}
          </p>
        )}
      </div>
      <div className="flex shrink-0 flex-nowrap items-center justify-end gap-2 font-bold text-primary">
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
