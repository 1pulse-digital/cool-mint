import React from "react";
import Link from "next/link";
import Button, { SmallButton } from "./base/button";

const Hero = () => {
  return (
    <div
      className={
        "relative grid content-center bg-background py-8 align-middle sm:-mt-20 sm:h-screen sm:py-0 xl:px-40 2xl:px-52"
      }
    >
      <div className={"absolute inset-0"}></div>
      <div className={"z-10 grid"}>
        <h1
          className={
            "text-center font-helvetica text-2xl text-headings font-bold leading-tight text-secondary lg:text-5xl  lg:leading-tight"
          }
        >
          The Largest Shared Workshop & Makerspace in South Africa
          <span className="text-primary">.</span>
        </h1>
        <span
          className={
            "my-8 text-center font-helvetica text-BodyText font-light text-textColor"
          }
        >
          <div className="md:px-28">
            <span>
              Providing you with access to industrial tools and machinery, all
              within a{" "}
              <span className="font-medium text-primary">
                {" "}
                vibrant shared workshop environment{" "}
              </span>
              , allowing you to bring your ideas to life. Whether you&apos;re a
              <span className="font-medium text-primary">
                {" "}
                professional manufacturer{" "}
              </span>
              ,<span className="font-medium text-primary">
                {" "}
                a hobbyist{" "}
              </span>,{" "}
              <span className="font-medium text-primary"> a maker</span>, or
              somewhere{" "}
              <span className="font-medium text-primary"> in between </span>,
              let our shared workshop be your new creative home.
            </span>
          </div>
        </span>
        <div className="z-10 flex justify-center py-5 text-right md:space-x-6 lg:space-x-4">
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
      <div>
        <div className="hidden sm:block">
          <div className="absolute inset-x-0 bottom-10 flex animate-bounce justify-center">
            <Link href="/#whyus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="h-14 w-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
