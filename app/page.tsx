import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";
import { Community } from "@/components/community";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import GetInTouch from "@/components/base/getInTouch";
import Offerings from "@/components/offerings";


export const Home = () => {
  return (
<div>
 <Hero /> 
 <HeroImages />
 <WhyUs />
 <Offerings />
 <Community />
 <UpcomingWorkshops />
 <GetInTouch />
</div>
  )
}
export default Home;