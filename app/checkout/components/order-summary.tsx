"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MoneyField } from "@/components/money-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { useCart } from "@/contexts/cart"
import { format } from "date-fns"
import { Trash } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { applyCoupon, removeCoupon } from "../actions"

interface OrderSummaryProps {}

export const OrderSummary = ({}: OrderSummaryProps) => {
  const { cart, setCart } = useCart()
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)

  const discount = cart.discountTotal || 0n

  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0n,
  )

  const hanndleApplyCoupon = async () => {
    try {
      setLoading(true)
      const cart = await applyCoupon({
        code: code,
      })
      setLoading(false)
      setCode("")
      setCart(cart)
      toast.success(`Coupon applied`)
    } catch (error) {
      setLoading(false)
      if (error instanceof Error) {
        toast.error(`${error.message}`)
      } else {
        toast.error(`Failed to apply coupon`)
      }
    }
  }

  const handleRemove = (coupon: string) => async () => {
    try {
      setLoading(true)
      const cart = await removeCoupon({
        coupon: coupon,
      })
      setLoading(false)
      setCart(cart)
      toast.success(`Coupon removed`)
    } catch (error) {
      setLoading(false)
      if (error instanceof Error) {
        toast.error(`${error.message}`)
      } else {
        toast.error(`Failed to apply coupon`)
      }
    }
  }

  return (
    <div className="mx-8 my-4 w-full overflow-hidden md:mx-0 md:w-80 lg:w-96">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order Summary
            </CardTitle>
            <CardDescription>
              Date: {format(new Date(), "MMMM d, yyyy")}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {cart.items.map((item) => (
                <li
                  key={item.product}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">
                    {item.displayName} x <span>{item.quantity.toString()}</span>
                  </span>
                  <MoneyField value={item.price * item.quantity} />
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              {discount > 0n && (
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Discount</span>
                  <MoneyField value={-discount} className="text-primary" />
                </li>
              )}
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                {discount > 0n && (
                  <div className="flex items-end gap-2">
                    <MoneyField
                      value={total}
                      className="text-xs text-muted-foreground line-through"
                    />
                    <MoneyField value={total - discount} className="" />
                  </div>
                )}
                {discount == 0n && <MoneyField value={total} />}
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          {cart.coupons.length > 0 && (
            <>
              <div className="font-semibold">Coupons</div>
              <ul className="flex flex-col gap-2">
                {cart.coupons.map((item) => (
                  <li
                    key={item.name}
                    className="flex grow items-center  space-x-2"
                  >
                    <span className="text-muted-foreground">{item.code}</span>
                    <span className="grow italic text-muted-foreground">
                      {item.discountText}
                    </span>
                    <Button
                      variant={"destructive"}
                      size={"icon"}
                      onClick={handleRemove(item.name)}
                      className="h-8 w-8"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
            </>
          )}
        </CardContent>
        <CardFooter className="block space-y-4 border-t bg-muted/50 px-4 py-3 text-muted-foreground">
          <div className="flex w-full items-center text-nowrap text-xs">
            <span className="grow">Made in Workshop</span>
            <span className="font-bold">All prices are inclusive of VAT</span>
          </div>
          <div className="flex items-center gap-4">
            <Input
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              value={code}
              placeholder="Enter Coupon Code"
              className="text-center font-mono font-bold uppercase tracking-widest text-primary"
              maxLength={16}
            />
            <Button
              onClick={hanndleApplyCoupon}
              size="sm"
              className="relative w-32"
              disabled={loading}
            >
              Apply
              {loading && (
                <Spinner className="absolute right-0 top-0 h-4 w-4 text-background" />
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
