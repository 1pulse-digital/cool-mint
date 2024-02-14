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

export const BookTour = () => {
    return(
        <div className={"bg-background py-12"}>
        <div className={"grid content-center font-helvetaica  sm:p-10 md:max-w-prose px-6"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>Book a Tour</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
        </div>

        <Tabs defaultValue="monday">
    <div className="pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary">
        <TabsTrigger value="monday" className="p-5">Mon</TabsTrigger>
        <TabsTrigger value="tuesday"className="p-5">Tue</TabsTrigger>
        <TabsTrigger value="wednesday"className="p-5">Wed</TabsTrigger>
        <TabsTrigger value="thursday"className="p-5">Thu</TabsTrigger>
        <TabsTrigger value="friday"className="p-5">Fri</TabsTrigger>
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
    )
}

export default BookTour;