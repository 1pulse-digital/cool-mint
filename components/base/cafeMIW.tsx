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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


export function CafeMIW() {
  return (
    <div>
    <Tabs defaultValue="machines">
    <div className="pb-16">
    <Carousel className="mx-6 pt-6">
    <CarouselContent className="">
    <CarouselItem>
      <TabsList className="bg-background space-x-2">
        
        <TabsTrigger value="machines"><div className="pt-8">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
        <TabsTrigger value="workshops"><div className="pt-8">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
        <TabsTrigger value="general"><div className="pt-8">
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
        <div className="bg-[#2c3033] rounded-xl ">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
           </div>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="workshops">
        <Card className="bg-background border-0">
        <div className="bg-[#2c3033] rounded-xl">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
           </div>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="general">
      <Card className="bg-background border-0">
        <div className="bg-[#2c3033] rounded-xl">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
           </div>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    
  
  )
}
