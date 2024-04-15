import Button, { HeaderButton, LongButton } from "@/components/base/button";
import { CafeMIW } from "@/components/base/cafeMIW";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";
import Link from "next/link";
import React from "react";

const Cafe = () => {
  return (
    <div className="bg-background ">
      <div className={"px-6 sm:py-20 py-10"}>
        <div
          className={
            "grid content-center pb-8 font-helvetica md:pb-2 xl:pb-0 2xl:pb-0"
          }
        >
          <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-secondary">
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
            <HeaderTitle
              title="MIW Café"
              description="Looking for the perfect spot to take a breather, spark some creativity, 
              or just enjoy a great cup of coffee? Our on-site café is in the factory, where visitors and 
              members can connect, share ideas, or simply relax. Whether you're in the midst of a project or just starting 
              your day, our café offers a warm, welcoming space to recharge and mingle with fellow creators."
            />
          {/*   <div className="grid place-content-center pt-8">
              <Link href="/">
                <Button color="primary"> Download Menu </Button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="sm:mx-20 md:mx-6 lg:mx-44 2xl:mx-72">
          <CafeMIW />
        </div>
       </div>
      <div className="py-20 lg:px-8 2xl:px-24">
          <GetInTouch />
        </div>
    </div>
  );
};
export default Cafe;
