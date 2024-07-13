import GetInTouch from "@/components/base/getInTouch"
import Tour from "@/components/base/tour"
import { Card, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dayjs from "dayjs"
import { availableSlots } from "./actions"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { format } from "date-fns"
var localizedFormat = require("dayjs/plugin/localizedFormat")
dayjs.extend(localizedFormat)

const BookTour = async () => {
  const { slots } = await availableSlots({})
  const days = slots
    .map((slot) => format(new Date(slot.time), "EEE"))
    .filter((day, index, self) => self.indexOf(day) === index)

  return (
    <div className={"px-8"}>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Book a Tour", href: "/book-tour" },
        ]}
      />
      <HeaderTitle>Book a Tour</HeaderTitle>
      <p className=" font-helvetica text-BodyText font-normal text-muted-foreground 2xl:px-60">
        Interested in learning more about Made in Workshop? Come visit our
        facility at
        <span className="text-primary">
          {" "}
          10 Naaf Street, Strydompark, Randburg
        </span>{" "}
        and take a tour with one of our team members.
      </p>

      <div className="sm:mx-20 md:mx-16 lg:mx-2 xl:mx-16 2xl:pb-20">
        <div className={"font-helvetaica grid content-center px-6"}>
          <div className="px-6 md:mx-16 lg:mx-40 xl:mx-60 2xl:mx-40">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
              Book a Tour<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground 2xl:px-60">
              Interested in learning more about Made in Workshop? Come visit our
              facility at
              <span className="text-primary">
                {" "}
                10 Naaf Street, Strydompark, Randburg
              </span>{" "}
              and take a tour with one of our team members.
            </p>
          </div>
        </div>
        <div className="py-10 lg:px-52">
          <Tabs defaultValue={days[0]}>
            <div className="lg:pb-16">
              <Carousel className="mx-3 pt-3">
                <CarouselContent className="">
                  <CarouselItem>
                    <TabsList className="h-18 grid w-full grid-cols-7 py-2 ">
                      {days.map((day) => {
                        return (
                          <TabsTrigger
                            disabled={day === "Sun"}
                            key={day}
                            value={day}
                            className={"p-5"}
                          >
                            {day}
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            {days.map((day) => {
              const slotsThisDay = slots.filter(
                (slot) => day === format(new Date(slot.time), "EEE"),
              )
              return (
                <TabsContent
                  key={day}
                  className="bg-background font-helvetica"
                  value={day}
                >
                  <Card className="border-0 bg-background">
                    <CardTitle className="px-8 py-6 font-helvetica text-primary">
                      {format(new Date(slotsThisDay[0].time), "EEEE, d MMMM")}
                    </CardTitle>
                    {slotsThisDay.map((slot) => {
                      return <Tour key={slot.time} slot={slot} />
                    })}
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

export default BookTour
