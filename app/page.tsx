import React from "react";
import Hero from "@/components/hero";
import { HeroImages } from "@/components/base/heroImages";
import { WhyUs } from "@/components/whyUs";

export const Home = () => {
  return (
  
  <div>
 <Hero /> 
 <HeroImages />
 <WhyUs />
</div>
    )
}
export default Home;