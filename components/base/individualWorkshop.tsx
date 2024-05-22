import React from "react";
import Link from "next/link";
import { BookingButton } from "./button";

interface IndividualWorkshopProps {
    day: string;
    starttime: string;
    endtime: string;
    linkUrl: string; 
    spotsleft: string;
  }

  const IndividualWorkshop: React.FC<IndividualWorkshopProps> = ({
    day,
    starttime,
    endtime,
    linkUrl,
    spotsleft,
}) => {
    const isLastItem = !linkUrl;
  return (
    <div className="bg-background ">
      <div className={"px-8 lg:mx-40 sm:px-32"}>
        <span className={"text-BodyText text-primary text-start font-helvetica font-bold"}>
          <span>
          </span>
        </span>
<div className="text-foreground">
<div className="grid grid-cols-2 space-x-4">
    <div className="pt-1">
        <p className="text-foreground">{day}</p>
        <div className="pt-4 lg:block w-full pb-2">
              <hr className="h-[1px] w-full flex-grow border-0 bg-[#A1A1AA]"></hr>
            </div>
       <p className="text-[14px]">{starttime} - {endtime}</p> 
        
        </div>
    <div className="grid justify-end items-end"><Link href={linkUrl}>
    <BookingButton color="primary">Book</BookingButton></Link>
    <p className="text-foreground text-center text-[10px] pt-2">{spotsleft}</p>
    </div>           
</div>
      </div>
    </div>
    </div>
  );
};

export default IndividualWorkshop;