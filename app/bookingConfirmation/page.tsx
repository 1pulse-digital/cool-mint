import Link from "next/link";
import React from "react";
import Button, {
  SmallButton,
  SmallButtonOrange,
} from "@/components/base/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GetInTouch from "@/components/base/getInTouch";
const BookingConfirmation = () => {
  return (
    <div className="bg-background">
      <div className={"bg-background px-8 py-12 md:mx-20 xl:mx-40 2xl:mx-80"}>
        <div className={"grid content-center font-helvetica sm:p-10 "}>
          <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/bookingConfirmation">
              <div className="text-primary">Booking Confirmation</div>
            </Link>
          </div>
          <h1
            className={
              "py-4 pb-10 text-center font-helvetica text-headings font-bold text-secondary"
            }
          >
            Booking Confirmation<span className="text-primary">.</span>
          </h1>
        </div>
        <div>
          <div className="grid-cols-2 md:grid">
            <div className="pb-2 md:mr-6">
              <Label htmlFor="name" className="mt-2 text-secondary">
                First Name
              </Label>
              <div className="mt-2">
                <Input
                  type="name"
                  id="name"
                  placeholder="Name"
                  className="block w-full placeholder:text-xs text-secondary"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-2">
              <Label htmlFor="surname" className="mt-2 text-secondary">
                Last Name
              </Label>
              <div className="mt-2">
                <Input
                  type="surname"
                  id="surname"
                  placeholder="surname"
                  className="block w-full placeholder:text-xs text-secondary"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-2 md:mr-6">
              <Label htmlFor="email" className="mt-2 text-secondary">
                Email Address
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full placeholder:text-xs text-secondary"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-2">
              <Label htmlFor="tel" className="mt-2 text-secondary">
                Contact Number
              </Label>
              <div className="mt-2">
                <Input
                  type="tel"
                  id="tel"
                  placeholder="Tel"
                  className="block w-full placeholder:text-xs text-secondary"
                ></Input>
                /
              </div>
            </div>
          </div>
          <div>
            <p
              className={
                "py-0 mb-8 text-start font-helvetica text-[14px] font-normal text-secondary"
              }
            >
              What are you interested in?
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 bg-background font-helvetica text-[14px] text-secondary space-y-2">
    {/* Checkbox Set 1 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="workshops" />
      <label
        htmlFor="workshops"
        className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Workshops
      </label>
    </div>

    {/* Checkbox Set 2 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="woodwork" />
      <label
        htmlFor="woodwork"
        className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Woodwork
      </label>
    </div>

    {/* Checkbox Set 3 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="metalwork" />
      <label
        htmlFor="metalwork"
        className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Metalwork
      </label>
    </div>

    {/* Checkbox Set 4 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="cnc" />
      <label
        htmlFor="cnc"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        CNC
      </label>
    </div>

    {/* Checkbox Set 5 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="engineering" />
      <label
        htmlFor="engineering"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Engineering
      </label>
    </div>

    {/* Checkbox Set 6 */}
    <div className="flex items-center space-x-2">
      <Checkbox id="memberships" />
      <label
        htmlFor="memberships"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Memberships
      </label>
    </div>
  </div>
          </div>
          <p
            className={
              "pt-8 pb-2 text-start font-helvetica text-sm font-bold text-primary"
            }
          >
            Booking information:
          </p>
          <div>
            <div className="flex flex-row space-x-10 py-1 text-start text-textColor ">
              <div>
                <p
                  className={"text-start font-helvetica text-[16px] font-bold"}
                >
                  Date:
                </p>
              </div>
              <div>
                <p
                  className={"text-start font-helvetica text-[16px] font-bold"}
                >
                  27 January 2024
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-10 py-1 text-[16px] text-textColor">
              <div>
                <span className={"font-helvetica font-bold"}>Time:</span>
              </div>
              <div>
                <span className={"font-helvetica font-bold"}>9:00 am</span>
              </div>
            </div>
            <div className="flex flex-row space-x-2 py-1 text-[16px] text-textColor">
              <div>
                <span className={"font-helvetica text-[16px] font-bold"}>
                  Location:
                </span>
              </div>
              <div>
                <span className={"font-helvetica text-[16px] font-bold"}>
                  2.5 hours
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 pt-10">
          <div className="w-80">
            <Link href="/confirmedBooking">
              <Button color="primary" className="w-full ">
                Confirm
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center font-bold">
            <Link href="/about">
              <SmallButtonOrange color="primary">
                Learn More
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
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};
export default BookingConfirmation;
