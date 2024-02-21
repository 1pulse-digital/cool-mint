"use client"
import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import { FAQAccordion } from "@/components/base/faqAccordion";
import Link from "next/link";

export const FAQ = () => {
    return(
        <div className={"bg-background py-12"}>
        <div className={"grid content-center font-helvetaica  sm:p-10  2xl:mx-80 lg:mx-40 px-8"}>
        <div className="text-xs text-secondary  font-helvetica font-light inline-flex justify-center">
            
          <div>
          <Link href="/">
            Home 
            <span className="px-1">|</span>  
            </Link>
          </div>
          <div>
          <Link href="/faq" className="text-primary">
          FAQ's
          </Link>
          </div>
          </div>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>FAQ<span className="text-primary">.</span></h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light 2xl:px-32 lg:px-20 md:px-40 xl:px-52"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
<FAQAccordion />
<GetInTouch />
     </div>
    )
}

export default FAQ;