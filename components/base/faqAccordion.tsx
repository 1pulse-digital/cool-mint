import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion() {
  return (
    <div className="px-2 py-6 sm:px-10 sm:py-2 xl:mx-28 2xl:mx-40">
      <Tabs defaultValue="machines" className="bg-background">
        <div className="px-6 sm:mx-8 md:mx-20 lg:mx-60 2xl:mx-96">
          <p className="py-3 text-center text-xs text-textColor">Filter by</p>
          <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-2 text-secondary">
            <TabsTrigger value="machines" className="">
              Machines
            </TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="bg-background font-helvetica" value="machines">
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">Machines</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <div></div>
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor{" "}
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet,
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-2">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sitt
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-3">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-4">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-5">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="machines">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-6">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-7">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-8">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="bg-background font-helvetica" value="workshops">
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">Workshops</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet,
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="bg-background font-helvetica" value="general">
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">General</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet,
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-10">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-11">
                    <AccordionTrigger className="text-[16px] text-textColor font-bold">
                      Lorem ipsum dolor sit amet
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
