import React from "react";
import IndustrialMachineTools from "@/components/base/IndustrialMachineTools";
import Button from "@/components/base/button";
import Link from "next/link";
import HeaderTitle from "@/components/base/headerTitle";
import GetInTouch from "@/components/base/getInTouch";


const MachinesTools = () => {
  return(
      <div className={"bg-background py-20"}>
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

          {/* header title start */}
          <HeaderTitle title="Industrial Tools & Machines"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
      />
      {/* header title end */}
      
          <div className="text-center pt-10 2xl:px-16 xl:px-40 lg:px-32 sm:px-6 md:px-20">
         <IndustrialMachineTools />
         <div className="pb-16 text-center">
          <Link href="/">
            <Button color={"primary"}>Learn More</Button>
          </Link>
        </div>
          </div>
        </div>
        </div>
        <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
     </div>
  );
};

export default MachinesTools;