import { CafeMIW } from "@/components/base/cafeMIW";
import Link from "next/link";
import React from "react";



 const Cafe = () => {
  return(
    <div>
      <div className={"bg-background py-20 px-6"}>
      <div className={"grid content-center font-helvetica pb-16 2xl:mx-72 sm:mx-20 md:mx-28 lg:mx-44"}>
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
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>MIW Café<span className="text-primary">.</span></h1>
          <span className={"text-BodyText text-textColor text-center font-helvetica font-normal 2xl:px-52 lg:px-32"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </span>
        </div>
        <CafeMIW />
     </div>
     </div>
  );
};
export default Cafe;