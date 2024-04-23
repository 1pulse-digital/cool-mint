import * as React from "react"
import Image, { StaticImageData } from "next/image"
import henry from "../../images/team/Henry.jpg"
import joshua from "../../images/team/Josh.jpg"
import jesse from "../../images/team/Jesse.jpg"
import siza from "../../images/team/Ciza.jpg"
import deneo from "../../images/team/Deneo.jpg"
import ericsson from "../../images/team/Ericsson.jpg"
import nomonde from "../../images/team/Nomonde.jpg"
import charles from "../../images/team/Charles.jpg"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TeamItem {
  name: string
  alt: string
  src: StaticImageData
}

export function TeamCarousel() {
  const items: TeamItem[] = [
    {
      name: "henry",
      alt: "henry",
      src: henry,
    },

    {
      name: "joshua",
      alt: "joshua",
      src: joshua,
    },

    {
      name: "jesse",
      alt: "jesse",
      src: jesse,
    },

    {
      name: "ericsson",
      alt: "ericsson",
      src: ericsson,
    },

    {
      name: "siza",
      alt: "siza",
      src: siza,
    },

    {
      name: "deneo",
      alt: "deneo",
      src: deneo,
    },
    {
      name: "nomonde",
      alt: "nomonde",
      src: nomonde,
    },
    {
      name: "charles",
      alt: "charles",
      src: charles,
    },
  ]

  return (
    <div>
      <div className="grid h-auto items-center justify-center px-8 py-10 sm:px-16 sm:py-20 md:px-16 lg:px-12 xl:px-40 2xl:px-72">
        <h1
          className={
            "pb-8 text-center font-helvetica text-headings font-bold text-secondary sm:pb-2"
          }
        >
          Meet the Team<span className="text-primary">.</span>
        </h1>

        <Tabs defaultValue="henry">
          <div className="pb-0 md:pb-2 2xl:pb-5">
            <Carousel className="mx-10 md:mx-20 lg:mx-40  xl:mx-40 2xl:mx-32">
              <CarouselContent>
                <CarouselItem>
                  <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                    {items.slice(0, 3).map((item, index) => (
                      <TabsTrigger key={index} value={item.name}>
                        <div className="pt-16 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            className="rounded-lg"
                            width="600"
                            height="600"
                          />
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </CarouselItem>

                <CarouselItem>
                  <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                    {items.slice(3, 6).map((item, index) => (
                      <TabsTrigger key={index} value={item.name}>
                        <div className="pt-16 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            className="rounded-lg"
                            width="600"
                            height="600"
                          />
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </CarouselItem>
                <CarouselItem>
                  <TabsList className="space-x-2 bg-background sm:space-x-4 md:space-x-6 2xl:space-x-9">
                    {[6, 7, 0].map((item) => (
                      <TabsTrigger key={item} value={items[item].name}>
                        <div className="pt-16 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                          <Image
                            src={items[item].src}
                            alt={items[item].alt}
                            className="rounded-lg"
                            width="600"
                            height="600"
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

          {/* Henry Levine */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="henry"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-lg">
                  <Image
                    src={henry}
                    alt="henry"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Henry Levine
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    CEO
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    Henry qualified with a diploma in Mechanical engineering in
                    1997, shortly after he got into IT and eventually managed
                    his own Print Services firm for 15 years. His passion for
                    engineering, fabrication and the creation of physical
                    products inspired what we now know as Made In Workshop. His
                    passion for Made In Workshop has grown the space into the
                    largest makerspace in the country.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Joshua Lotter */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="joshua"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-lg">
                  <Image
                    src={joshua}
                    alt="joshua"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Joshua Lotter
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    COO
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    As the second-in-command at Made in Workshop, Josh ensures
                    everything runs seamlessly. His expertise in design and
                    planning enhances our members&apos; workshop experience,
                    alongside maintaining all our workshop&apos;s essential
                    functions. Although the role carries significant weight, he
                    infuses humour into his day-to-day activities. His passion
                    lies in positively impacting the daily lives of those around
                    him, whether through a witty remark or navigating complex
                    manufacturing strategies.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Jesse Hutton */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="jesse"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-l-lg">
                  <Image
                    src={jesse}
                    alt="jesse"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Jesse Hutton
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Workshop Assistant
                  </span>
                  <span className="text-smfont-normal text-start font-helvetica text-textColor sm:text-Body">
                    Jesse is another full-time workshop assistant. As an
                    accomplished amateur TIG welder, he is keen on learning more
                    about making. His curious nature and eagerness to help make
                    him an asset to all new and old members at Made In Workshop.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Siza Simlne */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="siza"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-l-lg">
                  <Image
                    src={siza}
                    alt="siza"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Siza Simlne
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Café Manager
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    Siza runs the front of house at Made in Workshop, which
                    includes our café and reception area. Her contagious smile
                    greets everyone who walks through the entrance, whether they
                    are making a delivery or placing a lunch order. She manages
                    our kitchen and staff and ensures everything is attended to
                    and runs smoothly.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Deneo */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="deneo"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-l-lg">
                  <Image
                    src={deneo}
                    alt="deneo"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Deneo (Surname)
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Workshop Caretaker
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    Deneo looks after the day-to-day upkeep of Made In Workshop,
                    ensuring all the spaces are clean and tidy. In a space
                    consistently in a state of controlled chaos, she is the
                    constant force resetting and rearranging to ensure all
                    members have a clean and tidy environment for making.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Nomonde Nenene */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="nomonde"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-l-lg">
                  <Image
                    src={nomonde}
                    alt="nomonde"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Nomonde Nenene
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Café Chef
                  </span>
                  <span className="text-start font-helvetica text-Body font-normal text-textColor">
                    Nomonde, the culinary artist behind the scenes at the café,
                    effortlessly manoeuvres among pots and pans with graceful
                    efficiency. During our lunchtime rush, her calm approach
                    ensures all orders are hot and waiting for their midday
                    pick-up.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Ericson Dlamini */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="ericsson"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 md:rounded-l-lg">
                  <Image
                    src={ericsson}
                    alt="ericsson"
                    className="h-full w-full rounded-t-lg object-cover md:rounded-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Ericson Dlamini
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Workshop Assistant
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    From humble beginnings as a former kitchen staff member,
                    Ericson has evolved into our full-time workshop assistant.
                    As an integral part of workshop maintenance, Ericson
                    possesses comprehensive knowledge of all machinery
                    operations. All members welcome his calm demeanour in an
                    environment that can be very stressful.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Charles Cooper */}

          <TabsContent
            className="mx-0 bg-background font-helvetica sm:mx-0 lg:px-20"
            value="charles"
          >
            <Card className="border-0 bg-background">
              <div className="rounded-lg bg-[#2c3033] md:mx-2 md:flex lg:mx-0">
                <div className="md:w-1/3 lg:rounded-l-lg">
                  <Image
                    src={charles}
                    alt="charles"
                    className="h-full w-full rounded-t-lg object-cover lg:rounded-l-lg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="grid content-center rounded-lg bg-[#2c3033] px-8 py-8 font-helvetica sm:px-6 md:w-2/3">
                  <h3 className="text-start font-helvetica text-BodyText font-semibold text-textColor">
                    Charles Cooper
                  </h3>
                  <span className="py-2 pb-6 font-helvetica text-sm text-primary">
                    Part-time Workshop Assistant
                  </span>
                  <span className="text-start font-helvetica text-sm font-normal text-textColor sm:text-Body">
                    Charley has an Honors degree in Applied Linguistics and
                    taught English and Woodwork for twenty years in various
                    schools and for Education projects connected to Wits
                    University. He then spent the next twenty years involved in
                    system engineering and programming Variable Logic
                    Controllers in the HVAC Industry for various companies. For
                    the past four years, he&apos;s been involved in carpentry
                    projects, mainly restoring old furniture, doors, etc. He is
                    also a journalist and has been published since 1992 in
                    various newspapers and magazines, mainly in connection with
                    motorcycling since that time.
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
