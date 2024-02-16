import React from "react";
import Link from "next/link";
import Button, { SmallButton } from "./base/button";

const Hero = () => {
  return (
    <div className={"relative grid sm:h-screen content-center pt-32 pb-14 px-8 bg-background lg:h-screen"}>
      <div className={"absolute inset-0 "}></div>
      <div className={"z-10 grid  md:px-28 "}>
        <h1
          className={
            "text-center font-helvetica text-headings font-bold leading-tight text-secondary lg:text-5xl text-2xl"
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
          <span>
            Providing you with the tools, machines and the space for you to{" "}
            <span className="font-medium text-primary">design</span>,{" "}
            <span className="font-medium text-primary">build </span> and
            <span className="font-medium text-primary"> fabricate </span>your
            product, project or idea.
          </span>
        </p>
        <div className="z-10 flex flex-row justify-center py-5 text-right">
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
      <div className="pt-60">
      <hr className="flex-grow h-[1px] bg-textColor border-0 mx-40"></hr>
      </div>
    </div>
  );
};

export default Hero;
