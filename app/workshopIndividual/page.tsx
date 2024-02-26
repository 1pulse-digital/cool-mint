import { FilterButtons } from "@/components/base/filterButtons";
import GetInTouch from "@/components/base/getInTouch";
import IndividualWorkshop from "@/components/base/individualWorkshop";
import IndividualWorkshops from "@/components/base/individualWorkshop";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
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

const Workshops = () => {
  return(
      <div className={"bg-background py-12"}>
        <div className={"grid content-center font-helvetica sm:p-10 md:max-w-prose px-8"}>
          <div className="text-xs text-secondary text-start font-helvetica font-light inline-flex">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/workshops">
          <div>Workshops <span className="px-1">|</span>  </div>
          </Link>
          <Link href="/">
          <div className="text-primary">Individual Workshops</div>
          </Link>
          </div>
         
          </div>
          <div>
            <Classes />
          </div>
          <Tabs defaultValue="january">
  <div className="mx-8">
      </div>
    <div className="pb-8">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="january" className="p-5">Jan</TabsTrigger>
        <TabsTrigger value="february"className="p-5">Feb</TabsTrigger>
        <TabsTrigger value="march"className="p-5">Mar</TabsTrigger>
        <TabsTrigger value="april"className="p-5">Apr</TabsTrigger>
        <TabsTrigger value="may"className="p-5">May</TabsTrigger>
      </TabsList>
      </CarouselItem>
      <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="june" className="p-5">Jun</TabsTrigger>
        <TabsTrigger value="july"className="p-5">Jul</TabsTrigger>
        <TabsTrigger value="august"className="p-5">Aug</TabsTrigger>
        <TabsTrigger value="september"className="p-5">Sep</TabsTrigger>
        <TabsTrigger value="october"className="p-5">Oct</TabsTrigger>
      </TabsList>
      </CarouselItem>
      <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="november" className="p-5">Nov</TabsTrigger>
        <TabsTrigger value="december"className="p-5">Dec</TabsTrigger>
        <TabsTrigger value="january" className="p-5">Jan</TabsTrigger>
        <TabsTrigger value="february"className="p-5">Feb</TabsTrigger>
        <TabsTrigger value="march"className="p-5">Mar</TabsTrigger>
      </TabsList>
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>

      {/* January Workshops */}
      <TabsContent className="bg-background font-helvetica" value="january">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">January</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="january">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* February Workshops */}
       <TabsContent className="bg-background font-helvetica" value="february">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">February</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="february">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="march">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">March</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="march">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="april">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">April</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="april">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="may">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">May</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="may">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="june">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">June</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="june">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="july">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">July</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="july">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="august">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">August</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="august">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="september">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">September</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="september">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="october">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">October</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="october">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="november">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">November</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="november">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

       {/* January Workshops */}
       <TabsContent className="bg-background font-helvetica" value="december">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1 px-8">December</CardTitle>
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="december">
        <Card className="bg-background border-0">
        <IndividualWorkshop starttime={"09:00"} endtime={"13:00pm"} linkUrl={"tt"} day={"Saturday, 7th"} spotsleft={"5 Spots Left"} />
    </Card>
      </TabsContent>
    </Tabs>
     </div>
  );
};

export default Workshops;