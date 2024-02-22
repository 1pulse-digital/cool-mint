import * as React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TeamCarousel() {
  return (
    <div>
      <div className="py-20 grid items-center justify-center md:px-32 sm:px-16 h-auto px-8">
      <h1 className={"text-headings text-secondary font-helvetica font-bold pb-16  text-center"}>Meet the Team<span className="text-primary">.</span></h1>
      
        <Tabs defaultValue="machines" className="">
           <div className="pb-16 2xl:mx-60">
            <Carousel className="mx-10">
              <CarouselContent className="">
                <CarouselItem>
                  <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                    <TabsTrigger value="machines">
                      <div className="sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80 pt-10 ">
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
                      <div className="sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80 pt-10">
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
                      <div className="sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80 pt-10">
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
          <TabsContent
            className="bg-background font-helvetica"
            value="machines"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033] xl:mx-28 2xl:mx-80 2xl:grid-cols-1">
                <div className="rounded-md ">
                  <Image
                    src={gallery}
                    alt="team member"
                    placeholder={"blur"}
                    className="rounded-t-lg"
                  />
                </div>
                <div
                  className={
                    "grid content-center bg-[#2c3033] p-5 py-8  font-helvetica sm:p-10 2xl:p-20"
                  }
                >
                  <h3
                    className={
                      "text-start font-helvetica text-BodyText font-semibold text-textColor"
                    }
                  >
                    Name: Peter
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Position
                  </span>
                  <span
                    className={
                      "text-start font-helvetica text-BodyText text-sm font-normal text-textColor"
                    }
                  >
                    Dummy text is text that is used in the publishing industry
                    or by web designers to occupy the space which will later be
                    filled with real content. This is required when, for
                    example, the final text is not yet available. Dummy text is
                    also known as fill text. It is said that song composers of
                    the past used dummy texts as lyrics when writing melodies in
                    order to have a ready-made text to sing with the melody.
                    Dummy texts have been in use by typesetters since the 16th
                    century.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            className="bg-background font-helvetica"
            value="workshops"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033] 2xl:mx-60 2xl:grid-cols-1">
                <div className="rounded-md">
                  <Image
                    src={gallery}
                    alt="team member"
                    placeholder={"blur"}
                    className="rounded-t-lg"
                  />
                </div>
                <div
                  className={
                    "grid content-center p-5 py-8 font-helvetica 2xl:p-20"
                  }
                >
                  <h3
                    className={
                      "text-start font-helvetica text-BodyText font-semibold text-textColor"
                    }
                  >
                    Name: Joshua
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Position
                  </span>
                  <span
                    className={
                      "text-start font-helvetica text-BodyText text-sm font-normal text-textColor"
                    }
                  >
                    Dummy text is text that is used in the publishing industry
                    or by web designers to occupy the space which will later be
                    filled with real content. This is required when, for
                    example, the final text is not yet available. Dummy text is
                    also known as fill text. It is said that song composers of
                    the past used dummy texts as lyrics when writing melodies in
                    order to have a ready-made text to sing with the melody.
                    Dummy texts have been in use by typesetters since the 16th
                    century.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent className="bg-background font-helvetica" value="general">
            <Card className="border-0 bg-background">
              <div className="rounded-xl bg-[#2c3033] 2xl:mx-60 2xl:grid-cols-1">
                <div className="rounded-md">
                  <Image
                    src={gallery}
                    alt="team member"
                    placeholder={"blur"}
                    className="rounded-t-lg"
                  />
                </div>
                <div
                  className={
                    "grid content-center p-5 py-8 font-helvetica 2xl:p-20"
                  }
                >
                  <h3
                    className={
                      "text-start font-helvetica text-BodyText font-semibold text-textColor"
                    }
                  >
                    Name: Jack
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Position
                  </span>
                  <span
                    className={
                      "text-start font-helvetica text-BodyText text-sm font-normal text-textColor"
                    }
                  >
                    Dummy text is text that is used in the publishing industry
                    or by web designers to occupy the space which will later be
                    filled with real content. This is required when, for
                    example, the final text is not yet available. Dummy text is
                    also known as fill text. It is said that song composers of
                    the past used dummy texts as lyrics when writing melodies in
                    order to have a ready-made text to sing with the melody.
                    Dummy texts have been in use by typesetters since the 16th
                    century.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
