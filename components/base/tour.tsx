"use client"
import React from "react";

import { BookingButton } from "./button";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

interface TourProps {
  tourDay?: string;
  available: boolean;
  starttime: string;
  endtime: string;
  linkUrl: string;
}

const Tour: React.FC<TourProps> = ({
  tourDay = dayjs().format("YYYY-MM-DD"),
  available,
  starttime,
  endtime,
  linkUrl,
}) => {
  const router = useRouter();

  const params = new URLSearchParams();
  params.append("tourDay", tourDay);
  params.append("startTime", starttime);
  params.append("endTime", endtime);

  const redirect = `/bookingConfirmation?${params.toString()}`;

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
            <div className="grid justify-end items-end">
                <BookingButton disabled={!available} onClick={()=>router.push(redirect)} color="primary">Book</BookingButton>
            </div>
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