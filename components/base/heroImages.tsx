import React from "react";
import Image from "next/image";
import whyus from "../../images/Why-Us-High-Res.png";
import Button from "./button";
import Link from "next/link";

export const HeroImages = () => {
  return (
    <div id="whyus" className="flex h-screen items-center justify-center py-10">
      <div className="flex w-full flex-wrap items-stretch justify-center md:justify-between lg:space-x-2 ">
        <div className="flex hidden flex-1 items-center justify-center p-5 sm:block">
          <div className="hidden w-full rounded-md sm:block">
            <Image
              src={whyus}
              alt="why us"
              placeholder="blur"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
        <div className="p-5 font-helvetica sm:flex sm:flex-1 sm:flex-col sm:justify-center">
          <h1 className="py-4 text-center font-helvetica text-headings font-bold text-secondary sm:text-start md:text-start lg:text-start">
            Why us<span className="text-primary">?</span>
          </h1>
          <p className="text-center font-helvetica text-BodyText font-normal text-textColor sm:text-start md:text-start lg:text-start">
            Made In Workshop (MIW) is a shared workshop and fabrication studio.
            Not just a workshop with a collection of tools and machines but a
            community of like-minded{" "}
            <span className="text-primary">fabricators</span>,{" "}
            <span className="text-primary">manufacturers</span> and{" "}
            <span className="text-primary">designers</span>.
          </p>
          <div className="py-8 text-center sm:text-start md:text-start lg:text-start">
            <Link href="/about">
              <Button color="primary">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
