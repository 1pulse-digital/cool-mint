import Link from "next/link";
import React from "react";
import Button from "./button";

export const FAQs = () => {
  return(
      <div className={"grid grid-cols-1 bg-[#2c3033]  px-8 "}>
        <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>FAQs</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
          <div className="py-8 text-center ">
          <Link href="/about">
              <Button color="primary">Learn More</Button></Link>
          </div>
        </div>
     </div>
  );
};
