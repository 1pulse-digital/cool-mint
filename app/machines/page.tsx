import React from "react";
import IndustrialMachineTools from "@/components/base/IndustrialMachineTools";
import Button from "@/components/base/button";
import Link from "next/link";
import HeaderTitle from "@/components/base/headerTitle";
import GetInTouch from "@/components/base/getInTouch";

const MachinesTools = () => {
  return (
    <div className={"bg-background py-10 sm:py-20"}>
      <div className="flex h-auto">
        <div className={"grid content-center font-helvetica"}>
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-secondary">
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
          <HeaderTitle
            title="Industrial Tools & Machines"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
          />
          {/* header title end */}

          <div className="sm:pt-10 text-center sm:px-6 md:px-20 lg:px-32 xl:px-40 2xl:px-16">
            <IndustrialMachineTools />
            <div className="pb-16 text-center">
              <Link href="/">
                <Button color={"primary"}>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-20 py-10 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default MachinesTools;
