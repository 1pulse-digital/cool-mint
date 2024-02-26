"use client";
import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import { FAQAccordion } from "@/components/base/faqAccordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="bg-background py-12">
      <div className="font-helvetaica grid content-center  px-8  sm:p-10 lg:mx-40 2xl:mx-80">
        <div className="inline-flex justify-center  font-helvetica text-xs font-light text-secondary">
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
        <h1
          className={
            "py-4 text-center font-helvetica text-headings font-bold text-secondary"
          }
        >
          FAQ<span className="text-primary">.</span>
        </h1>
        <span
          className={
            "text-center font-helvetica text-BodyText font-light text-textColor md:px-40 lg:px-20 xl:px-52 2xl:px-32"
          }
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </span>
      </div>
      <FAQAccordion />
    </div>
  );
};

export default FAQ;
