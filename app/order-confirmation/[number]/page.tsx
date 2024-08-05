import Button from "@/components/base/button"
import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/header-title"
import { Skeleton } from "@/components/ui/skeleton"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { Check, Loader } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { myOrders } from "../../orders/actions"
import {
  OrderConfirmation,
} from "./components/orderConfirmed"

export default async function Page({ params }: { params: { number: string } }) {
  const { number: orderNumber } = params
  const response = await myOrders({})
  const order = response.orders.find(
    (order) => order.number == BigInt(orderNumber),
  )

  if (!order) {
    notFound()
  }

  return (
    <div className={"bg-background px-8 py-20"}>
      <div className="font-heletica grid content-center items-center text-center sm:p-10">
        <div>
          <HeaderTitle>Order Confirmation</HeaderTitle>
        </div>
        <div className="flex items-center justify-center py-4">
          {order.status === Order.Status.PENDING && (
            <Skeleton className="flex h-32 w-32 items-center justify-center space-x-2">
              <span>{order.status}</span>
              <Loader className="h-4 w-4 animate-pulse" />
            </Skeleton>
          )}
          {order.status === Order.Status.COMPLETED && (
            <Check className="h-32 w-32" color="#ADFA1C" />
          )}
        </div>
        <div className="flex">
          {order?.lineItems.map((item, idx) => {
            return (
              <div className="w-full" key={idx}>
                <Suspense fallback={<Skeleton />}>
                  <OrderConfirmation order={order} />
                </Suspense>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-0">
        <Link href="/classes">
          <Button color="primary">Back to Classes</Button>
        </Link>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
