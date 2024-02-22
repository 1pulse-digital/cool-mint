import React from "react";
import BlogWidget from "@/components/detailed/blogWidget";
import Button from "@/components/base/button";
import Link from "next/link";
import { Card } from "@/components/ui/card"
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

const News = () => {
  return(
      <div className={"bg-background"}>
        <div className={"grid content-center font-helvetica p-5 sm:p-10 2xl:mx-60 xl:mx-32 lg:mx-10 md:mx-10"}>
        <div className="text-xs text-secondary  font-helvetica font-light inline-flex justify-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/news">
          <div className="text-primary">News</div>
          </Link>
          </div>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>News<span className="text-primary">.</span></h1>
          <span className={"text-BodyText text-textColor text-center font-helvetica font-light 2xl:px-60 lg:pb-16 sm:px-16 lg:px-60"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </span>
          <div className="py-8 text-center ">
          <div>
          <span className={"text-[12px] px-4 text-textColor text-center font-helvetica font-normal"}>
        Filter by
          </span>
    <Tabs defaultValue="news">
    <div className="pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
      <div className="2xl:px-72 px-8 sm:px-16 lg:px-60 md:px-28">
    <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-3 text-secondary ">
        <TabsTrigger value="news" className="">News</TabsTrigger>
        <TabsTrigger value="diy">DIY</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      </div>
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>
<div className=" w-full grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 space-x-1">
  <div>
      <TabsContent className="bg-background font-helvetica" value="news">
        <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/miw.webp"
        date="3 July 2022"
        author="Henry Levine"
        title="Article title that can go onto 2 Lines for 3"
        categories={["Machines", "General"]}
        linkUrl="/newsTitle"
      />
    </Card>
      </TabsContent>
      </div>

      <div>
      <TabsContent className="bg-background font-helvetica" value="news">
    <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/craig.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Small business showcase: Made in workshop"
        categories={["News", "Workshops"]}
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      </div>
      <div>
      <TabsContent className="bg-background font-helvetica" value="news">
    <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/banner.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Made In Workshop Is The Largest DIY Workshop And Makerspace In South Africa"
        categories={["News", "Workshops"]}
        linkUrl="/newsTitle"
      /> 
     </Card>
      </TabsContent>
      </div>


      <div>
      <TabsContent className="bg-background font-helvetica" value="events">
        <Card className="bg-background border-0">
       <BlogWidget
        imageUrl="/icons/craig.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Made in Workshop"
        categories={["News", "Workshops"]}
        linkUrl="/newsTitle"
      />
    </Card>
      </TabsContent>
      </div>

      <div>
      <TabsContent className="bg-background font-helvetica" value="diy">
      <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/banner.webp"
        date="Second Date"
        author="Second Author"
        title="Made In Workshop Is The Largest DIY Workshop And Makerspace In South Africa"
        categories={["Workshops", "News"]}
        linkUrl="/newsTitle"
      />
        </Card>
      </TabsContent>
      </div>
      <div>
      <TabsContent className="bg-background font-helvetica" value="diy">
      <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/banner.webp"
        date="Second Date"
        author="Second Author"
        title="Made In Workshop Is The Largest DIY Workshop And Makerspace In South Africa"
        categories={["Workshops", "News"]}
        linkUrl="/newsTitle"
      />
        </Card>
      </TabsContent>
      </div>
      </div>
    </Tabs>
    </div>
          </div>
          <div className="text-center lg:py-20 md:py-10 sm:py-8 py-6">
            <Link href="/">
            <Button color={"primary"}>Learn More</Button>
            </Link>
            </div>
        </div>
        <GetInTouch />
     </div>
  );
};

export default News;