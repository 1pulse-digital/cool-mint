import React from "react";
import Image from "next/image";
import whyus from "../../images/home/Why-Us.png";
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
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
        <div className="p-5 font-helvetica sm:flex sm:flex-1 sm:flex-col sm:justify-center">
          <h1 className="py-4 text-center font-helvetica text-headings font-bold text-secondary sm:text-start md:text-start lg:text-start">
            Why choose our Makerspace<span className="text-primary">?</span>
          </h1>
          <p className="text-center font-helvetica text-BodyText font-normal text-textColor sm:text-start md:text-start lg:text-start">
            Our space is more than just a collection of industrial machinery and
            tooling; it is a hub for{" "}
            <span className="text-primary">collaboration</span> and{" "}
            <span className="text-primary">innovation</span>. Becoming a member
            means you&apos;re not only accessing a workspace, tools, and machines but
            also joining a vibrant community of{" "}
            <span className="text-primary">like-minded individuals</span> who
            thrive on the exchange of ideas, skills, and inspiration. It&apos;s an
            environment where everyone, from beginners to seasoned
            manufacturers, can come together to{" "}
            <span className="text-primary">explore, create, and innovate.</span>
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
