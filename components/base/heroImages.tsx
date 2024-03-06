import React from "react";
import Image from "next/image";
import gallery from "../../images/why-us-img.png";
import Button from "./button";
import Link from "next/link";

export const HeroImages = () => {
  return (
    <div id="whyus" className="flex h-screen items-center justify-center py-10">
    <div className="flex flex-wrap justify-center items-stretch md:justify-between lg:space-x-2 w-full ">
      <div className="flex-1 flex justify-center items-center p-5 hidden sm:block">
        <div className="hidden sm:block rounded-md w-full">
          <Image src={gallery} alt="made in workshop" placeholder="blur" className="rounded-md w-full h-auto" />
        </div>
      </div>
      <div className="sm:flex-1 sm:flex sm:flex-col sm:justify-center p-5 font-helvetica">
        <h1 className="py-4 text-center md:text-start font-helvetica text-headings font-bold text-secondary lg:text-start sm:text-start">
          Why us<span className="text-primary">?</span>
        </h1>
        <p className="text-center font-helvetica sm:text-start md:text-start text-BodyText font-normal text-textColor lg:text-start">
          Made In Workshop (MIW) is a shared workshop and fabrication studio. Not just a workshop with a collection of tools and machines but a
          community of like-minded <span className="text-primary">fabricators</span>, <span className="text-primary">manufacturers</span> and <span className="text-primary">designers</span>.
        </p>
        <div className="py-8 text-center md:text-start sm:text-start lg:text-start">
          <Link href="/about">
            <Button color="primary">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
};
