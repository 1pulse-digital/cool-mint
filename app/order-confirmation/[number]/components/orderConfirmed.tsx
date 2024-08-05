import { MoneyField } from "@/components/money-field"
import { Separator } from "@/components/ui/separator"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { format } from "date-fns"
import React from "react"

interface OrderConfirmationProps {
  order: Order
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  order,
}) => {
  return (
    <div className="container">
      <div
        id="header"
        className="flex flex-col space-y-3 text-center sm:text-left"
      >
        <div
          id="title"
          className="flex text-lg font-semibold leading-none tracking-tight"
        >
          <span className="grow">
            Order {order.number.toString().padStart(6, "0")}
          </span>
          <span>{order.status}</span>
          {/* Order {order.number.toString().padStart(6, "0")} {order.status} */}
        </div>
        <div id="description" className="text-sm text-muted-foreground">
          Date: {format(new Date(order.auditEntry.dateCreated), "MMMM d, yyyy")}
        </div>
      </div>
      <div className="grid gap-3">
        <div className="font-semibold">Order Details</div>
        <ul className="grid gap-3">
          {order.lineItems.map((item) => (
            <li
              key={item.product}
              className="flex items-center justify-between"
            >
              <span className="text-muted-foreground">
                {item.productDisplayName} x{" "}
                <span>{item.quantity.toString()}</span>
              </span>
              <MoneyField value={item.price * item.quantity} />
            </li>
          ))}
        </ul>
        <Separator className="my-2" />
        <ul className="grid gap-3">
          {order && order.discountTotal > 0n && (
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Discount</span>
              <MoneyField
                value={-order.discountTotal}
                className="text-primary"
              />
            </li>
          )}
          <li className="flex items-center justify-between font-semibold">
            <span className="text-muted-foreground">Total</span>
            <MoneyField value={order.total} />
          </li>
        </ul>
      </div>
      ˝
      <Separator className="my-4" />
      {order.coupons.length > 0 && (
        <>
          <div className="font-semibold">Coupons</div>
          <ul className="flex flex-col gap-2">
            {order.coupons.map((item) => (
              <li key={item.name} className="flex grow items-center  space-x-2">
                <span className="text-muted-foreground">{item.code}</span>
                <span className="grow italic text-muted-foreground">
                  {item.discountText}
                </span>
              </li>
            ))}
          </ul>
          <Separator className="my-4" />
        </>
      )}
      <div
        id="footer"
        className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
      >
        <div className="flex w-full items-center text-nowrap text-xs text-muted-foreground">
          <span className="grow text-start">Made in Workshop</span>
          <span className="font-bold">All prices are inclusive of VAT</span>
        </div>
      </div>
    </div>
  )
}
