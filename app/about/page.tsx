import React from "react";
import Image from "next/image";
import gallery from "/images/banner.webp";
import { TeamCarousel } from "@/components/base/teamCarousel";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";

const About = () => {
  return (
    <div className="bg-background font-helvetica">
      <div className="lg:px-32">
        <div className="relative hidden lg:flex">
          <Image
            src={gallery}
            alt="made in workshop"
            placeholder={"blur"}
            height={250}
            width={250}
            className="absolute left-0 top-8 -rotate-12 rounded-lg lg:w-40 lg:pt-20 xl:w-60 2xl:mt-16"
          />
          <Image
            src={gallery}
            alt="made in workshop"
            placeholder={"blur"}
            height={250}
            width={250}
            className="absolute right-0 mt-[430px] rotate-12 rounded-lg lg:mt-[660px] lg:w-40 xl:mt-[450px] xl:w-60 2xl:mt-[480px]"
          />
        </div>
        <div className="relative -mt-20 flex h-auto flex-col justify-center px-8 py-20 text-center text-primary sm:px-28 sm:py-20 md:h-screen md:px-36 lg:px-28 xl:px-80 2xl:px-80">
          <div className="hidden">
            <Image
              src={gallery}
              alt="made in workshop"
              placeholder={"blur"}
              className=""
            />
          </div>
          <div className={"grid content-center  font-helvetica"}>
            <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-secondary">
              <Link href="/">
                <div>
                  Home
                  <span className="px-1">|</span>
                </div>
              </Link>
              <Link href="/about">
                <div className="text-primary">About</div>
              </Link>
            </div>
            <div>
              <h1
                className={
                  "py-1 text-center font-helvetica text-headings font-bold text-secondary"
                }
              >
                Where it all began
                <span className="leading-snug text-primary">.</span>
              </h1>
              <p
                className={
                  "text-center font-helvetica text-BodyText font-normal text-textColor"
                }
              >
                In 2016 Made In Workshop opened its doors with only a small
                laser cutter, 3D printers and miscellaneous hand tools and
                machines. As members came and went, Made In Workshop moulded a
                space that was not only an essential asset to our
                customers/members it was also their community.
                <br />
                <br />
                Made In Workshop is not just about the tools and machines and
                not just about the workspace,{" "}
                <span className="text-primary">
                  we&apos;re the spark of inspiration that is the culmination of
                  tools, machines, workspace and the community that we are
                  creating.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <TeamCarousel />
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};
export default About;
