import React from "react";
import PricingTable from "@/components/base/pricing-table";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";

const Memberships = () => {
  return (
    <div className={"bg-background py-10"}>
      <div
        className={
          "grid content-center px-8 font-helvetica sm:p-10 "
        }
      >
        <div className="inline-flex justify-center font-helvetica text-xs font-normal text-secondary">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/memberships">
            <div className="text-primary">Pricing</div>
          </Link>
        </div>
       <div>
       <HeaderTitle title="Memberships"
        description="We have membership options that cover all types of customers ranging from professionals to hobbyists . Our Membership model was designed to work in perfect synchronisation with your business cycle. Days do not have to be used in consecutive order and can be used by multiple users on the same day."
      />
      </div>
      </div>
      <div className="pb-20 pt-8 sm:pt-0">
        <p className="text-center font-helvetica text-BodyText font-normal text-primary">
          Prices include VAT.
        </p>
        <PricingTable />
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Memberships;
