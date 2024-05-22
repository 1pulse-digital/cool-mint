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
    <div className={"bg-background lg:py-20"}>
      <div className="sm:mx-20 md:mx-16 lg:mx-2 xl:mx-16 2xl:pb-20">
        <div className={"font-helvetaica grid content-center px-6"}>
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-foreground">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/workshops">
              <div className="text-primary">Classes</div>
            </Link>
          </div>

          <div className="px-6 md:mx-16 lg:mx-40 xl:mx-60 2xl:mx-40">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
            Book a Tour<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground 2xl:px-60">
            Interested in learning more about Made in Workshop? 
            Come visit our facility at<span className="text-primary"> 10 Naaf Street, Strydompark, Randburg</span>  and take a tour with one of our team members.
            </p>
          </div>
        </div>
        <div className="py-10 lg:px-52">
          <Tabs defaultValue="monday">
            <div className="lg:pb-16">
              <Carousel className="mx-3 pt-3">
                <CarouselContent className="">
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-7 bg-[#27272A] py-2 text-foreground">
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
                      <TabsTrigger value="saturday" className="mr-2 p-5">
                        Sat
                      </TabsTrigger>
                      <TabsTrigger value="sunday" className="mr-2 p-5">
                        Sun
                      </TabsTrigger>
                    </TabsList>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>

            {/* Monday */}
            <TabsContent
              className="bg-background font-helvetica"
              value="monday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
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

       {/*  Tuesday start */}

        <TabsContent
              className="bg-background font-helvetica"
              value="tuesday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
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
                  starttime="11:00"
                  endtime="11:30"
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
                  starttime="13:00"
                  endtime="13:30"
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
                  starttime="14:00"
                  endtime="14:30"
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
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

            {/*  Wednesday start */}

            <TabsContent
              className="bg-background font-helvetica"
              value="wednesday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
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
                  starttime="11:00"
                  endtime="11:30"
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
                  starttime="13:00"
                  endtime="13:30"
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
                  starttime="14:00"
                  endtime="14:30"
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
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>


             {/*  Thursday start */}

             <TabsContent
              className="bg-background font-helvetica"
              value="thursday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
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
                  starttime="11:00"
                  endtime="11:30"
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
                  starttime="13:00"
                  endtime="13:30"
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
                  starttime="14:00"
                  endtime="14:30"
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
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>


              {/*  Friday start */}

              <TabsContent
              className="bg-background font-helvetica"
              value="friday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
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
                  starttime="11:00"
                  endtime="11:30"
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
                  starttime="13:00"
                  endtime="13:30"
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
                  starttime="14:00"
                  endtime="14:30"
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
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

               {/*  Saturday start */}

               <TabsContent
              className="bg-background font-helvetica"
              value="saturday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="saturday"
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
              value="saturday"
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
              value="saturday"
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
              value="saturday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="15:00"
                  endtime="15:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>

                {/*  Sunday */}
         
                <TabsContent
              className="bg-background font-helvetica"
              value="sunday"
            >
              <Card className="border-0 bg-background">
              <CardTitle className="px-8 py-6 font-helvetica text-primary">
                 January
                </CardTitle>
                <Tour
                  starttime="10:00"
                  endtime="10:30"
                  linkUrl="/bookingConfirmation"
                />
              </Card>
            </TabsContent>
            <TabsContent
              className="bg-background font-helvetica"
              value="sunday"
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
              value="sunday"
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
              value="sunday"
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
              value="sunday"
            >
              <Card className="border-0 bg-background">
                <Tour
                  starttime="15:00"
                  endtime="15:30"
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
