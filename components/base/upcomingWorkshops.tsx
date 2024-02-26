import React from "react";
import ButtonGroupWorkshops from "./buttonGroupWorkshops";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  <div className="flex space-x-4 py-6 text-sm  w-full  justify-center">
    <span className=" text-2xl font-bold text-secondary">{day}</span>
    <div className="text-start ">
      <div className="md:flex ">
        <div className="pr-8 ">
          <div className=" flex flex-row flex-wrap w-full">
            <div className="text-xl font-bold text-textColor ">{name}</div>
            <div className="pt-4 lg:block w-full pb-2">
              <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
            </div>
          </div>
          <div className="row flex space-x-4 ">
            <span className="inline-flex items-center py-1 text-xs text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {time}
            </span>
            <span className="inline-flex py-1 text-xs text-secondary ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              {instructor}
            </span>
          </div>
          <span className="py-2 font-normal text-white">{description}</span>
        </div>
        <div className="">
          <p className="pt-4 text-start text-[16px] font-bold text-primary lg:pt-0">
            {price}
          </p>
          <span className="py-1 text-secondary">{spotsLeft}</span>
          <ButtonGroupWorkshops
            bookLink={bookLink}
            learnMoreLink={learnMoreLink}
          />
        </div>
      </div>
    </div>
  </div>
);

const UpcomingWorkshops: React.FC = () => {
  return (
    <div className="py-14 text-center font-medium text-primary">
      <Tabs defaultValue="january woodwork">
        <div className="mt-10">

          {/* Filtering by category */}
          
          <div className="lg:px-60 md:px-28 mx-8">
            <TabsList className="my-6 grid w-full grid-cols-3 bg-[#27272A] px-2 text-secondary">
              <TabsTrigger value="january woodwork" className="">
                Woodwork
              </TabsTrigger>
              <TabsTrigger value="february">Metalwork</TabsTrigger>
              <TabsTrigger value="march">Engineering</TabsTrigger>
            </TabsList>
          </div>

                    {/* Filtering by month */}

          <div className="pb-16">
            <Carousel className="mx-3 pt-3">
              <CarouselContent className="">
                <CarouselItem>
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A]  px-2 py-2 text-secondary">
                    <TabsTrigger value="january woodwork" className="p-5">
                      Jan
                    </TabsTrigger>
                    <TabsTrigger value="february" className="p-5">
                      Feb
                    </TabsTrigger>
                    <TabsTrigger value="march" className="p-5">
                      Mar
                    </TabsTrigger>
                    <TabsTrigger value="april" className="p-5">
                      Apr
                    </TabsTrigger>
                    <TabsTrigger value="may" className="p-5">
                      May
                    </TabsTrigger>
                  </TabsList>
                </CarouselItem>
                <CarouselItem>
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2  text-secondary">
                    <TabsTrigger value="june" className="p-5">
                      Jun
                    </TabsTrigger>
                    <TabsTrigger value="july" className="p-5">
                      Jul
                    </TabsTrigger>
                    <TabsTrigger value="august" className="p-5">
                      Aug
                    </TabsTrigger>
                    <TabsTrigger value="september" className="p-5">
                      Sep
                    </TabsTrigger>
                    <TabsTrigger value="october" className="p-5">
                      Oct
                    </TabsTrigger>
                  </TabsList>
                </CarouselItem>
                <CarouselItem>
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2 text-secondary">
                    <TabsTrigger value="november" className="p-5">
                      Nov
                    </TabsTrigger>
                    <TabsTrigger value="december" className="p-5">
                      Dec
                    </TabsTrigger>
                    <TabsTrigger value="january" className="p-5">
                      Jan
                    </TabsTrigger>
                    <TabsTrigger value="february" className="p-5">
                      Feb
                    </TabsTrigger>
                    <TabsTrigger value="march" className="p-5">
                      Mar
                    </TabsTrigger>
                  </TabsList>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* January Workshops */}
    
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="january woodwork"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              January
            </CardTitle>
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


        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="january woodwork"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              January
            </CardTitle>
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

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="january metalwork"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              January
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="february"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              February
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="march"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              March
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="april"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              April
            </CardTitle>
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
        <TabsContent className="bg-background px-10 font-helvetica" value="may">
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              May
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="june"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              June
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="july"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              July
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="august"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              August
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="september"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              September
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="october"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              October
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="november"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              November
            </CardTitle>
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
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="december"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="py-1 text-start font-helvetica text-lg font-normal text-primary">
              December
            </CardTitle>
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
