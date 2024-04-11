import React from "react";
import Image, { StaticImageData } from "next/image";


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
 
}) => {
  return (
    <div className="mb-0 rounded-xl">
      <div>
        <div className="rounded-lg bg-[#2c3033] lg:flex 2xl:mx-60">
          <div className="rounded-t-lg object-cover lg:rounded-l-lg">
            <Image
              src={image}
              alt={`Machine: ${machineName}`}
              placeholder="blur"
              className="rounded-t-lg sm:rounded-t-lg lg:rounded-l-lg"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="rounded-lg bg-[#2c3033] p-5 py-8 sm:px-8">
            <div className={"grid text-start font-helvetica"}>
              <h3
                className={
                  "text-start font-helvetica text-BodyText font-semibold text-textColor"
                }
              >
                {machineName}
              </h3>
              <p className="py-2 pb-6 font-helvetica text-xs text-primary">
                {categories}
              </p>
              <p
                className={
                  "text-start font-helvetica text-BodyText text-sm font-normal text-textColor"
                }
              >
                {description}
              </p>
            </div>
            <h3
              className={
                "py-6 text-start font-helvetica text-BodyText font-semibold text-textColor"
              }
            >
              Specs
            </h3>
            <div className="space-x-10">
              {specGroups.map((specGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="grid grid-cols-2 pb-4 text-start  font-helvetica"
                >
                  {specGroup.specs.map((spec, specIndex) => (
                    <div key={specIndex}>
                      <p className="font-helvetica text-xs text-primary">
                        {" "}
                        {spec.label}:
                      </p>
                      <p className="py-2 pb-2 font-helvetica text-[10px] text-secondary">
                        {" "}
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialMachine;
