import React from "react";
import BlogWidget from "@/components/detailed/blogWidget";
import Button from "@/components/base/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderTitle from "@/components/base/headerTitle";
import GetInTouch from "@/components/base/getInTouch";

const News = () => {
  return (
    <div className={"bg-background py-10"}>
      <div className={"grid content-center font-helvetica sm:p-10"}>
        <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-secondary">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/news">
            <div className="text-primary">News</div>
          </Link>
        </div>

        <div className="px-6 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-0">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary">
            News<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-textColor 2xl:px-60">
            Stay updated with the latest at Made In Workshop! Our blog page brings you the <span className="text-primary">freshest updates, stories, and insights</span> from our community, events, and the world of making.
            </p>
          </div>
        <div className="py-8 text-center md:mx-0 xl:mx-20 2xl:mx-32">
          <div className="px-2">
            <span
              className={
                "px-4 text-center font-helvetica text-[12px] font-normal text-textColor"
              }
            >
              Filter by
            </span>
            <Tabs defaultValue="news">
              <div className="sm:pb-16 pb-0">
                <Carousel className="mx-3 pt-3">
                  <CarouselContent className="">
                    <CarouselItem>
                      <div className="px-8 sm:px-16 md:px-20 2xl:px-60 xl:px-20 lg:px-20 pb-8 sm:pb-0">
                        <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-3 text-secondary">
                          <TabsTrigger value="news" className="">
                            News
                          </TabsTrigger>
                          <TabsTrigger value="diy">DIY</TabsTrigger>
                          <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="grid w-full space-x-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/miw.webp"
                        date="3 July 2022"
                        author="Henry Levine"
                        title="Does South African Manufacturing Have A Problem?"
                        categories={["Machines", "General"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/made-in-workshop-building-1.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Made In Workshop Is The Largest DIY Workshop And Makerspace In South Africa"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/made-in-workshop-is-expanding.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Made In Workshop (MIW) Is Expanding Its Equipment Offered To Its Members."
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/Small-Business-Showcase-Made-In-Workshop.png"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Small business showcase: Made in workshop"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/Made-In-Workshop-at-your-door-step.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Made In Workshop – a manufacturing Mecca, right on your doorstep"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="news"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/MIW_tools_image.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Maker Space Movement in South Africa – 2020 and beyond"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="events"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/Makerspace-image.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Henry happens"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="events"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/A-Dover-Simulator-created-by-Brad-which-was-built-to-train-student-operators-on-the-mines.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Want to be an industrial design success? Diversify, says Design For Industry’s Brad Johnston"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="events"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/craig.webp"
                        date="3 January 2024"
                        author="Parson Gapa"
                        title="Craig’s on fire!"
                        categories={["News", "Workshops"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="diy"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/The-CONCREAT-cutlery-set.webp"
                        date="Second Date"
                        author="Second Author"
                        title="Getting creative with… concrete?"
                        categories={["Workshops", "News"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>

                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="diy"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/Niks-CNC-plotter-parts.webp"
                        date="Second Date"
                        author="Second Author"
                        title="The curious, mathematical mind of Nik Ivanovic"
                        categories={["Workshops", "News"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>
                <div>
                  <TabsContent
                    className="bg-background font-helvetica"
                    value="diy"
                  >
                    <Card className="border-0 bg-background">
                      <BlogWidget
                        imageUrl="/icons/Bettlebot-images.webp"
                        date="Second Date"
                        author="Second Author"
                        title="The BeetleBot: the bug that teaches the basics of robotics"
                        categories={["Workshops", "News"]}
                        linkUrl="/newsTitle"
                      />
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
        <div className="py-6 text-center sm:py-8 md:py-10 lg:py-8">
          <Link href="/">
            <Button color={"primary"}>Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="sm:py-20 py-10 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default News;
