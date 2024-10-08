import React from "react";
import Link from "next/link";
import { LongButton, SquareButton } from "./button";

const GetInTouch = () => {
  return (
    <div
    className="flex items-center justify-center rounded-md bg-[#27272A] mx-6 lg:mx-2 font-helvetica px-2 flex-wrap md:mx-10"
  >
    <div className="rounded-lg py-8 text-center px-4">
      <h1 className="py-4 font-helvetica text-headings font-bold text-foreground">
        Get In Touch<span className="text-primary">.</span>
      </h1>
      <span className="font-helvetica text-BodyText font-normal text-foreground">
      Whether you want to <span className="text-primary">learn more about us or chat over a cup of coffee</span>, our doors are always open.

      </span>
      <div className="flex flex-row justify-center space-x-4 md:space-x-12 py-12">
        <div>
          <Link href="/contact">
            <LongButton color="secondary">Get in Touch</LongButton>
          </Link>
        </div>
        <div>
          <Link href="/book-tour">
            <SquareButton color="primary">
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
            </SquareButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default GetInTouch;
