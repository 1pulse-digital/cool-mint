"use client"
import Button from "@/components/base/button"
import GetInTouch from "@/components/base/getInTouch"
import OrderConfirmedItem from "./components/orderConfirmed"
import HeaderTitle from "@/components/header-title"
import { MoneyField } from "@/components/money-field"
import { Check } from "lucide-react"
import Link from "next/link"
import { notFound, useSearchParams } from "next/navigation"
import { myOrders } from "../orders/actions"
import { useEffect, useState, useCallback } from "react"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { Spinner } from "@/components/ui/spinner"

const OrderConfirmation: React.FC = () => {
  const params = useSearchParams();
  const [order, setOrder] = useState<Order | undefined>(Order.initialize({ number: BigInt(0), status: Order.Status.PENDING }));
  const [loading, setLoading] = useState(true);
  const orderNumber = params.get("order_number");

  const fetchData = useCallback(async () => {
    try {
      const response = await myOrders({});
      const myOrder = response.orders.find(
        (order) => order.status === "COMPLETED" && order.name.includes(orderNumber ?? "")
      );
      setOrder(myOrder);
    } catch (error) {
      console.error("Failed to fetch order:", error);
    } finally {
      setLoading(false);
    }
  }, [orderNumber]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!loading && !order) {
      console.warn("order not found");
      setOrder(Order.initialize({ number: BigInt(0), status: Order.Status.PENDING }));
    }
  }, [loading, order]);

  if (loading) {
    return <Spinner/>;
  }

  if (!order) {
    notFound()
  }

  return (
    <div className={"bg-background px-8 py-20"}>
      <div className="grid content-center items-center text-center font-heletica sm:p-10">
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
          {order?.lineItems.map((item) => {
            return <OrderConfirmedItem
              imageSrc="/icons/banner.webp"
              date={order.dateCompleted}
              name={item.productDisplayName}
              time={"3 hours"} // REVIEWER: Do we need to call the get product here? To get the actual product details
              price={item.price}
              confirm={order.status}
              quantity={item.quantity.toString()}
            />
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
                <MoneyField value={BigInt(order?.total ?? 0) + BigInt(order?.discountTotal ?? 0)} />
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

export default OrderConfirmation
