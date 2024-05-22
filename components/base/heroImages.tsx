import React from "react";
import Image from "next/image";
import whyus from "../../images/home/Why-Us.png";
import Button from "./button";
import Link from "next/link";

export const HeroImages = () => {
  return (
    <div id="whyus" className="flex h-screen items-center justify-center py-10">
      <div className="flex w-full flex-wrap items-stretch justify-center md:justify-between lg:space-x-2 ">
        <div className="flex-1 items-center justify-center p-5 md:block">
          <div className="hidden w-full rounded-md sm:block">
            <Image
              src={whyus}
              alt="why us"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
        <div className="p-0 sm:p-5 font-helvetica sm:flex md:flex-1 sm:flex-col sm:justify-center">
          <h1 className="py-4 text-center font-helvetica text-headings font-bold text-foreground xl:text-5xlsm:text-start md:text-start lg:text-start">
            Why choose our Makerspace<span className="text-primary">?</span>
          </h1>
          <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground sm:text-center md:text-start lg:text-start">
          Our members not only have access to our impressive collection of tools and machinery; they also{" "}
            <span className="text-primary">become part of a community</span> of like-minded individuals. From <span className="text-primary"> beginners to expert manufacturers</span>, everyone comes together to explore, create, and innovate.
          </p>
          <div className="py-8 text-center sm:text-center md:text-start lg:text-start">
            <Link href="/about">
              <Button color="primary">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
