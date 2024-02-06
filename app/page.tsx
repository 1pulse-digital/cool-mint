import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";
import { Community } from "@/components/community";

export const Home = () => {
  return (
<div>
 <Hero /> 
 <HeroImages />
 <WhyUs />
 <Community />
</div>
  )
}
export default Home;