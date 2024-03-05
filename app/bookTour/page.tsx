import React from "react";
import Tour from "@/components/base/tour";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderTitle from "@/components/base/headerTitle";
import GetInTouch from "@/components/base/getInTouch";

const BookTour = () => {
  return (
    <div className={"bg-background lg:py-32"}>
      <div className="sm:mx-20 md:mx-16 lg:mx-2 xl:mx-40 2xl:pb-20">
        <div className={"font-helvetaica grid content-center px-6"}>
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/workshops">
              <div className="text-primary">Workshops</div>
            </Link>
          </div>

          {/* header title start */}
          <HeaderTitle
            title="Book a Tour"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
          />
          {/* header title end */}
        </div>
        <div className="py-10 lg:px-52">
          <Tabs defaultValue="monday">
            <div className="lg:pb-16">
              <Carousel className="mx-3 pt-3">
                <CarouselContent className="">
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] py-2 text-secondary">
                      <TabsTrigger value="monday" className="ml-2 p-5">
                        Mon
                      </TabsTrigger>
                      <TabsTrigger value="tuesday" className="p-5">
                        Tue
                      </TabsTrigger>
                      <TabsTrigger value="wednesday" className="p-5">
                        Wed
                      </TabsTrigger>
                      <TabsTrigger value="thursday" className="p-5">
                        Thur
                      </TabsTrigger>
                      <TabsTrigger value="friday" className="mr-2 p-5">
                        Fri
                      </TabsTrigger>
                    </TabsList>
                  </CarouselItem>
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] py-2 text-secondary">
                      <TabsTrigger value="monday" className="ml-2 p-5">
                        Sat
                      </TabsTrigger>
                      <TabsTrigger value="tuesday" className="p-5">
                        Sun
                      </TabsTrigger>
                      <TabsTrigger value="wednesday" className="p-5">
                        Mon
                      </TabsTrigger>
                      <TabsTrigger value="thursday" className="p-5">
                        Tue
                      </TabsTrigger>
                      <TabsTrigger value="friday" className="mr-2 p-5">
                        Wed
                      </TabsTrigger>
                    </TabsList>
                  </CarouselItem>
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] py-2 text-secondary">
                      <TabsTrigger value="friday" className="ml-2  p-5">
                        Nov
                      </TabsTrigger>
                      <TabsTrigger value="tuesday" className="mr-2 p-5">
                        Dec
                      </TabsTrigger>
                      <TabsTrigger value="monday" className="ml-2 p-5">
                        Jan
                      </TabsTrigger>
                      <TabsTrigger value="tuesday" className="p-5">
                        Feb
                      </TabsTrigger>
                      <TabsTrigger value="wednesday" className="mr-2 p-5">
                        Mar
                      </TabsTrigger>
                    </TabsList>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <CardTitle className="px-8 py-6 font-helvetica text-primary">
                  Monday
                </CardTitle>
                <Tour
                  starttime="09:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            {/* Monday */}
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="10:00"
                  endtime="10:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="11:00"
                  endtime="11:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="12:00"
                  endtime="12:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="13:00"
                  endtime="13:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="14:00"
                  endtime="14:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="16:00"
                  endtime="16:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="17:00"
                  endtime="17:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="18:00"
                  endtime="18:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
                <CardTitle className="px-8 py-6 font-helvetica text-primary">
                  Tuesday
                </CardTitle>
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
                <CardTitle className="px-8 py-6 font-helvetica text-primary">
                  Wednesday
                </CardTitle>
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            {/* Thursday */}
            <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
                <CardTitle className="px-8 py-6 font-helvetica text-primary">
                  Thursday
                </CardTitle>
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            {/* 
friday */}
            <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
                <CardTitle className="px-8 py-6 font-helvetica text-primary">
                  Friday
                </CardTitle>
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="08:00"
                  endtime="09:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default BookTour;
