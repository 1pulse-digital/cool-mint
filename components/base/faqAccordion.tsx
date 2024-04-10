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
          <TabsList className="grid w-full grid-cols-4 bg-[#27272A] px-2 text-secondary">
            <TabsTrigger value="machines" className="">
              Machines
            </TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="memberships">Memberships</TabsTrigger>
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
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Can I use any machine as soon as I become a member?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, but you must complete a mandatory orientation for
                      each type of machine you&apos;re interested in using to ensure
                      safety and proficiency.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-2">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      What if I don&apos;t know how to use a machine or tool?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our team is here to help and train you on all of our
                      machines and software at no extra cost.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="bg-background font-helvetica" value="classes">
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">Classes</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Do I need to be a member to enrol in classes?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, our classes are open to members and non-members,
                      making it easy for anyone interested in learning new
                      skills or improving existing ones.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Do i get a certificate or a qualification once I&apos;ve
                      completed the class?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, you don&apos;t. Made in Workshop is not a TVET college, nor
                      are we associated with merSETA, and therefore, it would be
                      illegal to give a certificate.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent
          className="bg-background font-helvetica"
          value="memberships"
        >
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">Memberships</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      What are the benefits of becoming a member?
                    </AccordionTrigger>
                    <AccordionContent>
                      Members enjoy unlimited access to our facilities,
                      exclusive discounts on classes and machine hire, and
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
              <CardTitle className="text-primary">General Queries</CardTitle>
              <CardDescription className="text-textColor">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="text-textColor" value="item-1">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Are there any age restrictions for accessing the factory
                      or café?
                    </AccordionTrigger>
                    <AccordionContent>
                      The factory is accessible to individuals 18 and over, but
                      our café welcomes guests of all ages. An adult in the café
                      area must accompany minors.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-2">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Can I bring my materials to work with in the factory?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you&apos;re welcome to bring your materials. However, we
                      recommend checking with our staff first to ensure
                      compatibility with our machines.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="text-textColor" value="item-3">
                    <AccordionTrigger className="text-[16px] font-bold text-textColor">
                      Is there Wi-Fi available at the café?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely! Our café offers free Wi-Fi to all our guests,
                      whether you&apos;re working on your next project or just
                      enjoying a coffee break.
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
