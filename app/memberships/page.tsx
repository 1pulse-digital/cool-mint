import React from "react"
import PricingTable from "@/components/base/pricing-table"
import Link from "next/link"
import GetInTouch from "@/components/base/getInTouch"

const Memberships = () => {
  return (
    <div className={"bg-background py-10"}>
      <div className={"grid content-center px-8 font-helvetica sm:pt-10"}>
        <div>
          <div className="px-0 sm:px-4 md:mx-16 lg:mx-40 xl:mx-20 2xl:px-0">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
              Memberships<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground lg:px-12 xl:px-24 2xl:px-60">
              Our unique makerspace is equipped with industrial tools and
              machinery designed for manufacturers, DIY enthusiasts, hobbyists,
              freelancers, and anyone looking for workshop space.
            </p>
            <br />
            <p className="text-center font-helvetica text-BodyText font-normal text-primary lg:px-12 xl:px-24 2xl:px-60">
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
  )
}

export default Memberships
