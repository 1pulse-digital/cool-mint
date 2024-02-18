import React from "react";
import Link from "next/link";
import Button, { SquareButton } from "./button";


const GetInTouch = () => {
  return (
    <div className="bg-background">
    <div className={"grid content-center px-8 bg-[#e1e1e1] rounded-2xl mx-1 lg:invisible"}>
      <div className={"py-8 rounded-full"}>
        <h1 className={"text-headings text-center text-background font-helvetica font-bold py-4"}>
         Get In Touch
        </h1>
        <p className={"text-BodyText text-[#A1A1AA] text-center font-helvetica font-light"}>
          <span>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </span>
        </p>
        <div className="py-12 text-right flex-row flex space-x-8">
          <div>
            <Link href="/contact">
              <Button color="primary">Get in Touch</Button></Link>
            </div>
            <div className="flex-row"> 
        <Link href="/bookTour">
        <SquareButton color="primary">Book a Tour
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></SquareButton></Link>
        </div>
        </div>
      </div>
    </div>

    {/* desktop */}
    <div className={"grid content-center px-8 bg-[#27272A] rounded-md mx-24 py-10"}>
      <div className={"py-8 rounded-full"}>
        <h1 className={"text-headings text-center text-secondary font-helvetica font-bold py-4"}>
         Get In Touch
        </h1>
        <p className={"text-BodyText text-secondary  text-center font-helvetica font-light"}>
          <span>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          </span>
        </p>
        <div className="py-12 text-center flex-row flex space-x-12 justify-center">
          <div>
            <Link href="/contact">
              <Button color="primary">Get in Touch</Button></Link>
            </div>
            <div className="flex-row"> 
        <Link href="/bookTour">
        <SquareButton color="primary">Learn More
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