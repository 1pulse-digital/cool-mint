import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";
import Button from "./button";
import Link from "next/link";

export const HeroImages = () => {
 return (
  <div className="bg-background ">
    <div className="grid lg:grid-cols-3 grid-cols-2 lg:mx-40 lg:space-x-10">
    <div className="">
    <div></div>
    <div className={"rounded-md"}>
        <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"
        />
      </div>
    </div>
    <div className="lg:pt-20">
    <div className="rounded-md">
      <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"
        /></div>
    <div></div>
    </div>
    <div className={"grid content-center font-helvetica p-5 lg:text-start lg:pt-20"}>
          <h1 className={"text-headings text-secondary lg:text-start font-helvetica font-bold py-4 text-center"}>Why us<span className="text-primary">?</span></h1>
          <p className={"text-BodyText text-textColor lg:text-start text-center font-helvetica font-light"}>
          Made In Workshop (MIW) is a shared workshop and fabrication studio. Not just a workshop with a
           collection of tools and machines but a community of like-minded fabricators, manufacturers, and designers.
          </p>
          <div className="py-8 text-center lg:text-start">
          <Link href="/about">
              <Button color="primary">Learn More</Button></Link>
          </div>
        </div>
        </div>
        <hr className="flex-grow h-[1px] bg-textColor border-0"></hr>
  </div>
    )
}