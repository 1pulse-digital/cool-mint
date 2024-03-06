import { CafeMIW } from "@/components/base/cafeMIW";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";
import Link from "next/link";
import React from "react";



 const Cafe = () => {
  return(
    <div>
      <div className={"bg-background py-20 px-6"}>
      <div className={"grid content-center font-helvetica pb-16 "}>
        <div className="text-xs text-secondary  font-helvetica font-normal inline-flex justify-center">
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
       <HeaderTitle title="MIW Café"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat."
      />
      </div>
        </div>
        <div className="2xl:mx-72 sm:mx-20 md:mx-28 lg:mx-44">
        <CafeMIW />
        </div>
        <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
     </div>
     </div>
  );
};
export default Cafe;