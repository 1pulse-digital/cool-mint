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
import { Separator } from "@/components/ui/separator"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { format } from "date-fns"

interface OrderSummaryProps {
  order?: Order
}

export const OrderSummary = ({ order }: OrderSummaryProps) => {
  if (!order) {
    return null
  }
  const total = order.total

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
              {order.lineItems.map((item) => (
                <li
                  key={item.product}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">
                    {item.productDisplayName} x <span>{item.quantity.toString()}</span>
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
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">Made in Workshop</div>
        </CardFooter>
      </Card>
    </div>
  )
}
