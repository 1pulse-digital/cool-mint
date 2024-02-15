import React from "react";
import ButtonGroupWorkshops from "./buttonGroupWorkshops";
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


interface WorkshopProps {
  date: string;
  day: string;
  name: string;
  time: string;
  instructor: string;
  description: string;
  price: string;
  spotsLeft: string;
  bookLink: string;
  learnMoreLink: string;
}

const WorkshopItem: React.FC<WorkshopProps> = ({
  date,
  day,
  name,
  time,
  instructor,
  description,
  price,
  spotsLeft,
  bookLink,
  learnMoreLink,
}) => (
  <div className="flex font-helvetica space-x-8 text-sm py-6">
    <div className="font-helvetica text-secondary text-2xl font-bold">{day}</div>
    <div className="text-start">
      <p className="text-xl font-helvetica font-bold text-textColor">{name}</p>
      <div className="flex row space-x-4">
        <p className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
          {time}
        </p>
        <p className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
          {instructor}
        </p>
      </div>
      <p className="font-normal text-white py-2">{description}</p>
      <p className="font-bold text-primary text-start text-[16px] pt-4">{price}</p>
      <p className="text-secondary py-1">{spotsLeft}</p>
      <ButtonGroupWorkshops bookLink={bookLink} learnMoreLink={learnMoreLink} />
    </div>
  </div>
);

const UpcomingWorkshops: React.FC = () => {
  return (
    <div className="font-medium text-primary text-center md:text-left   py-14 bg-background">
<Tabs defaultValue="january woodwork">
  <div className="mx-8">
<TabsList className="grid w-full grid-cols-3 bg-[#27272A] text-secondary my-6">
        <TabsTrigger value="january woodwork" className="">Woodwork</TabsTrigger>
        <TabsTrigger value="february">Metalwork</TabsTrigger>
        <TabsTrigger value="march">Engineering</TabsTrigger>
      </TabsList>
      </div>
    <div className="pb-16">
    <Carousel className="mx-3 pt-3">
    <CarouselContent className="">
    <CarouselItem>
   
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="january woodwork" className="p-5">Jan</TabsTrigger>
        <TabsTrigger value="february"className="p-5">Feb</TabsTrigger>
        <TabsTrigger value="march"className="p-5">Mar</TabsTrigger>
        <TabsTrigger value="april"className="p-5">Apr</TabsTrigger>
        <TabsTrigger value="may"className="p-5">May</TabsTrigger>
      </TabsList>
      </CarouselItem>
      <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="june" className="p-5">Jun</TabsTrigger>
        <TabsTrigger value="july"className="p-5">Jul</TabsTrigger>
        <TabsTrigger value="august"className="p-5">Aug</TabsTrigger>
        <TabsTrigger value="september"className="p-5">Sep</TabsTrigger>
        <TabsTrigger value="october"className="p-5">Oct</TabsTrigger>
      </TabsList>
      </CarouselItem>
      <CarouselItem>
    <TabsList className="grid w-full grid-cols-5 bg-[#27272A] h-18  text-secondary ">
        <TabsTrigger value="november" className="p-5">Nov</TabsTrigger>
        <TabsTrigger value="december"className="p-5">Dec</TabsTrigger>
        <TabsTrigger value="january" className="p-5">Jan</TabsTrigger>
        <TabsTrigger value="february"className="p-5">Feb</TabsTrigger>
        <TabsTrigger value="march"className="p-5">Mar</TabsTrigger>
      </TabsList>
      </CarouselItem>
      </CarouselContent>
      </Carousel>
      </div>

      {/* January Workshops */}
      <TabsContent className="bg-background font-helvetica px-10" value="january woodwork" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">January</CardTitle>
        <WorkshopItem
        date="January"
        day="20"
        name="CNC Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica px-10" value="january metalwork" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">January</CardTitle>
        <WorkshopItem
        date="January"
        day="20"
        name="CNC Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividualt"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>


       {/* February Workshops */}
       <TabsContent className="bg-background font-helvetica px-10" value="february" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">February</CardTitle>
        <WorkshopItem
        date="february"
        day="02"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="february"
        day="16"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>


      {/* March Workshops */}
      <TabsContent className="bg-background font-helvetica px-10" value="march" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">March</CardTitle>
        <WorkshopItem
        date="march"
        day="05"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="march"
        day="17"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>


{/* April Workshops */}
<TabsContent className="bg-background font-helvetica px-10" value="april" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">April</CardTitle>
        <WorkshopItem
        date="april"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="april"
        day="18"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

    {/* May Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="may" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">May</CardTitle>
        <WorkshopItem
        date="may"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="may"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* June Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="june" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">June</CardTitle>
        <WorkshopItem
        date="june"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="june"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* July Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="july" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">July</CardTitle>
        <WorkshopItem
        date="july"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="july"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* August Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="august" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">August</CardTitle>
        <WorkshopItem
        date="august"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="august"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

 {/* September Workshops */}
       <TabsContent className="bg-background font-helvetica px-10" value="september" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">September</CardTitle>
        <WorkshopItem
        date="september"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="september"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* October Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="october" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">October</CardTitle>
        <WorkshopItem
        date="october"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="october"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* November Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="november" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">November</CardTitle>
        <WorkshopItem
        date="november"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="november"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

       {/* May Workshops */}
     <TabsContent className="bg-background font-helvetica px-10" value="december" >
        <Card className="bg-background border-0">
        <CardTitle className="text-primary text-start font-normal text-lg font-helvetica py-1">December</CardTitle>
        <WorkshopItem
        date="december"
        day="07"
        name="Cutter"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
      <WorkshopItem
        date="december"
        day="19"
        name="Workshop Name"
        time="3 hours"
        instructor="Henry Levine"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
        price="R1,500.00"
        spotsLeft="5 Spots Left"
        bookLink="/workshopIndividual"
        learnMoreLink="/workshopIndividual"
      />
    </Card>
      </TabsContent>

     
    </Tabs>
    </div>
  );
};

export default UpcomingWorkshops;
