import React from "react";
import Link from "next/link";
import Button, { SquareButton } from "./button";


const GetInTouch = () => {
  return (
    <div className="bg-background">
    <div className={"grid content-center px-8 py-8 bg-[#e1e1e1] rounded-2xl mx-1"}>
      <div className={" z-10 py-8 rounded-full"}>
        <h1 className={"text-headings text-center text-background font-helvetica font-bold py-4"}>
         Get In Touch
        </h1>
        <p className={"text-BodyText text-[#A1A1AA] text-center font-helvetica font-light"}>
          <span>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </span>
        </p>
        <div className="z-10 py-12 text-right flex-row flex space-x-8">
          <div>
            <Link href="/about">
              <Button color="primary">Get in Touch</Button></Link>
            </div>
            <div className="flex-row"> 
        <Link href="/about">
        <SquareButton color="primary">Book a Tour
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></SquareButton></Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetInTouch;