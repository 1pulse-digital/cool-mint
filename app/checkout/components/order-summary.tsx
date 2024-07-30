"use client"
import { Cart } from "@/lib/fusion/commerce/cart.pb"

interface OrderSummaryProps {
  cart: Cart
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MoneyField } from "@/components/money-field"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"

export const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0n,
  )
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
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <MoneyField value={total} />
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
        </CardContent>
        <CardFooter className="flex items-center text-nowrap border-t bg-muted/50 px-6 py-3 text-xs text-muted-foreground">
          <span className="grow">Made in Workshop</span>
          <span className="font-bold">All prices are inclusive of VAT</span>
        </CardFooter>
      </Card>
    </div>
  )
}
