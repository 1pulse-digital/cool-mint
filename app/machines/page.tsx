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
            description="We hire industrial machines to support a wide range of projects. Our selection includes Laser Cutters, 
            3D Printers, CNC Routers, Woodworking, and Metalworking equipment, catering to beginners and seasoned professionals. 
            Each machine is maintained to the highest standards, ensuring constant efficiency and precision. 
            Explore our diverse range of industrial machines for hire, and let us help bring your project to life."
          />
          {/* header title end */}

          <div className="text-center sm:px-6 sm:pt-10 md:px-20 lg:px-10">
            <IndustrialMachineTools />
            <div className="pb-16 text-center">
              <Link href="/">
                <Button color={"primary"}>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default MachinesTools;
