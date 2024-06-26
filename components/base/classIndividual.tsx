
import React, { useState } from 'react';
import ButtonGroupWorkshops from "./buttonGroupWorkshops";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClassProps {
  date: string;
  day: string;
  name: string;
  time: string;
 
  description: string;
  price: string;
  spotsLeft: string;
  bookLink: string;
  // learnMoreLink: string;
}

const ClassItem: React.FC<ClassProps> = ({
  date,
  day,
  name,
  time,

  description,
  price,
  spotsLeft,
  bookLink,
  // learnMoreLink,
}) => (
  <div className="flex space-x-4 text-sm  w-full  justify-center">
    <span className="text-2xl font-bold text-foreground">{day}</span>
    <div className="text-start">
      <div className="md:flex ">
        <div className="pr-8 ">
          <div className=" flex flex-row flex-wrap w-full">
            <div className="text-xl font-bold text-muted-foreground ">{name}</div>
            <div className="pt-4 lg:block w-full pb-2">
              <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
            </div>
          </div>
          <div className="row flex space-x-4 ">
            <p className="inline-flex items-center py-1 text-xs text-foreground">
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
            </p>
          </div>
          <p className="py-2 font-normal text-white">{description}</p>
        </div>
        <div>
          
          <ButtonGroupWorkshops
            bookLink={bookLink}
            // learnMoreLink={learnMoreLink}
          />
          <p className="text-start text-[16px] font-bold text-primary lg:pt-0">
            {price}
          </p>
          <p className=" text-foreground">{spotsLeft}</p>
        </div>
      </div>
    </div>
  </div>
);

const ClassIndividual: React.FC = () => {
  
  return (
    <div id="book">
    <div className="py-8 sm:py-0 text-center font-medium text-primary">
      <Tabs defaultValue="january">
        <div>
          <div className="pb-10 2xl:px-56 xl:px-40  mx-2 sm:px-4">
            <Carousel className="mx-3 pt-3">
              <CarouselContent className="">
                <CarouselItem>
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A]  px-2 py-2 text-foreground">
                    <TabsTrigger value="january" className="p-5">
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
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2  text-foreground">
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
                  <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2 text-foreground">
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
    <div className="xl:px-40 2xl:px-60 px-0">
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="january"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">January
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 10th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
             // learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="february"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">February
            </CardTitle>
            <ClassItem
              date="february"
              day=""
              name="Saturday, 2nd"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
             // learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>
        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="march"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">March
            </CardTitle>
            <ClassItem
              date="february"
              day=""
              name="Saturday, 5th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
             // learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="april"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
              April
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="may"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">May
            </CardTitle>
            <ClassItem
              date="february"
              day=""
              name="Saturday, 20th"
              time="10:00 - 13:00pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
             // learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="june"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            June
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="july"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            July
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="august"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            August
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="september"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            September
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>


        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="october"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            October
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="november"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            November
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background px-10 font-helvetica"
          value="december"
        >
          <Card className="border-0 bg-background">
            <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
            December
            </CardTitle>
            <ClassItem
              date="January"
              day=""
              name="Saturday, 25th"
              time="10:00 - 10:30pm"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard."
              price=""
              spotsLeft="5 Spots Left"
              bookLink="/cart"
              //learnMoreLink="/workshopIndividual"
            />
          </Card>
        </TabsContent>


       
        </div>
      </Tabs>
    </div>
    </div>
  );
};

export default ClassIndividual;
