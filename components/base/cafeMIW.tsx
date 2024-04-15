import * as React from "react";
import Image, { StaticImageData } from "next/image";
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

interface CafeItem {
  name: string;
  alt: string;
  src: StaticImageData;
}

export function CafeMIW() {
  const items: CafeItem[] = [
    {
      name: "sandwich",
      alt: "Cheese-&-Tomato-Sandwich",
      src: sandwich,
    },

    {
      name: "chips",
      alt: "Chips-and-Sandwich",
      src: chips,
    },

    {
      name: "coffee",
      alt: "Cups-of-Coffee",
      src: coffee,
    },

    {
      name: "bacon",
      alt: "Egg,-Bacon-and-Cheese-Sandwich",
      src: bacon,
    },

    {
      name: "cheese",
      alt: "Ham-and-Cheese-Sandwich",
      src: cheese,
    },

    {
      name: "plateofchips",
      alt: "Plate-of-Chips",
      src: plateofchips,
    },
  ];

  return (
    <div className="grid items-center justify-center sm:px-16 md:px-20 xl:mx-20">
      <Tabs defaultValue="sandwich">
        <div className="pb-8">
          <Carousel className="mx-6 pt-0">
            <CarouselContent className="">
              <CarouselItem>
                <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                  {items.slice(0, 3).map((item, index) => (
                    <TabsTrigger key={index} value={item.name}>
                      <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="rounded-lg"
                          width="400"
                          height="400"
                        />
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </CarouselItem>

              <CarouselItem>
                <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                  {items.slice(-3).map((item, index) => (
                    <TabsTrigger key={index} value={item.name}>
                      <div className="pt-28 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="rounded-lg"
                          width="400"
                          height="400"
                        />
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex justify-center">
          {items.map((item, index) => (
            <TabsContent
              className="bg-background font-helvetica"
              value={item.name}
              key={index}
            >
              <Card className="border-0 bg-background">
                <div className="rounded-xl bg-[#2c3033]">
                  <div className="rounded-md">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
