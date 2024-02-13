import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  export function FAQAccordion() {
  return (
    <div className="py-20">
    <Tabs defaultValue="machines" className="bg-background">
    <div className="px-6">
      <TabsList className="grid w-full grid-cols-3 bg-[#27272A] text-secondary">
        <TabsTrigger value="machines" className="">Machines</TabsTrigger>
        <TabsTrigger value="workshops">Workshops</TabsTrigger>
        <TabsTrigger value="general">General</TabsTrigger>
      </TabsList>
      </div>
      <TabsContent className="bg-background font-helvetica" value="machines">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardTitle className="text-primary">Machines</CardTitle>
            <CardDescription className="text-textColor">
            <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="text-textColor"value="item-1">
          <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet,
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
      </Accordion>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="workshops">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardTitle className="text-primary">Workshops</CardTitle>
            <CardDescription className="text-textColor">
            <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="text-textColor"value="item-1">
          <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet,
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
      </Accordion>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className="bg-background font-helvetica" value="general">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardTitle className="text-primary">General</CardTitle>
            <CardDescription className="text-textColor">
            <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="text-textColor"value="item-1">
          <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet,
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
        <AccordionTrigger className="text-textColor text-[16px]">Lorem ipsum dolor sit amet</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet
          </AccordionContent>
        </AccordionItem>
      </Accordion>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
