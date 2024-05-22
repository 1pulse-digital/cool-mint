//import Button, { HeaderButton, LongButton } from "@/components/base/button";
import { CafeMIW } from "@/components/base/cafeMIW"
import GetInTouch from "@/components/base/getInTouch"
import Link from "next/link"
import React from "react"

const Cafe = () => {
  return (
    <div className="bg-background ">
      <div className={"px-6 py-10 sm:py-20"}>
        <div
          className={
            "grid content-center pb-8 font-helvetica md:pb-2 xl:pb-0 2xl:pb-0"
          }
        >
          <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-foreground">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/cafe">
              <div className="text-primary">Made in Workshop Cafe</div>
            </Link>
          </div>
          <div>
            <div className="px-0 pb-0 sm:px-5 sm:pb-6 md:mx-16 lg:mx-40 xl:mx-48 2xl:mx-20">
              <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
                MIW Café<span className="text-primary">.</span>
              </h1>
              <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground lg:px-14 2xl:px-60">
                Our in-house café is the ideal spot to take a breather, spark
                some creativity, or enjoy a great cup of coffee! Visitors and
                members are welcomed to{" "}
                <span className="text-primary">
                  connect, share ideas, or simply relax
                </span>
                .
              </p>
            </div>

            {/*   <div className="grid place-content-center pt-8">
              <Link href="/">
                <Button color="primary"> Download Menu </Button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="sm:mx-10 md:mx-6 lg:mx-24 2xl:mx-52">
          <CafeMIW />
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
export default Cafe
