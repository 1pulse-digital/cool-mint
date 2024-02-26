import React from "react";
import IndustrialMachineTools from "@/components/base/IndustrialMachineTools";
import Button from "@/components/base/button";
import GetInTouch from "@/components/base/getInTouch";
import Link from "next/link";


const MachinesTools = () => {
  return(
      <div className={"bg-background px-8 py-20"}>
        <div className="flex h-auto">
        <div className={"grid content-center font-helvetica"}>
          <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/machines">
           <div className="text-primary">Machines</div>
          </Link>
          </div>
          <div className="2xl:mx-60">
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Industrial Tools & Machines</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-nromal 2xl:px-60"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
         </div>
          <div className="text-center pt-10">
         <IndustrialMachineTools />
         <div className="pb-16 text-center">
          <Link href="/">
            <Button color={"primary"}>Learn More</Button>
          </Link>
        </div>
          </div>
        </div>
        </div>
     </div>
  );
};

export default MachinesTools;