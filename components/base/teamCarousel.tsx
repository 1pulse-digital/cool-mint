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
    <div className="mb-14">
    <div className="">
    <Tabs defaultValue="machines" className="">
    <div className="pb-16">
    <Carousel className="mx-16 pt-6">
    <CarouselContent className="">
    <CarouselItem>
      <TabsList className="bg-background">
        
        <TabsTrigger value="machines"><div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"300"}
             height="300"
           /></div></TabsTrigger>
        <TabsTrigger value="workshops"><div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"300"}
             height="300"
           /></div></TabsTrigger>
        <TabsTrigger value="general"><div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"300"}
             height="300"
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
        <div className="bg-[#2c3033] rounded-xl mx-6">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Peter</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
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
        <div className="bg-[#2c3033] rounded-xl mx-6">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Joshua</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
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
        <div className="bg-[#2c3033] rounded-xl mx-6">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Name: Jack</h3>
             <p className="text-primary font-helvetica text-sm py-2 pb-6">Position</p>
             <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
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
