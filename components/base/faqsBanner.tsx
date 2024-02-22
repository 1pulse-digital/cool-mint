import Link from "next/link";
import React from "react";
import Button from "./button";

export const FAQSBanner = () => {
  return (
      <div className={"grid grid-cols-1 bg-[#2A2A2A] px-8 "}>
        <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>FAQs</h1>
          <span className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </span>
          <div className="py-8 text-center ">
          <Link href="/faq">
              <Button color="primary">Learn More</Button></Link>
          </div>
        </div>
     </div>
  );
};
