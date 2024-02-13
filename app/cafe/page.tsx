import { CafeMIW } from "@/components/base/cafeMIW";
import GetInTouch from "@/components/base/getInTouch";
import { TeamCarousel } from "@/components/base/teamCarousel";
import Link from "next/link";
import React from "react";



 const Cafe = () => {
  return(
    <div>
      <div className={"bg-background py-20 px-8"}>
        <div className={"grid content-center font-helvetica pb-16"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>MIW Café</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
        </div>
        <CafeMIW />
     </div>
     <GetInTouch />
     </div>
  );
};
export default Cafe;