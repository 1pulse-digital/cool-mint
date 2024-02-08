import IndustrialMachineTools from "@/components/base/IndustrialMachineTools";
import Button from "@/components/base/button";
import { FAQs } from "@/components/base/faqs";
import { FilterButtons } from "@/components/base/filterButtons";
import GetInTouch from "@/components/base/getInTouch";
import Link from "next/link";
import React from "react";

const MachinesTools = () => {
  return(
      <div className={"grid grid-cols-1 bg-background py-12"}>
        <div className="px-8 ">
        <div className={"grid content-center font-helvetica sm:p-10 md:max-w-prose"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Industrial Tools & Machines</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
          <div className=" text-center pt-10">
         <FilterButtons />
         <IndustrialMachineTools />
         <div className="pb-16 text-center">
          <Link href="/" className="">
            <Button color={"primary"}>Learn More</Button>
          </Link>
        </div>
          </div>
        </div>
        </div>
        <FAQs />
        <GetInTouch />
     </div>
  );
};

export default MachinesTools;