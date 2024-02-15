import * as React from "react"
import Image from 'next/image'
import gallery from "../../images/banner.webp"
import craig from "../../images/craig.webp"


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


export function Classes() {
  return (
    <div>
    <Tabs defaultValue="class1">
    <div className="">
    <Carousel className="mx-16 pt-6">
    <CarouselContent className="">
    <CarouselItem>
      <TabsList className="bg-background">
        <TabsTrigger value="class2"><div className="pt-52">
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
      <CarouselItem>
      <TabsList className="bg-background">
        
        <TabsTrigger value="class2"><div className="pt-52">
            <Image
             src={craig}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div></TabsTrigger>
      </TabsList>
      </CarouselItem>
      <CarouselItem>
      <TabsList className="bg-background">
        
        <TabsTrigger value="class3"><div className="pt-52">
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width="400"
             height="400"
           /></div>
           
           </TabsTrigger>
           
      </TabsList>
      
      </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
      </div>
      <TabsContent className="bg-background font-helvetica" value="class1">
        <Card className="bg-background border-0">
        <div className={"grid content-center font-helvetica mx-8 py-8"}>

<h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Class Name</h3>
<div className="flex row space-x-4">
        <p className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
          3 hours
        </p>
        <p className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
        Henry Levine
        </p>
      </div>
<p className="text-primary font-helvetica text-md font-bold pt-8">R1,500.00</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal"}>Max 6 pax per session</p>
<p className={"text-BodyText text-secondary text-start text-sm font-helvetica font-normal pt-8"}>
Dummy text is text that is used in the publishing industry or by web designers
 to occupy the space which will later be filled with 'real' content. This is required when, 
 for example, the final text is not yet available. Dummy text is also known as 'fill text'.
  It is said that song composers of the past used dummy texts as lyrics when writing 
  melodies in order to have a 
'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters
 since the 16th century.
</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal pt-6"}>*Please note that this class is not a tradesman qualification.</p>
</div>
        </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica" value="class2">
        <Card className="bg-background border-0">
        <div className={"grid content-center font-helvetica mx-8 py-8"}>

<h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>CNC Cutter</h3>
<div className="flex row space-x-4">
        <p className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
          3 hours
        </p>
        <p className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
        Henry Levine
        </p>
      </div>
<p className="text-primary font-helvetica text-md font-bold pt-8">R1,500.00</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal"}>Max 6 pax per session</p>
<p className={"text-BodyText text-secondary text-start text-sm font-helvetica font-normal pt-8"}>
Dummy text is text that is used in the publishing industry or by web designers
 to occupy the space which will later be filled with 'real' content. This is required when, 
 for example, the final text is not yet available. Dummy text is also known as 'fill text'.
</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal pt-6"}>*Please note that this class is not a tradesman qualification.</p>
</div>
        </Card>
      </TabsContent>


      <TabsContent className="bg-background font-helvetica" value="class3">
        <Card className="bg-background border-0">
        <div className={"grid content-center font-helvetica mx-8 py-8"}>

<h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Class</h3>
<div className="flex row space-x-4">
        <p className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
          3 hours
        </p>
        <p className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
        Henry Levine
        </p>
      </div>
<p className="text-primary font-helvetica text-md font-bold pt-8">R1,500.00</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal"}>Max 6 pax per session</p>
<p className={"text-BodyText text-secondary text-start text-sm font-helvetica font-normal pt-8"}>
Dummy text is text that is used in the publishing industry or by web designers
 to occupy the space which will later be filled with 'real' content. This is required when, 
 for example, the final text is not yet available. Dummy text is also known as 'fill text'.
  It is said that song composers of the past used dummy texts as lyrics when writing 
  melodies in order to have a.
</p>
<p className={"text-[12px] text-secondary text-start font-helvetica font-normal pt-6"}>*Please note that this class is not a tradesman qualification.</p>
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
