import React from "react";
import Link from "next/link";
import Button, { SmallButton } from "./base/button";

const Hero = () => {
    
  return (
    <div className={"grid relative content-center px-8"}>
      <div className={"absolute inset-0 bg-background"}>
      </div>
      <div className={"grid z-10 py-20"}>
        <h1 className={"text-headings font-bold text-center font-helvetica text-secondary leading-tight"}>
        Shared workshop and fabrication studio<span className="text-primary">.</span></h1>
        <p className={"text-BodyText my-8 text-center text-textColor font-light font-helvetica"}>
          <span>Providing you with the tools, machines and the space for you to  <span className="text-primary">design</span>, 
          <span className="text-primary">build</span> and <span className="text-primary"> fabricate </span>your product, project or idea.</span>
          </p>
        <div className="z-10 py-5 text-right flex-row flex">
          <div>
            <Link href="/about">
              <Button color="primary">Become a Member</Button></Link>
            </div>
            <div> 
        <Link href="/about">
          <SmallButton color="primary">Book a Tour
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButton></Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;