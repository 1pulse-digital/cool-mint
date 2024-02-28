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
import HeaderTitle from "@/components/base/headerTitle";

const BookTour = () => {
    return(
        <div className={"bg-background lg:py-32"}>
          <div className="xl:mx-40 md:mx-16 lg:mx-2 sm:mx-20 2xl:pb-20">
        <div className={"grid content-center font-helvetaica px-6"}>
        <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/workshops">
           <div className="text-primary">Workshops</div>
          </Link>
          </div>


           {/* header title start */}
           <HeaderTitle title="Book a Tour"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
      />
      {/* header title end */}
          
        </div>
        <div className="lg:px-52 py-10">
        <Tabs defaultValue="monday">
    <div className="lg:pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18 text-secondary py-2">
        <TabsTrigger value="monday" className="p-5 ml-2">Jan</TabsTrigger>
        <TabsTrigger value="tuesday"className="p-5">Feb</TabsTrigger>
        <TabsTrigger value="wednesday"className="p-5">Mar</TabsTrigger>
        <TabsTrigger value="thursday"className="p-5">Apr</TabsTrigger>
        <TabsTrigger value="friday"className="p-5 mr-2">May</TabsTrigger>
      </TabsList>
      
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Monday</CardTitle>
        <Tour
        starttime="09:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

{/* Monday */}
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="10:00"
        endtime="10:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="11:00"
        endtime="11:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="12:00"
        endtime="12:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="13:00"
        endtime="13:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="14:00"
        endtime="14:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="15:00"
        endtime="15:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="16:00"
        endtime="16:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="17:00"
        endtime="17:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="monday">
        <Card className="bg-background border-0">
        <Tour
        starttime="18:00"
        endtime="18:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>











      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <CardTitle className="text-primary px-8 font-helvetica py-6">Tuesday</CardTitle>
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
     </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="tuesday">
    <Card className="bg-background border-0">
    <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
     </Card>
      </TabsContent>



      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <CardTitle className="text-primary px-8 font-helvetica py-6">Wednesday</CardTitle>
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="wednesday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
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
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="thursday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
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
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
      /> 
    </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="friday">
        <Card className="bg-background border-0">
        <Tour
        starttime="08:00"
        endtime="09:30"
        linkUrl="/bookingConfirmation"
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