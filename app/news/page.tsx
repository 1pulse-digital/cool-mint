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

const News = () => {
  return(
      <div className={"bg-background"}>
        <div className={"grid content-center font-helvetica p-5 sm:p-10 "}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>News</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
          <div className="py-8 text-center ">
          <div>
          <p className={"text-[12px] px-4 text-textColor text-start font-helvetica font-normal"}>
        Filter by
          </p>
    <Tabs defaultValue="news">
    <div className="pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="grid w-full grid-cols-3 bg-[#27272A] text-secondary">
        <TabsTrigger value="news" className="">News</TabsTrigger>
        <TabsTrigger value="diy">DIY</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>

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

      <TabsContent className="bg-background font-helvetica" value="events">
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
    </Tabs>
    </div>
          </div>
          <div className="text-center">
            <Link href="/">
            <Button color={"primary"}>Learn More</Button>
            </Link>
            </div>
        </div>
       
        
     </div>
  );
};

export default News;