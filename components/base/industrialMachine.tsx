// IndustrialMachine.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./button";
import Link from "next/link";

interface Spec {
  label: string;
  value: string;
}

interface SpecGroup {
  specs: Spec[];
}

interface IndustrialMachineProps {
  machineName: string;
  categories: string;
  image: StaticImageData | string;
  description: string;
  specGroups: SpecGroup[];
  buttonUrl: string;
}

const IndustrialMachine: React.FC<IndustrialMachineProps> = ({
  machineName,
  categories,
  image,
  description,
  specGroups,
  buttonUrl,
}) => {
  return (
    <div className="bg-[#2c3033] rounded-xl mb-10">
      <div className="rounded-md">
        <Image src={image} alt={`Machine: ${machineName}`} placeholder="blur" className="rounded-t-lg"/>
      </div>
      <div className="p-5">
        <div className={"grid text-start font-helvetica  sm:p-10 md:max-w-prose py-6"}>
          <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>{machineName}</h3>
          <p className="text-primary font-helvetica text-xs py-2 pb-6">{categories}</p>
          <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>{description}</p>
        </div>
        {specGroups.map((specGroup, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-2  text-start font-helvetica  sm:p-10 md:max-w-prose pb-4">
            {specGroup.specs.map((spec, specIndex) => (
              <div key={specIndex}>
                <p className="text-primary font-helvetica text-xs">{spec.label}:</p>
                <p className="text-secondary font-helvetica text-[10px] py-2 pb-2">{spec.value}</p>
              </div>
            ))}
          </div>
        ))}
        <div className="py-4 text-start">
          <Link href={buttonUrl} className="pt-8">
            <Button color={"primary"}>Book a Machine</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrialMachine;
