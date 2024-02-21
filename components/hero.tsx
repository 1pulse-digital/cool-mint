import React from "react";
import Link from "next/link";
import Button, { SmallButton } from "./base/button";

const Hero = () => {
  return (
    <div className={"relative grid lg:h-screen content-center md:h-py-40 sm:py-32 py-20 bg-background place-self-center"}>
      <div className={"absolute inset-0 "}></div>
      <div className={"z-10 grid 2xl:mx-60 xl:mx-52 lg:mx-24 md:mx-10 sm:mx-10 px-8"}>
        <h1
          className={
            "text-center font-helvetica text-headings font-bold leading-tight text-secondary lg:text-5xl text-2xl lg:px-16 lg:leading-tight"
          }
        >
          The Largest Shared Workshop & Makerspace in South Africa
          <span className="text-primary">.</span>
        </h1>
        <p
          className={
            "my-8 text-center font-helvetica text-BodyText font-light text-textColor"
          }
        >
          <div className="lg:px-36 md:px-24 2xl:px-60">
          <span>
            Providing you with the tools, machines and the space for you to
             <span className="font-medium text-primary"> design</span>,
              <span className="font-medium text-primary"> build </span> and
            <span className="font-medium text-primary"> fabricate </span>your
            product, project or idea.
          </span>
          </div>
        </p>
        <div className="z-10 flex flex-row justify-center py-5 text-right lg:space-x-4 mb-14 ">
          <div>
            <Link href="/memberships">
              <Button color="primary">Become a Member</Button>
            </Link>
          </div>
          <div>
            <Link href="/bookTour">
              <SmallButton color="primary">
                Book a Tour
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </SmallButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 flex justify-center items-center animate-bounce">
        <Link href="/#whyus">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</Link>
      </div>
      <div className="md:mt-20">
      <hr className="flex-grow h-[1px] bg-[#A1A1AA] border-0 mx-20 md:px-28"></hr>
      </div>
    </div>
  );
};

export default Hero;
