import * as React from "react";
import Image from "next/image";
import henry from "../../images/Henry-Levine.webp";
import joshua from "../../images/Joshua-Lotter.webp";
import trenton from "../../images/Trenton-Carr.webp";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TeamCarousel() {
  return (
    <div>
      <div className="grid h-auto items-center justify-center px-8 sm:py-20 py-10 sm:px-16 md:px-20">
        <h1
          className={
            "pb-16 text-center font-helvetica text-headings font-bold text-secondary sm:pb-2"
          }
        >
          Meet the Team<span className="text-primary">.</span>
        </h1>

        <Tabs defaultValue="machines" className="">
          <div className="pb-16 2xl:mx-60">
            <Carousel className="mx-10">
              <CarouselContent className="">
                <CarouselItem>
                  <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                    <TabsTrigger value="machines">
                      <div className="pt-10 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80 ">
                        <Image
                          src={henry}
                          alt="team member"
                          placeholder={"blur"}
                          className="rounded-lg"
                          width="600"
                          height="600"
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="workshops">
                      <div className="pt-10 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                        <Image
                          src={joshua}
                          alt="team member"
                          placeholder={"blur"}
                          className="rounded-lg"
                          width="600"
                          height="600"
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="general">
                      <div className="pt-10 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                        <Image
                          src={trenton}
                          alt="team member"
                          placeholder={"blur"}
                          className="rounded-lg"
                          width="600"
                          height="600"
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
              <div className="bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 lg:rounded-l-lg">
                  <Image
                    src={henry}
                    alt="henry"
                    placeholder="blur"
                    className="h-full w-full object-cover lg:rounded-l-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Henry Levine
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    CEO
                  </span>
                  <span className="text-start font-helvetica text-BodyText text-sm font-normal text-textColor">
                    An ego to own really big machines was probably the real
                    reason Henry started Made In Workshop. I liked the ability
                    to make things that other people would normally purchase.
                    What was better that I could use this ego to help other
                    people and SMEs to start and grow their own businesses. I
                    enjoy being with members, teaching members how to use
                    machines and I also learning from members.
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
            <div className="bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 lg:rounded-l-lg">
                  <Image
                    src={joshua}
                    alt="henry"
                    placeholder="blur"
                    className="h-full w-full object-cover lg:rounded-l-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                  Joshua Lotter
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                  OPERATIONS MANAGER
                  </span>
                  <span className="text-start font-helvetica text-BodyText text-sm font-normal text-textColor">
                  Cool, calm and collected. As the Operations Manager, I am
                    second in command at MIW. I am involved in managing the
                    operations process, embracing design, planning, performance
                    improvement, and maintaining general operations of the
                    facility as well as the machines. Whether I get a small
                    chuckle or solve bigger problems, I enjoying making a
                    positive impact by helping others around me.
                  </span>
                </div>
              </div>
             
             
            </Card>
          </TabsContent>
          <TabsContent className="bg-background font-helvetica" value="general">
            <Card className="border-0 bg-background">
            <div className="bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 lg:rounded-l-lg">
                  <Image
                    src={trenton}
                    alt="trenton"
                    placeholder="blur"
                    className="h-full w-full object-cover lg:rounded-l-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                  Trenton Carr
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                  INSTRUCTOR
                  </span>
                  <span className="text-start font-helvetica text-BodyText text-sm font-normal text-textColor">
                  I endeavour to bring interesting industrial and mechanical
                    designs to life by sucking the knowledge out of anyone
                    willing to share at Made in Workshop.
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
