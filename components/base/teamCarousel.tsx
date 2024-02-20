import * as React from "react"
import Image from 'next/image'
import gallery from "../../images/banner.webp"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
    
   
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"

export function TeamCarousel() {
  return (
    <div>
    <div className="px-40 sm:px-16 grid justify-center items-center md:px-28 xl:mx-20 mb-20">
    <Tabs defaultValue="machines" className="">
    <div className="pb-16 2xl:mx-80">
    <Carousel className="mx-6">
    <CarouselContent className="">
    <CarouselItem>
    <TabsList className="bg-background space-x-2 2xl:space-x-9 sm:space-x-4 md:space-x-6">
        
        <TabsTrigger value="machines">
          <div className=" 2xl:pt-80 sm:pt-32 md:pt-44 xl:pt-72 lg:pt-52">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
        <TabsTrigger value="workshops"><div className="pt-8 2xl:pt-80 sm:pt-32 md:pt-44 xl:pt-72 lg:pt-52">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
        <TabsTrigger value="general"><div className="pt-8 2xl:pt-80 sm:pt-32 md:pt-44 xl:pt-72 lg:pt-52">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
      </TabsList>
      </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
      </div>
      <TabsContent className="bg-background font-helvetica" value="machines">
        <Card className="bg-background border-0">
        <div className="bg-[#2c3033] 2xl:grid-cols-1 rounded-xl 2xl:mx-60">
        <div className="rounded-md "><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10  py-8 bg-[#2c3033] 2xl:p-20"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Peter</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-normal"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with 'real' content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as 'fill text'.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </p>
             </div>
           </div>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="workshops">
        <Card className="bg-background border-0">
        <div className="bg-[#2c3033] 2xl:grid-cols-1 rounded-xl 2xl:mx-60">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 py-8 2xl:p-20"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Joshua</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-normal"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with 'real' content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as 'fill text'.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </p>
             </div>
           </div>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="general">
      <Card className="bg-background border-0">
        <div className="bg-[#2c3033] 2xl:grid-cols-1 rounded-xl 2xl:mx-60">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 py-8 2xl:p-20"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Jack</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-normal"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with 'real' content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as 'fill text'.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </p>
             </div>
           </div>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </div>
  )
}
