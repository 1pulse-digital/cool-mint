import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";
import { Community } from "@/components/community";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import GetInTouch from "@/components/base/getInTouch";
import Offerings from "@/components/offerings";

export default function Home() {
  return (
    <div className="bg-background px-8 font-helvetica lg:px-32 ">
      <div>
        <Hero />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <HeroImages />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        {/* <WhyUs /> */}
        <Offerings />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <Community />


          <div className="">
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <UpcomingWorkshops />

      </div>
      <GetInTouch />
    </div>
  );
}
