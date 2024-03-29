"use client";
import React from "react";
import { FAQAccordion } from "@/components/base/faqAccordion";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";

const FAQ = () => {
  return (
    <div className="bg-background sm:py-20 py-10">
      <div>
      <div className="font-helvetaica grid content-center px-8">
        <div className="inline-flex justify-center font-helvetica text-xs font-normal text-secondary">
          <div>
            <Link href="/">
              Home
              <span className="px-1">|</span>
            </Link>
          </div>
          <div>
            <Link href="/faq" className="text-primary">
              FAQ&apos;s
            </Link>
          </div>
        </div>

        <div>
       <HeaderTitle title="FAQ"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat."
      />
      </div>
      </div>
      <div>
      <FAQAccordion />
      </div>
      </div>
      <div className="sm:py-20 py-10 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default FAQ;
