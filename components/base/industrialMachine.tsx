import { Machine } from "@/lib/fusion/workshop/machine.pb";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface Spec {
  label: string;
  value: string;
}

interface SpecGroup {
  specs: Spec[];
}

interface IndustrialMachineProps {
  machine: Machine;
}

const IndustrialMachine: React.FC<IndustrialMachineProps> = ({ machine }) => {
  return (
    <div className="mb-0 rounded-xl">
      <div>
        <div className="rounded-lg bg-[#2c3033] lg:flex 2xl:mx-60">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={machine.gallery.thumbnail.url}
              alt={machine.gallery.thumbnail.description || machine.displayName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="rounded-t-lg object-cover sm:rounded-t-lg lg:rounded-l-lg"
            />
          </AspectRatio>
          <div className="rounded-lg bg-[#2c3033] p-5 py-8 sm:px-8">
            <div className={"grid text-start font-helvetica"}>
              <h3
                className={
                  "text-start font-helvetica text-BodyText font-semibold text-textColor"
                }
              >
                {machine.displayName}
              </h3>
              <p className="py-2 pb-6 font-helvetica text-xs text-primary">
                {machine.categories.join(" | ")}
              </p>
              <p
                className={
                  "text-start font-helvetica text-BodyText text-sm font-normal text-textColor"
                }
              >
                {machine.description}
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
              <div className="grid grid-cols-2 pb-4 text-start  font-helvetica">
                {machine.attributes.map((attribute, idx) => (
                  <div key={idx}>
                    <p className="font-helvetica text-xs text-primary">
                      {" "}
                      {attribute.name}:
                    </p>
                    <p className="py-2 pb-2 font-helvetica text-[10px] text-secondary">
                      {" "}
                      {attribute.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialMachine;
