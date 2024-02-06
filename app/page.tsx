import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";
import { Community } from "@/components/community";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";


export const Home = () => {
  return (
<div>
 <Hero /> 
 <HeroImages />
 <WhyUs />
 <Community />
 <UpcomingWorkshops />
</div>
  )
}
export default Home;