import React from "react";
import PricingTable from "@/components/base/pricing-table";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";


const Memberships = () => {
  return (
    <div className={"bg-background py-10"}>
      <div className={"grid content-center px-8 font-helvetica sm:pt-10"}>
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
          <div className="sm:px-6 px-0 md:mx-16 lg:mx-40 xl:mx-60 2xl:mx-40">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary">
              Memberships<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-textColor 2xl:px-60">
            Our unique makerspace is equipped with industrial tools and machinery designed for <span className="text-primary">manufacturers, 
            DIY enthusiasts, hobbyists, freelancers</span>, and anyone looking for workshop space.
              <br />
              <br />
              Join our community and find your perfect fit.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10 md:pt-12 lg:pt-0">
        <PricingTable />
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Memberships;
