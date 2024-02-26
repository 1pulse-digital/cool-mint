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
    <div className="bg-background">
    <div className="px-8 font-helvetica lg:px-28">
      <div>
        <Hero />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <HeroImages />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <Offerings />
        <div className="">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
        <Community />
          <div>
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <div className="px-8 font-medium text-primary md:text-left">
        <div className="text-center pt-28">
          <h1 className="text-headings font-bold  text-secondary">
            Upcoming Workshops<span className="text-primary">.</span>
          </h1>
        <p className="text-BodyText font-normal text-textColor xl:px-40 2xl:px-52">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna.
      </p>
      </div>
      </div>
      </div>
      <UpcomingWorkshops />
    </div>
    </div>
  );
}
