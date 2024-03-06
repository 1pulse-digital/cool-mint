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
import HeaderTitle from "@/components/base/headerTitle";
import GetInTouch from "@/components/base/getInTouch";


const News = () => {
  return(
      <div className={"bg-background py-10"}>
        <div className={"grid content-center font-helvetica sm:p-10"}>
        <div className="text-xs text-secondary  font-helvetica font-normal inline-flex justify-center">
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
           {/* header title start */}
           <HeaderTitle title="News"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
      />
      {/* header title end */}
          <div className="py-8 text-center 2xl:mx-32 xl:mx-0 lg:mx-10 md:mx-0">
          <div className="px-2">
          <span className={"text-[12px] px-4 text-textColor text-center font-helvetica font-normal"}>
        Filter by
          </span>
    <Tabs defaultValue="news">
    <div className="pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
      <div className="2xl:px-96 px-8 sm:px-16 lg:px-60 md:px-40">
    <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-3 text-secondary">
        <TabsTrigger value="news" className="">News</TabsTrigger>
        <TabsTrigger value="diy">DIY</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      </div>
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>
<div className="w-full grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 space-x-1">
  <div>
      <TabsContent className="bg-background font-helvetica" value="news">
        <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/miw.webp"
        date="3 July 2022"
        author="Henry Levine"
        title="Does South African Manufacturing Have A Problem?"
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
        imageUrl="/icons/made-in-workshop-building-1.webp"
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
      <TabsContent className="bg-background font-helvetica" value="news">
    <Card className="bg-background border-0">
        <BlogWidget
        imageUrl="/icons/made-in-workshop-is-expanding.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Made In Workshop (MIW) Is Expanding Its Equipment Offered To Its Members."
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
        imageUrl="/icons/Small-Business-Showcase-Made-In-Workshop.png"
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
        imageUrl="/icons/Made-In-Workshop-at-your-door-step.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Made In Workshop – a manufacturing Mecca, right on your doorstep"
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
        imageUrl="/icons/MIW_tools_image.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Maker Space Movement in South Africa – 2020 and beyond"
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
        imageUrl="/icons/Makerspace-image.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Henry happens"
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
        imageUrl="/icons/A-Dover-Simulator-created-by-Brad-which-was-built-to-train-student-operators-on-the-mines.webp"
        date="3 January 2024"
        author="Parson Gapa"
        title="Want to be an industrial design success? Diversify, says Design For Industry’s Brad Johnston"
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
        title="Craig’s on fire!"
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
        imageUrl="/icons/The-CONCREAT-cutlery-set.webp"
        date="Second Date"
        author="Second Author"
        title="Getting creative with… concrete?"
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
        imageUrl="/icons/Niks-CNC-plotter-parts.webp"
        date="Second Date"
        author="Second Author"
        title="The curious, mathematical mind of Nik Ivanovic"
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
        imageUrl="/icons/Bettlebot-images.webp"
        date="Second Date"
        author="Second Author"
        title="The BeetleBot: the bug that teaches the basics of robotics"
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
        <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
     </div>
  );
};

export default News;