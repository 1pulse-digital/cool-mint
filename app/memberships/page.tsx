import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import PricingTable from "@/components/base/pricing-table";
import Link from "next/link";

const Memberships = () => {
  return (
    <div className={"bg-background py-20"}>
      <div
        className={
          "grid content-center px-8 font-helvetica sm:p-10 sm:px-24 md:px-32 lg:px-52 xl:mx-32 2xl:mx-60"
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
        <h1
          className={
            "py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary"
          }
        >
          Memberships<span className="text-primary">.</span>
        </h1>
        <p
          className={
            "pb-8 text-center font-helvetica text-BodyText font-normal text-textColor sm:pb-0"
          }
        >
          We have membership options that cover all types of customers ranging
          from <span className="text-primary"> professionals</span> to{" "}
          <span className="text-primary"> hobbyists</span> . Our Membership
          model was designed to work in perfect synchronisation with your
          business cycle. Days do not have to be used in consecutive order and
          can be used by multiple users on the same day.
        </p>
      </div>
      <div className="pb-20">
        <p className="text-center font-helvetica text-BodyText font-normal text-primary">
          Prices include VAT.
        </p>
        <PricingTable />
      </div>
      <GetInTouch />
    </div>
  );
};

export default Memberships;
