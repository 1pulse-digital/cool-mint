import React from "react";
import Link from "next/link";
import { BookingButton } from "./button";

interface TourProps {
   
    starttime: string;
    endtime: string;
    linkUrl: string; 
  }

  const Tour: React.FC<TourProps> = ({
    starttime,
    endtime,
    linkUrl,
}) => {
    const isLastItem = !linkUrl;
  return (
    <div className="bg-background">
      <div className={"px-8"}>
        <span className={"text-BodyText text-primary text-start font-helvetica font-bold "}>
          <span>
          </span>
        </span>
<div className="text-foreground">
<div className="grid grid-cols-2 space-x-4">

    <div className="pt-1">{starttime} - {endtime}</div>
    <div className="grid justify-end items-end"><Link href={linkUrl}>
    <BookingButton color="primary">Book</BookingButton></Link></div>     
</div>
<div className="pt-4 lg:block w-full pb-2">
              <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
            </div>

      </div>
    </div>
    </div>
  );
};

export default Tour;