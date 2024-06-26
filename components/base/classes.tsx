import Image from "next/image"
import gallery from "../../images/banner.webp"
import craig from "../../images/craig.webp"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeaderTitle from "../header-title"

export function Classes() {
  return (
    <div className="lg:mx-28">
      <div className="grid justify-center bg-background font-helvetica">
        <Card className="border-0 bg-background">
          <div
            className={
              "mx-8 grid content-center justify-center font-helvetica 2xl:mx-80"
            }
          >
            <div>
              <HeaderTitle>Class Name</HeaderTitle>
            </div>
            <div className="row flex items-center justify-center space-x-4">
              <span className="inline-flex items-center py-1 text-xs text-foreground">
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
                3 hours
              </span>
              <span className="inline-flex py-1 text-xs text-foreground">
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Henry Levine
              </span>
            </div>
            <span className="pt-8 font-helvetica text-xl font-bold text-primary">
              R1,500.00
            </span>
            <p
              className={
                "text-center font-helvetica text-[12px] font-normal text-foreground"
              }
            >
              Max 6 pax per session
            </p>
            <p
              className={
                "pt-8 text-center font-helvetica text-BodyText text-base font-normal text-foreground lg:mx-24"
              }
            >
              Dummy text is text that is used in the publishing industry or by
              web designers to occupy the space which will later be filled with
              real content. This is required when, for example, the final text
              is not yet available.
            </p>
            <p
              className={
                "pt-6 text-center font-helvetica text-sm font-bold text-foreground"
              }
            >
              *Please note that this class is not a tradesman qualification.
            </p>
          </div>
        </Card>
      </div>
      <Tabs defaultValue="class1">
        <div className="grid items-center justify-center sm:mx-32">
          <Carousel className="mx-10 sm:pt-10 md:mx-28 lg:mx-32 xl:mx-72 2xl:mx-96">
            <CarouselContent>
              <CarouselItem>
                <TabsList className="bg-background">
                  <TabsTrigger value="class2">
                    <div className="pt-80">
                      <Image
                        src={gallery}
                        alt="team member"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                </TabsList>
              </CarouselItem>
              <CarouselItem>
                <TabsList className="bg-background">
                  <TabsTrigger value="class2">
                    <div className="pt-80">
                      <Image
                        src={craig}
                        alt="team member"
                        className="rounded-lg"
                        width="400"
                        height="400"
                      />
                    </div>
                  </TabsTrigger>
                </TabsList>
              </CarouselItem>
              <CarouselItem>
                <TabsList className="bg-background">
                  <TabsTrigger value="class3">
                    <div className="pt-80">
                      <Image
                        src={gallery}
                        alt="team member"
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

        <TabsContent className="bg-background font-helvetica" value="class2">
          <Card className="border-0 bg-background"></Card>
        </TabsContent>

        <TabsContent className="bg-background font-helvetica" value="class3">
          <Card className="border-0 bg-background"></Card>
        </TabsContent>

        <TabsContent className="bg-background font-helvetica" value="workshops">
          <Card className="border-0 bg-background">
            <div className="rounded-xl bg-[#2c3033]">
              <div className="rounded-md">
                <Image
                  src={gallery}
                  alt="team member"
                  className="rounded-t-lg"
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
                  className="rounded-t-lg"
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
