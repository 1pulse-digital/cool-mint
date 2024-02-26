import React from "react";
import { FAQAccordion } from "@/components/base/faqAccordion";
import Tour from "@/components/base/tour";
import BlogWidget from "@/components/detailed/blogWidget";
import Button from "@/components/base/button";
import Link from "next/link";
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
import GetInTouch from "@/components/base/getInTouch";

const BookTour = () => {
    return(
        <div className={"bg-background lg:py-32"}>
          <div className="2xl:mx-60 xl:mx-40  md:mx-32 lg:mx-2 sm:mx-20 px-8 2xl:pb-20">
        <div className={"grid content-center font-helvetaica px-6"}>
        <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/news">
           <div className="text-primary">Workshops</div>
          </Link>
          </div>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>Book a Tour<span className="text-primary">.</span></h1>
          <span className={"text-BodyText text-textColor text-center font-helvetica font-light 2xl:px-52 lg:px-40"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </span>
        </div>
        <div className="lg:px-52 py-10">
        <Tabs defaultValue="monday">
    <div className="lg:pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18 text-secondary py-2">
        <TabsTrigger value="monday" className="p-5 ml-2">Mon</TabsTrigger>
        <TabsTrigger value="tuesday"className="p-5">Tue</TabsTrigger>
        <TabsTrigger value="wednesday"className="p-5">Wed</TabsTrigger>
        <TabsTrigger value="thursday"className="p-5">Thu</TabsTrigger>
        <TabsTrigger value="friday"className="p-5 mr-2">Fri</TabsTrigger>
      </TabsList>
      
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Monday</CardTitle>
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>

{/* Monday */}
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <CardTitle className="text-primary px-8 font-helvetica py-6">Tuesday</CardTitle>
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>



      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Wednesday</CardTitle>
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
{/* Thursday */}
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Thursday</CardTitle>
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
{/* 
friday */}
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Friday</CardTitle>
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/newsTitle"
      /> 
    </Card>
      </TabsContent>
    </Tabs>
    </div>
    </div>
     </div>
    )
}

export default BookTour;