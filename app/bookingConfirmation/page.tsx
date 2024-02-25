import Link from "next/link";
import React from "react";
import Button, { SmallButton, SmallButtonOrange } from "@/components/base/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import GetInTouch from "@/components/base/getInTouch";
 const BookingConfirmation = () => {
  return (
    <div className="bg-background">
      <div className={"bg-background py-12 px-8 2xl:mx-80 xl:mx-40 md:mx-20"}>
        <div className={"grid content-center font-helvetica sm:p-10 "}>
        <div className="text-xs text-secondary  font-helvetica font-light inline-flex justify-center">
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
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 pb-10 text-center"}>Booking Confirmation<span className="text-primary">.</span></h1>
        </div>
        <div>
        <div className="md:grid grid-cols-2 md:space-x-5">
           <div className="pb-2">
           <Label htmlFor="name" className="text-secondary mt-2">First Name</Label>
           <div className="mt-2">
      <Input type="name" id="name" placeholder="Henry" className="placeholder:text-xs  placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-2">
           <Label htmlFor="surname" className="text-secondary mt-2">Last Name</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="Levine" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-2">
           <Label htmlFor="email" className="text-secondary mt-2">Email Address</Label>
           <div className="mt-2">
      <Input type="email" id="email" placeholder="henry@madeinworkshop.co.za" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-2">
           <Label htmlFor="tel" className="text-secondary mt-2">Contact Number</Label>
           <div className="mt-2">
      <Input type="tel" id="tel" placeholder="0007977666" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        </div>
        <div>
  <p className={"text-[14px] text-secondary font-helvetica font-normal py-8 text-start"}>What are you interested in?</p>
  
  <div className="bg-background text-secondary font-helvetica text-[14px]">
  <div className="flex flex-row  space-x-0 lg:space-x-12">

  <Checkbox id="workshops" />
      <label
        htmlFor="workshops"
        className="text-sm font-medium text-secondary px-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Workshops
      </label>

      <Checkbox id="woodwork" />
      <label
        htmlFor="woodwork"
        className="text-sm font-medium text-secondary px-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Woodwork
      </label>

      <Checkbox id="metalwork" />
      <label
        htmlFor="metalwork"
        className="text-sm font-medium text-secondary px-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Metalwork
      </label>

  </div>

  <div className="flex flex-row  space-x-3 py-4 lg:space-x-20">
  <Checkbox id="cnc" />
      <label
        htmlFor="cnc"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        CNC
      </label>

      <Checkbox id="engineering" />
      <label
        htmlFor="engineering"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Engineering
      </label>
      
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
  <p className={"text-sm text-primary font-helvetica font-bold py-6 text-start"}>Booking information:</p>
  <div className="">
   <div className="flex flex-row text-textColor text-start py-1 space-x-20 lg:space-x-80">
  <div>
  <p className={"text-[16px] font-helvetica font-bold text-start"}>Date:</p>
  </div>
  <div>
  <p className={"text-[16px] font-helvetica font-bold text-start"}>27 January 2024</p>
  </div>
    </div>
<div className="flex flex-row text-textColor space-x-20 text-[16px] py-1 lg:space-x-80">
  <div>
  <span className={"font-helvetica font-bold"}>Time:</span>
  </div>
  <div>
  <span className={"font-helvetica font-bold"}>9:00 am</span>
  </div>
    </div>
    <div className="flex flex-row text-textColor space-x-12 py-1 text-[16px] lg:space-x-72">
  <div>
  <span className={"text-[16px] font-helvetica font-bold"}>Location:</span>
  </div>
  <div>
  <span className={"text-[16px] font-helvetica font-bold"}>2.5 hours</span>
  </div>
    </div>
    </div>
    </div>
    <div className="pt-10 flex space-x-10"> 
     <div className="w-80">
        <Link href="/confirmedBooking">
         <Button color="primary" className="w-full ">Confirm</Button></Link></div>
         <div className="flex items-center justify-center font-bold"> 
        <Link href="/about">
          <SmallButtonOrange color="primary">Learn More
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
    </div>
     </div>
     <div className="2xl:px-28 lg:px-6">
     <GetInTouch />
     </div>
     </div>
  );
};
export default BookingConfirmation;