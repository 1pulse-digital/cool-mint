import * as React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";
import craig from "../../images/craig.webp";

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
      <Tabs defaultValue="machines">
        <div className="pb-8">
          <Carousel className="mx-6 pt-0">
            <CarouselContent className="">
              <CarouselItem>
                <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                  <TabsTrigger value="machines">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={gallery}
                        alt="team member"
                        placeholder={"blur"}
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="workshops">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={gallery}
                        alt="team member"
                        placeholder={"blur"}
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="general">
                    <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                      <Image
                        src={gallery}
                        alt="team member"
                        placeholder={"blur"}
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
            value="machines"
          >
            <Card className="border-0 bg-background">
              <div className=" rounded-xl ">
                <div className="rounded-md">
                  <Image
                    src={gallery}
                    alt="team member"
                    placeholder={"blur"}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            className="bg-background font-helvetica"
            value="workshops"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-lg">
                  <Image
                    src={craig}
                    alt="team member"
                    placeholder={"blur"}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent className="bg-background font-helvetica" value="general">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033]">
                <div className="rounded-md">
                  <Image
                    src={gallery}
                    alt="team member"
                    placeholder={"blur"}
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
