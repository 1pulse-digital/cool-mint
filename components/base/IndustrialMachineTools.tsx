import React from "react";
import machine1Image from "../../images/banner.webp";
import machine2Image from "../../images/banner.webp";
import IndustrialMachine from "./industrialMachine";

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
      <IndustrialMachine
        machineName="Machine Name 1"
        categories="Category 1 | Category 2"
        image={machine1Image}
        description="Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
        specGroups={machine1SpecGroups}
        buttonUrl={"/about"}
      />

      <IndustrialMachine
        machineName="Machine Name 2"
        categories="Category 3 | Category 4"
        image={machine2Image}
        description="Different tests text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
        specGroups={machine2SpecGroups}
        buttonUrl={"/home"}
      />
      
    </div>
  );
};

export default IndustrialMachineTools;
