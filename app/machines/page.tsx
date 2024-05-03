import React from "react";
import IndustrialMachineTools from "@/components/base/IndustrialMachineTools";
import Button from "@/components/base/button";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";
import { listMachines } from "./actions";

export default async function Page() {
  const response = await listMachines({
    filter: "",
    pageSize: 10,
    pageToken: "",
  });
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

          <div className="px-6 md:mx-16 lg:mx-48 xl:mx-40 2xl:px-52">
            <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary">
            Industrial Tools & Machines<span className="text-primary">.</span>
            </h1>
            <p className="text-center font-helvetica text-BodyText font-normal text-textColor">
            We hire a wide range of industrial machinery catering to all disciplines, such as woodworking, metalworking, engineering and CNC.  
            Each machine is <span className="text-primary">maintained to the highest standard</span> ensuring constant efficiency and precision. 
            Explore our range for hire and let us bring your project to life.
            </p>
          </div>
          <div className="text-center sm:px-6 sm:pt-10 md:px-20 lg:px-10 2xl:px-0">
            <IndustrialMachineTools machines={response.Machines} />
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
}
