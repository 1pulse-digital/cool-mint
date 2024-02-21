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
     <div className="2xl:px-28">
      <Hero />
      <HeroImages />
      <WhyUs />
      <Offerings />
      <Community />
      <div className="bg-background px-8 text-center font-medium text-primary md:text-left">
        <div className="lg:flex lg:justify-center space-x-4">
        <h1 className="text-start font-helvetica text-headings font-bold  text-secondary">
          Upcoming
        </h1>
        <h1 className="lg:pl-0 pl-16 text-center font-helvetica text-headings font-bold text-secondary">
          Workshops<span className="text-primary">.</span>
        </h1>
        </div>
      </div>
      <div className="">
      <UpcomingWorkshops />
      </div>
    </div>
    <GetInTouch />
    </div>
  );
}
