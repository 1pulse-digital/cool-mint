import React from "react";
import PricingTable from "@/components/base/pricing-table";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";
import OrderHis from "@/components/base/orderHis";

 

const OrderHistory = () => {
  return (
    <div className={"bg-background"}>
      <div
        className={
          "grid content-center px-8 font-helvetica sm:pt-10 py-10"
        }
      >
        <div className="inline-flex justify-center font-helvetica text-xs font-normal text-foreground">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/orderHistory">
            <div className="text-primary">Order History</div>
          </Link>
        </div>
       <div>
       <HeaderTitle title="Order History"
        description="A list of your recent orders."
      />
      </div>
      </div>
      <div className="pt-10 md:pt-12 lg:pt-0 px-6 md:px-10 2xl:px-28 ">
        <OrderHis/>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default OrderHistory;

