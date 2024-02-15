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
    <div className="bg-background">
      <div className={"px-8"}>
        <p className={"text-BodyText text-primary text-start font-helvetica font-bold"}>
          <span>
          </span>
        </p>
<div className="text-secondary">
<div className="grid grid-cols-2 space-x-4">
    
    <div className="pt-1">
        <p className="text-secondary">{day}</p>
       <p className="text-[14px]">{starttime} - {endtime}</p> 
        
        </div>
    <div className="grid justify-end items-end"><Link href={linkUrl}>
    <BookingButton color="primary">Book</BookingButton></Link>
    <p className="text-secondary text-center text-[10px] pt-2">{spotsleft}</p>
    </div>           
</div>
<div className="border-l-[1px] h-8 ml-[42px] border-textColor"></div>
      </div>
    </div>
    </div>
  );
};

export default IndividualWorkshop;