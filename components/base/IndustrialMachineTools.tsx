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
    { label: "Software", value: "Feeder table" },
    { label: "Working Area", value: "1.3 meters wide" },
    {
      label: "Additional Notes",
      value: "twin drum action (currently set to 80 and 120 grit)",
    },
  ];

  const CNCPlasmaSpecs = [
    { label: "Software", value: " USB Stick" },
    { label: "Working Area", value: "1100mm X 1400mm" },
    { label: "Additional Notes", value: "Language G & M, 3 Phase Power" },
  ];

  const CNCRouterSpecs = [
    { label: "Interface", value: " USB Stick" },
    { label: "Working Area", value: "1100mm X 1400mm" },
    { label: "Accuracy", value: "0.02mm" },
    { label: "Spindal", value: "9Kw, 21000 RPM" },
    { label: "Additional Notes", value: "Language G & M, 3 Phase Power" },
  ];

  const machine1SpecGroups = [{ specs: machine1Specs }];
  const machine2SpecGroups = [{ specs: machine2Specs }];
  const CNCPlasmaSpecGroups = [{ specs: CNCPlasmaSpecs }];
  const CNCRouterSpecGroups = [{ specs: CNCRouterSpecs }];

  return (
    <div className="bg-background py-8">
      <Tabs defaultValue="woodwork" className="bg-background">
        <div className="px-6 pb-10 sm:mx-8 md:mx-20 lg:mx-60 2xl:mx-96">
          <p className="py-3 text-center text-sm text-secondary">Filter by</p>
          <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-2 text-secondary">
            <TabsTrigger value="woodwork" className="">
              Woodwork
            </TabsTrigger>
            <TabsTrigger value="metalwork">Metalwork</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="bg-background font-helvetica" value="woodwork">
          <Card className="border-0 rounded-lg bg-background">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="Drum Sander"
                  categories="Category 1 | Category 2"
                  image={drumsander}
                  description=" HCL’s Camworks post processor the Omni is now capable of 2D and 3D machining. 
        Not just straight forward cutting, but the delicate machining of 3D features such as fillets."
                  specGroups={machine2SpecGroups}
                  buttonUrl={"/about"}
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="woodwork"
        >
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="CNC Plasma Cutting"
                  categories="Category 1 | Category 2"
                  image={machine1Image}
                  description="Suitable for cutting sheet metal from 0.5 to 15mm thick. CNC plasma cutting provides the most economical way of cutting sheet metal in a precise way."
                  specGroups={CNCPlasmaSpecGroups}
                  buttonUrl={"/about"}
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="woodwork"
        >
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="CNC Router"
                  categories="Category 1 | Category 2"
                  image={drumsander}
                  description="The Omni would be just a normal traditional CNC router but with the addition of 
        HCL’s Camworks post processor the Omni is now capable of 2D and 3D machining."
                  specGroups={CNCRouterSpecGroups}
                  buttonUrl={"/about"}
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="woodwork"
        >
          <Card className="border-0 bg-background rounded-lg ">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="Machine Name 4"
                  categories="Category 1 | Category 2"
                  image={machine1Image}
                  description="Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
                  specGroups={machine1SpecGroups}
                  buttonUrl={"/about"}
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="metalwork"
        >
          <Card className="border-0 bg-background">
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
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="metalwork"
        >
          <Card className="border-0 bg-background">
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
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="metalwork"
        >
          <Card className="border-0 bg-background">
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
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="bg-background pt-0 font-helvetica"
          value="engineering"
        >
          <Card className="border-0 bg-background">
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
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndustrialMachineTools;
