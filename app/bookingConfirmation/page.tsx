"use client"
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GetInTouch from "@/components/base/getInTouch";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { bookTour } from "./actions";
import dayjs from "dayjs";

const BookingConfirmation = () => {
  const router = useRouter();

  const params = new URLSearchParams()

  const searchParams = useSearchParams()
  const tourDay = searchParams.get("tourDay")
  const startTime = searchParams.get("startTime")
  const endTime = searchParams.get("endTime")
  params.append("tourDay", tourDay ?? dayjs().format("YYYY-MM-DD"))

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [interests, setInterests] = React.useState<string[]>([])

  const handleBooking = async () => {

    if (tourDay != null && startTime != null) {
      try {
        const response = await bookTour({
          time: dayjs(tourDay + startTime).format("YYYY-MM-DD HH:mm"),
          tourist: {
            displayName: firstName + " " + lastName,
            email: email,
            phone: phoneNumber,
            interests: interests
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleInterests = (checked: boolean, interest: string) => {
    if (checked) {
      interests.includes(interest) ? interests : setInterests([...interests, interest])
    } else {
      interests.includes(interest) ? setInterests(interests.filter((item) => item !== interest)) : interests
    }
  }

  return (
    <div className="bg-background">
      <div className={"bg-background px-8 py-12 md:mx-20 xl:mx-40 2xl:mx-80"}>
        <div className={"grid content-center font-helvetica sm:p-10 "}>
          <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-foreground">
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
              "py-4 pb-10 text-center font-helvetica text-headings font-bold text-foreground"
            }
          >
            Booking Confirmation<span className="text-primary">.</span>
          </h1>
        </div>
        <div>
          <div className="grid-cols-2 md:grid">
            <div className="pb-2 md:mr-6">
              <Label htmlFor="name" className="mt-2 text-foreground">
                First Name
              </Label>
              <div className="mt-2">
                <Input
                  type="name"
                  id="name"
                  placeholder="Name"
                  className="block w-full placeholder:text-xs text-foreground"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></Input>
              </div>
            </div>

            <div className="pb-2">
              <Label htmlFor="surname" className="mt-2 text-foreground">
                Last Name
              </Label>
              <div className="mt-2">
                <Input
                  type="surname"
                  id="surname"
                  placeholder="surname"
                  className="block w-full placeholder:text-xs text-foreground"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></Input>
              </div>
            </div>

            <div className="pb-2 md:mr-6">
              <Label htmlFor="email" className="mt-2 text-foreground">
                Email Address
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full placeholder:text-xs text-foreground"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Input>
              </div>
            </div>

            <div className="pb-2">
              <Label htmlFor="tel" className="mt-2 text-foreground">
                Contact Number
              </Label>
              <div className="mt-2">
                <Input
                  type="tel"
                  id="tel"
                  placeholder="Phone Number"
                  className="block w-full placeholder:text-xs text-foreground"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                ></Input>
              </div>
            </div>
          </div>
          <div>
            <p
              className={
                "py-0 mb-8 text-start font-helvetica text-[14px] font-normal text-foreground"
              }
            >
              What are you interested in?
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 bg-background font-helvetica text-[14px] text-foreground space-y-2">
              {/* Checkbox Set 1 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="workshops"
                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "workshops")
                  }} />
                <label
                  htmlFor="workshops"
                  className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Workshops
                </label>
              </div>

              {/* Checkbox Set 2 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="woodwork"
                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "woodwork")
                  }}
                />

                <label
                  htmlFor="woodwork"
                  className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Woodwork
                </label>
              </div>

              {/* Checkbox Set 3 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="metalwork"

                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "metalwork")
                  }}
                />
                <label
                  htmlFor="metalwork"
                  className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Metalwork
                </label>
              </div>

              {/* Checkbox Set 4 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="cnc"
                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "cnc")
                  }}
                />
                <label
                  htmlFor="cnc"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CNC
                </label>
              </div>

              {/* Checkbox Set 5 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="engineering"
                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "engineering")
                  }}
                />
                <label
                  htmlFor="engineering"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Engineering
                </label>
              </div>

              {/* Checkbox Set 6 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="memberships"
                  onCheckedChange={(e: boolean) => {
                    handleInterests(e, "memberships")
                  }}
                />
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
            <div className="flex flex-row space-x-10 py-1 text-start text-muted-foreground ">
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
                  {tourDay}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-10 py-1 text-[16px] text-muted-foreground">
              <div>
                <span className={"font-helvetica font-bold"}>Time:</span>
              </div>
              <div>
                <span className={"font-helvetica font-bold"}>{startTime} - {endTime}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-2 py-1 text-[16px] text-muted-foreground">
              <div>
                <span className={"font-helvetica text-[16px] font-bold"}>
                  Location:
                </span>
              </div>
              <div>
                <span className={"font-helvetica text-[16px] font-bold"}>
                  10 Naaf Street, Strydompark, Randburg, Johanneburg 2169
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 pt-10">
          <div className="w-80">
            <Button variant="default" className="w-full"
              onClick={() => {
                handleBooking()
                router.push(`/bookingConfirmation?${params.toString()}`)
              }}
            >
              Confirm
            </Button>
          </div>
          <div className="flex items-center justify-center font-bold">
            <Link href="/about">

              <Button variant="ghost" className="text-primary">
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
              </Button>
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
