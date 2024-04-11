import React from "react";
import machine1Image from "../../images/CNC-Machining-Center.webp";
import machine2Image from "../../images/cnc-router.webp";
import drumsander from "../../images/drumsander.webp";
import IndustrialMachine from "./industrialMachine";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Machine } from "@/lib/fusion/workshop/machine.pb";

interface IndustrialMachineToolsProps {
  machines: Machine[];
}
const IndustrialMachineTools = (props: IndustrialMachineToolsProps) => {
  const { machines } = props;

  // get all the categories of all machines and remove duplicates
  const categories = Array.from(
    new Set(machines.flatMap((machine) => machine.categories)),
  );

  const defaultCategory = categories[0];

  // TODO: @Parson140 - Remove all the font-helvetica class names. It should be set in the global styles
  // TODO: @Parson140 - Remove all the hardcoded colors such as bg-[#27272A] we should only use the colors from the theme
  return (
    <div className="bg-background py-8">
      <Tabs defaultValue={defaultCategory} className="bg-background">
        <div className="px-6 pb-10 sm:mx-8 md:mx-20 lg:mx-60 2xl:mx-96">
          <p className="py-3 text-center text-sm text-secondary">Filter by</p>
          <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-2 text-secondary">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map((category) => (
          <TabsContent
            key={category}
            className="bg-background font-helvetica"
            value={category}
          >
            {machines.map((machine, index) => (
              <Card
                key={machine.uid}
                className="rounded-lg border-0 bg-background"
              >
                <CardHeader>
                  <CardDescription className="text-textColor">
                    <IndustrialMachine machine={machine} />
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2"></CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default IndustrialMachineTools;
