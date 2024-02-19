import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";
import Button from "./button";
import Link from "next/link";

export const HeroImages = () => {
 return (
  <div className="bg-background 2xl:h-screen py-10 hidden md:block">
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-40 md:grid-cols-3 lg:space-x-10">
      <div className="hidden md:block">
        <div className="rounded-md">
          <Image
            src={gallery}
            alt="made in workshop"
            placeholder={"blur"}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="hidden md:block lg:pt-20">
        <div className="rounded-md">
          <Image
            src={gallery}
            alt="made in workshop"
            placeholder={"blur"}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="grid content-center font-helvetica p-5 lg:text-start lg:p-20">
        <h1 className="text-headings text-secondary lg:text-start font-helvetica font-bold py-4 text-center">
          Why us<span className="text-primary">?</span>
        </h1>
        <p className="text-BodyText text-textColor lg:text-start text-center font-helvetica font-normal">
          Made In Workshop (MIW) is a shared workshop and fabrication studio. Not just a workshop with a
          collection of tools and machines but a community of like-minded fabricators, manufacturers, and designers.
        </p>
        <div className="py-8 text-center lg:text-start">
          <Link href="/about">
            <Button color="primary">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
    <div className="md:mt-20">
      <hr className="flex-grow h-[1px] bg-[#A1A1AA] border-0 mx-20 md:px-28"></hr>
      </div>
  </div>
 );
};
