import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import PricingTable from "@/components/base/pricing-table";
import Link from "next/link";

const Memberships = () => {
  return(
      <div className={"bg-background py-12"}>
        <div className={"grid content-center font-helvetica sm:p-10 px-8 2xl:mx-60 xl:mx-32 lg:px-52 md:px-32 sm:px-24"}>
        <div className="text-xs text-secondary  font-helvetica font-light inline-flex justify-center">
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
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Memberships<span className="text-primary">.</span></h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          We have membership options that cover all types of customers ranging from <span className="text-primary"> professionals</span> to <span className="text-primary"> hobbyists</span> .
          Our Membership model was designed to work in perfect synchronisation with your business cycle. 
         Days do not have to be used in consecutive order and can be used by multiple users on the same day. Prices include VAT.
          </p>
          <p className="text-BodyText text-primary text-center font-helvetica font-normal py-8" >Prices include VAT.</p>
          </div>
          <div className="pb-20"><PricingTable /></div>
        <GetInTouch />
     </div>
  );
};

export default Memberships;