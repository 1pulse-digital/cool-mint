import Button from "@/components/base/button"
import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/header-title"
import { MoneyField } from "@/components/money-field"
import { Skeleton } from "@/components/ui/skeleton"
import { Check } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { myOrders } from "../../orders/actions"
import OrderConfirmedItem from "./components/orderConfirmed"

export default async function Page({ params }: { params: { number: string } }) {
  const { number: orderNumber } = params
  const response = await myOrders({})
  const order = response.orders.find(
    (order) =>
      order.status === "COMPLETED" && order.name.includes(orderNumber ?? ""),
  )

  if (!order) {
    notFound()
  }

  return (
    <div className={"bg-background px-8 py-20"}>
      <div className="font-heletica grid content-center items-center text-center sm:p-10">
        <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-foreground">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/order-confirmation">
            <div className="text-primary">Order Confirmation</div>
          </Link>
        </div>

        <div>
          <HeaderTitle>Order Confirmation</HeaderTitle>
        </div>
        <div className="flex items-center justify-center py-4">
          <Check size={100} color="#ADFA1C" />
        </div>
        <div className="grid items-center justify-center">
          {order?.lineItems.map((item, idx) => {
            return (
              <div key={idx}>
                <Suspense fallback={<Skeleton />}>
                  <OrderConfirmedItem
                    name={item.productDisplayName}
                    price={item.price}
                    confirm={order.status}
                  />
                </Suspense>
              </div>
            )
          })}
        </div>
      </div>
      <div className="sm:flex sm:justify-center sm:space-x-52">
        <div className="">
          <Link href="/workshops">
            <Button color="primary">Back to Workshops</Button>
          </Link>
        </div>
        <div className="sm:flex-col">
          <div>
            <span
              className={
                "text-start font-helvetica text-BodyText font-bold text-muted-foreground"
              }
            >
              Total:
            </span>
          </div>
          <div>
            <span
              className={
                "text-start font-helvetica text-[25px] font-bold text-primary"
              }
            >
              <MoneyField value={BigInt(order?.total ?? 0)} />
            </span>
          </div>

          <div className="pb-14 text-[16px]  text-primary ">
            <div>
              <span className={"font-helvetica font-bold line-through"}>
                <MoneyField
                  value={
                    BigInt(order?.total ?? 0) +
                    BigInt(order?.discountTotal ?? 0)
                  }
                />
              </span>
            </div>
          </div>
        </div>
        <div className="xs:block grid hidden">
          <Link href="/workshops">
            <Button color="primary">Back to Workshops</Button>
          </Link>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
