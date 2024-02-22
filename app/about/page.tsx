import React from "react";
import Image from "next/image";
import gallery from "/images/banner.webp";
import GetInTouch from "@/components/base/getInTouch";
import { TeamCarousel } from "@/components/base/teamCarousel";
import Link from "next/link";

 const About = () => {
  return (
    <div className="bg-background font-helvetica lg:px-32">
      <div className="relative -mt-20 flex flex-col  justify-center lg:h-screen h-auto py-20 px-8 text-center  text-primary">
      <div className="hidden">
        <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className=""
        />
      </div>
      <div
        className={
          "grid content-center  font-helvetica "
        }
      > <div className="text-xs text-secondary  font-helvetica font-normal inline-flex justify-center">
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
    <div className="lg:mx-80">
        <h1
          className={
            "py-4 text-center font-helvetica text-headings font-bold text-secondary"
          }
        >
          Where it all began<span className="text-primary">.</span>
        </h1>
        <p
          className={
            "text-textColor text-center font-helvetica text-BodyText font-normal"
          }
        >
          In 2016 Made In Workshop opened its doors with only a small laser cutter, 3D printers 
          and miscellaneous hand tools and machines. As members came and went, 
          Made In Workshop moulded a space that was not only an essential asset 
          to our customers/members it was also their community.
          <br />
          <br />
          Made In Workshop is <span className="text-primary">not just about the tools</span> and <span className="text-primary">machines </span>and not just about
           the <span className="text-primary">workspace</span>, we’re the spark of inspiration that is the culmination 
           of tools, machines, workspace and the community that we are creating.
        </p>
      </div>
      
      </div>
      
         </div>
         <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
      <TeamCarousel />
      <GetInTouch />
    
    </div>
  );
};
export default About;
