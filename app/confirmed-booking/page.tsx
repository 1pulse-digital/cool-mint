"use client"
import React from "react";
import {
  SmallButtonOrange,
} from "@/components/base/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { addMinutes, format } from "date-fns";
import { Breadcrumbs } from "@/components/breadcrumbs";
import HeaderTitle from "@/components/header-title";
import { Check } from "lucide-react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const ConfirmedBooking: React.FC = () => {
  const searchParams = useSearchParams()
  const bookingTime = new Date(searchParams.get("time") || "")

  const bookingDay = format(bookingTime, "EEEE, MMMM d, yyyy")
  const bookingCalendarDay = format(bookingTime, "yyyy-MM-dd")
  const startTime = format(bookingTime, "HH:mm")
  const endTime = format(addMinutes(bookingTime, 30), "HH:mm")
  const location = "10 Naaf Street, Strydompark, Randburg, Johanneburg 2169"

  return (
    <div className={"bg-background py-20"}>
      <div className="grid content-center items-center justify-center px-8 font-helvetica">
        <Breadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Booking Confirmed", href: "/confirmed-booking" },
          ]}
        />
        <HeaderTitle>Booking Confirmed</HeaderTitle>
        <div className="flex items-center justify-center py-4 text-[#ADFA1C]">
          <Check size={50} />
        </div>
        <div className="grid content-center items-center place-items-center">
          <div className="">
            <div className="flex flex-row space-x-4 py-1 pt-4 text-center text-primary justify-center">
              <div>
                <span
                  className={"text-start font-helvetica text-[16px] font-bold"}
                >
                  Date:
                </span>
              </div>
              <div>
                <span
                  className={
                    "text-start font-helvetica text-[16px] font-bold text-foreground"
                  }
                >
                  {bookingDay}
                </span>
              </div>
            </div>
            <div className="flex flex-row  py-1 text-[16px] text-primary justify-center">
              <div className="flex space-x-4">
                <div>
                  <span className={"font-helvetica font-bold"}>Time:</span>
                </div>
                <div className="">
                  <span className={"font-helvetica font-bold text-foreground"}>
                    {startTime} - {endTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  py-1  pt-4  text-primary justify-center space-x-4">
              <div>
                <span
                  className={" font-helvetica text-[16px] font-bold"}
                >
                  Location:
                </span>
              </div>
              <div className="flex justify-center font-bold text-foreground flex-wrap">
                <Link
                  href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6"
                  target="_blank"
                >
                  <div className="flex flex-wrap items-center text-[16px]">
                    {location}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="mb-20 items-start justify-start py-4 text-center sm:text-start md:flex md:space-x-8 lg:justify-start lg:px-0">
              {/* TODO: BYOB: Build your own button */}
                <AddToCalendarButton
                  label="Add to calendar"
                  name="Tour of Made in Workshop"
                  startDate={bookingCalendarDay}
                  startTime={startTime}
                  endTime={endTime}
                  options={['Apple', 'Google', 'Yahoo', 'iCal']}
                  timeZone="Africa/Johannesburg"
                  location={location}
                  // TODO Description to be discussed
                  description="Thank you for booking a workshop Tour at Made In Workshop. Please visit www.madeinworkshop.co.za for more information."
                />
              <div className="flex items-center justify-center">
                <Link href="/">
                  <SmallButtonOrange color="primary">
                    Continue browsing
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </SmallButtonOrange>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
