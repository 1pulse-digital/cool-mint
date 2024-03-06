import { FilterButtons } from "@/components/base/filterButtons";
import GetInTouch from "@/components/base/getInTouch";
import IndividualWorkshop from "@/components/base/individualWorkshop";

import Link from "next/link";
import { FAQAccordion } from "@/components/base/faqAccordion";
import Tour from "@/components/base/tour";
import BlogWidget from "@/components/detailed/blogWidget";
import Button from "@/components/base/button";

import { Card, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import React from "react";
import { Classes } from "@/components/base/classes";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import ClassIndividual from "@/components/base/classIndividual";

const Workshops = () => { 
  return(
      <div className={"bg-background py-12"}>
      <div className={"grid content-center justify-center font-helvetica sm:p-10 px-8"}>
        <div className="text-xs text-secondary text-center justify-center font-helvetica font-normal inline-flex py-2">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/workshops">
          <div>Classes <span className="px-1">|</span>  </div>
          </Link>
          <Link href="/">
          <div className="text-primary">Individual Class</div>
          </Link>
          </div>
          <div className="text-center ">
            <Classes />         
          </div>
          </div>
          <div className="lg:mx-40">
     <ClassIndividual />
 
    </div>
     </div>
  );
};

export default Workshops;