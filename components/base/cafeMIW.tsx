import * as React from "react";
import Image from "next/image";
import sandwich from "../../images/cafe/Cheese-&-Tomato-Sandwich.jpg";
import chips from "../../images/cafe/Chips-and-Sandwich.jpg";
import coffee from "../../images/cafe/Cups-of-Coffee.jpg";
import bacon from "../../images/cafe/Egg,-Bacon-and-Cheese-Sandwich.jpg";
import cheese from "../../images/cafe/Ham-and-Cheese-Sandwich.jpg";
import plateofchips from "../../images/cafe/Plate-of-Chips.jpg";


import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CafeMIW() {
  return (
    <div className="grid items-center justify-center sm:px-16 md:px-20 xl:mx-20">
      <Tabs defaultValue="sandwich">
        <div className="pb-8">
          <Carousel className="mx-6 pt-0">
            <CarouselContent className="">
              <CarouselItem>
                <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                  <TabsTrigger value="sandwich">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={sandwich}
                        alt="Cheese-&-Tomato-Sandwich"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="chips">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={chips}
                        alt="Chips-and-Sandwich"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="coffee">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={coffee}
                        alt="Cups-of-Coffee"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                </TabsList>
              </CarouselItem>

              <CarouselItem>
                <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                  <TabsTrigger value="bacon">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={bacon}
                        alt="Egg,-Bacon-and-Cheese-Sandwich"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="cheese">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={cheese}
                        alt="Ham-and-Cheese-Sandwich"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="plateofchips">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={plateofchips}
                        alt="Plate-of-Chips"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                </TabsList>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex justify-center">
          <TabsContent
            className="bg-background font-helvetica"
            value="sandwich"
          >
            <Card className="border-0 bg-background">
              <div className=" rounded-xl ">
                <div className="rounded-md">
                  <Image
                    src={sandwich}
                    alt="Chips-and-Sandwich"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            className="bg-background font-helvetica"
            value="chips"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-lg">
                  <Image
                    src={chips}
                    alt="Chips-and-Sandwich"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent className="bg-background font-helvetica" value="coffee">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-md">
                  <Image
                    src={coffee}
                    alt="Cups-of-Coffee"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent className="bg-background font-helvetica" value="cheese">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-md">
                  <Image
                    src={cheese}
                    alt="Ham-and-Cheese-Sandwich"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent className="bg-background font-helvetica" value="bacon">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-md">
                  <Image
                    src={bacon}
                    alt="Egg,-Bacon-and-Cheese-Sandwich"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent className="bg-background font-helvetica" value="plateofchips">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-md">
                  <Image
                    src={plateofchips}
                    alt="Plate-of-Chips"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
