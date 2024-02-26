import React from "react";
import machine1Image from "../../images/banner.webp";
import machine2Image from "../../images/banner.webp";
import IndustrialMachine from "./industrialMachine";
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


const IndustrialMachineTools: React.FC = () => {
  const machine1Specs = [
    { label: "Working Area", value: "1100mm x 1400mm" },
     { label: "Additional Notes", value: "CNC Software (UCCNC)" },
    { label: "Software", value: "CNC Software (UCCNC)" },
   
    { label: "Working Area1", value: "1100mm x 1400mm" },
    { label: "Additional Notes3", value: "CNC Software (UCCNC)" },
    { label: "Software2", value: "CNC Software (UCCNC)" },
  ];

  const machine2Specs = [
  
    { label: "Software", value: "CNC Software (UCCNC)" },
      { label: "Working Area", value: "100mm x 400mm" },
    { label: "Additional Notes", value: "CNC Software (UCCNC)" },
  ];

  const machine1SpecGroups = [{ specs: machine1Specs }];
  const machine2SpecGroups = [{ specs: machine2Specs }];

  return (
    <div className="bg-background py-8">

<Tabs defaultValue="woodwork" className="bg-background">
    <div className="px-6 2xl:mx-96 lg:mx-60 md:mx-20 sm:mx-8 2xl:px-40">
      <span className="text-secondary text-center py-3 text-sm">Filter by</span>
      <TabsList className="grid w-full grid-cols-3 bg-[#27272A] text-secondary px-2">
        <TabsTrigger value="woodwork" className="">Woodwork</TabsTrigger>
        <TabsTrigger value="metalwork">Metalwork</TabsTrigger>
        <TabsTrigger value="engineering">Engineering</TabsTrigger>
      </TabsList>
      </div>
      <TabsContent className="bg-background font-helvetica pt-10" value="woodwork">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardDescription className="text-textColor">
            <IndustrialMachine
        machineName="Machine Name 1"
        categories="Category 1 | Category 2"
        image={machine1Image}
        description="Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
        specGroups={machine1SpecGroups}
        buttonUrl={"/about"}
      />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica pt-10" value="metalwork">
        <Card className="bg-background border-0">
          <CardHeader>
          
            <CardDescription className="text-textColor">
            <IndustrialMachine
        machineName="Machine Name 2"
        categories="Category 3 | Category 4"
        image={machine2Image}
        description="Different tests text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
        specGroups={machine2SpecGroups}
        buttonUrl={"/home"}
      />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent className="bg-background font-helvetica pt-10" value="engineering">
        <Card className="bg-background border-0">
          <CardHeader>
            <CardDescription className="text-textColor">
            <IndustrialMachine
        machineName="Machine Name 3"
        categories="Category 3 | Category 4"
        image={machine2Image}
        description="Different tests text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
        specGroups={machine2SpecGroups}
        buttonUrl={"/home"}
      />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
      
    </Tabs>





     

     
      
    </div>
  );
};

export default IndustrialMachineTools;
