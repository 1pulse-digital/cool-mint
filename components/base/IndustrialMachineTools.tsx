import React from "react";
import machine1Image from "../../images/CNC-Machining-Center.webp";
import machine2Image from "../../images/cnc-router.webp";
import drumsander from "../../images/drumsander.webp";
import cncmachining from "../../images/CNC-Machining-Center-1.webp";
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

  const drumsanderSpecs = [
    { label: "Working Area", value: "1.3 meters wide" },
    { label: "Additional Notes", value: "twin drum action (currently set to 80 and 120 grit)" },
    { label: "Additional Notes", value: "Feeder table" },
    
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
    { label: "Interface", value: " USB Stick" },
    { label: "Additional Notes", value: "Language G & M, 3 Phase Power" },
    { label: "Working Area", value: "1100mm X 1400mm" },
  ];

  const CNCRouterSpecs = [
    { label: "Interface", value: " USB Stick" },
    { label: "Additional Notes", value: "Language G & M, 3 Phase Power" },
    { label: "Working Area", value: "1100mm X 1400mm" },
    { label: "Spindal", value: "9Kw, 21000 RPM" },
    { label: "Accuracy", value: "0.02mm" },
  ];

  const CNCMachiningSpecs = [
    { label: "Interface", value: " USB Stick" },
    { label: "Additional Notes", value: "Language G & M, 3 Phase Power, 16 Tool Holder" },
    { label: "Working Area", value: "920mm X 320mm" },
    { label: "Spindal Speed", value: "80 – 8000 RPM" },
    { label: "Load Capacity", value: "300 KGs" },
  ];

  const drumsanderSpecGroups = [{ specs: drumsanderSpecs }];
  const machine2SpecGroups = [{ specs: machine2Specs }];
  const CNCPlasmaSpecGroups = [{ specs: CNCPlasmaSpecs }];
  const CNCRouterSpecGroups = [{ specs: CNCRouterSpecs }];
  const CNCMachiningSpecGroups = [{ specs: CNCMachiningSpecs }];

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
          <Card className="rounded-lg border-0 bg-background">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="Drum Sander"
                  categories="Category 1 | Category 2"
                  image={drumsander}
                  description="Used to sand to 120 grit large flat surfaces such as table tops, doors and cutting boards etc."
                  specGroups={drumsanderSpecGroups}
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
                  description="The Omni would be just a normal traditional CNC router but with the addition of HCL’s 
                  Camworks post processor the Omni is now capable of 2D and 3D machining. Not just straight
                   forward cutting, but the delicate machining of 3D features such as fillets and other complicated geometry."
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
          <Card className="rounded-lg border-0 bg-background ">
            <CardHeader>
              <CardDescription className="text-textColor">
                <IndustrialMachine
                  machineName="CNC Machining Center"
                  categories="Category 1 | Category 2"
                  image={cncmachining}
                  description="The XH7132 is a high precision full 3 axes vertical machining center with a 
                  GSK control system. It is not limited to machining only metals such as aluminum and 
                  steel but also soft materials such as plastics and wood. Specialised cutters such as face mills and chamfer cutters are included however
                  HSS end mills, drill bits are excluded. They may be purchased from us in our store."
                  specGroups={CNCMachiningSpecGroups}
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
