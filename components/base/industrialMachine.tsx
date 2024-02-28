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
    <div className="rounded-xl mb-0">
      <div>
      <div className="lg:flex  2xl:mx-60 bg-[#2c3033]">
      <div className=" lg:rounded-l-lg object-cover">
        <Image src={image} alt={`Machine: ${machineName}`} placeholder="blur" className=" lg:rounded-l-lg"   style={{ objectFit: "cover", width: "100%", height: "100%" }}/>
      </div>
      <div className="p-5 bg-[#2c3033] sm:px-16 py-8">
        <div className={"grid text-start font-helvetica "}>
          <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>{machineName}</h3>
          <p className="text-primary font-helvetica text-xs py-2 pb-6">{categories}</p>
          <p className={"text-BodyText text-textColor text-start text-sm font-helvetica font-normal"}>{description}</p>
        </div>
        <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start py-6"}>Specs</h3>
        <div className=" space-x-10">
        {specGroups.map((specGroup, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-2 text-start font-helvetica  pb-4">
            {specGroup.specs.map((spec, specIndex) => (
              <div key={specIndex} >
                <p className="text-primary font-helvetica text-xs"> {spec.label}:</p>
                <p className="text-secondary font-helvetica text-[10px] py-2 pb-2"> {spec.value}</p>
              </div>
            ))}
          </div>
        ))}
        </div>
       {/*  <div className="py-4 text-start">
          <Link href={buttonUrl} className="pt-8">
            <Button color={"primary"}>Book a Machine</Button>
          </Link>
        </div> */}
      </div>
      </div>
      </div>
    </div>
  );
};

export default IndustrialMachine;
