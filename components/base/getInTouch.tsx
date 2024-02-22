import React from "react";
import Link from "next/link";
import Button, { LongButton, SmallButton, SquareButton } from "./button";

const GetInTouch = () => {
  return (
    <div
    className="flex flex-col items-center justify-center rounded-md bg-[#27272A] mx-8 lg:mx-16 font-helvetica px-8"
  >
    <div className="rounded-full py-8 text-center px-4">
      <h1 className="py-4 font-helvetica text-headings font-bold text-secondary">
        Get In Touch<span className="text-primary">.</span>
      </h1>
      <span className="font-helvetica text-BodyText font-light text-secondary">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      </span>
      <div className="flex flex-row justify-center space-x-2  md:space-x-12 py-12">
        <div>
          <Link href="/contact">
            <LongButton color="secondary">Get in Touch</LongButton>
          </Link>
        </div>
        <div>
          <Link href="/bookTour">
            <SmallButton color="primary">
              Learn More
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
  </div>
  
  );
};

export default GetInTouch;
