import React from "react";
import Tour from "@/components/base/tour";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GetInTouch from "@/components/base/getInTouch";
import { availableSlots } from "./actions";
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const BookTour = async () => {
  const tourDayFormat = "YYYY-MM-DD"
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
          <Tabs defaultValue={dayjs().format(tourDayFormat)}>
            <div className="lg:pb-16">
              <Carousel className="mx-3 pt-3">
                <CarouselContent className="">
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-7 bg-[#27272A] py-2 text-foreground">
                      {/* Days of the week */
                        (() => {
                          let rows = []
                          let className = "p-5"
                          for (let i = 0; i < 7; i++) {
                            if (dayjs().add(i, 'day').format('ddd') === "Sun") {
                              rows.push(
                                <TabsTrigger
                                  disabled
                                  key={i}
                                  value={dayjs().add(i, 'day').format(tourDayFormat)}
                                  className={className}
                                >
                                  {dayjs().add(i, 'day').format('ddd')}
                                </TabsTrigger>
                              );
                            } else {
                              rows.push(
                                <TabsTrigger
                                  key={i}
                                  value={dayjs().add(i, 'day').format(tourDayFormat)}
                                  className={className}
                                >
                                  {dayjs().add(i, 'day').format('ddd')}
                                </TabsTrigger>
                              );
                            }
                          }
                          return rows
                        })()
                      }
                    </TabsList>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            {
              (async () => {
                const tabContent = []
                for (let i = 0; i < 7; i++) {
                  const res = await availableSlots({
                    date: dayjs().add(i, "days").format(tourDayFormat)
                  })
                  tabContent.push(
                    <TabsContent
                      key={i}
                      className="bg-background font-helvetica"
                      value={dayjs().add(i, "days").format(tourDayFormat)}
                    >
                      <Card className="border-0 bg-background">
                        <CardTitle className="px-8 py-6 font-helvetica text-primary">
                          {dayjs().add(i, "days").format("ll")}
                        </CardTitle>
                        {
                          res.slots.map((tourSlot: {time: string, available: boolean}) => {
                            const slotSplit = tourSlot.time.split(":")
                            const endTime = `${slotSplit[0]}:30`// DURATION IS HARD CODED
                            return (
                              <Tour
                                tourDay={dayjs().add(i, "days").format(tourDayFormat)}
                                available={tourSlot.available}
                                starttime={tourSlot.time}
                                endtime={endTime}
                                linkUrl="/bookingConfirmation"
                                key={tourSlot.time}
                              />
                            )
                          })
                        }
                      </Card>
                    </TabsContent>
                  )
                }
                return tabContent
              })()
            }
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
