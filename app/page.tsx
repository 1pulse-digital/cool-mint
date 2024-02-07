import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";
import { Community } from "@/components/community";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import GetInTouch from "@/components/base/getInTouch";
import Offerings from "@/components/offerings";
//import { MeetTheTeam } from "@/components/base/meetTheTeam";

export const Home = () => {
  return (
<div>
 <Hero /> 
 <HeroImages />
 <WhyUs />             
 <Offerings />
 <Community />
 <div className="font-medium text-primary text-center md:text-left px-8   bg-background">
      <h1 className={"text-headings text-secondary font-helvetica font-bold  text-start"}>Upcoming</h1>
      <h1 className={"text-headings text-secondary font-helvetica font-bold pl-16 text-center"}>Workshops<span className="text-primary">.</span></h1>
      </div>
 <UpcomingWorkshops />
 
 <GetInTouch />

</div>
  )
}
export default Home;