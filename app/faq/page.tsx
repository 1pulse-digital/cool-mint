"use client"
import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import { FAQAccordion } from "@/components/base/faqAccordion";

export const FAQ = () => {
    return(
        <div className={" bg-background py-12"}>
        <div className={"grid content-center font-helvetaica  sm:p-10 md:max-w-prose px-6"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>FAQ</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
<FAQAccordion />
<GetInTouch />
     </div>
    )
}

export default FAQ;