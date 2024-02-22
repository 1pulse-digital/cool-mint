import Image from 'next/image';
import google from "../../images/google.png";
import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import GetInTouch from '@/components/base/getInTouch';


const ConfirmedBooking: React.FC = () => {
  return (
    <div className={"bg-background py-32"}>
      <div className="grid content-center font-helvetica">
      <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/cart">
           <div className="text-primary">Your Cart</div>
          </Link>
          </div>
          <h1 className="text-headings text-secondary font-helvetica font-bold py-8 text-center leading-tight">Booking Confirmed</h1>
          <div className="text-[#ADFA1C] flex items-center justify-center py-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
          </div>
          
          <div className="grid justify-center items-center ">
          <div className="flex flex-row text-primary text-center  space-x-7  py-1  pt-4">
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start"}>Date:</span>
  </div>
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start"}>27 January 2024</span>
  </div>
    </div>

<div className="flex flex-row text-primary  space-x-4  text-[16px] py-1   ">
  <div>
  <span className={"font-helvetica font-bold"}>Time:</span>
  </div>
  <div className="text-end">
  <span className={"font-helvetica font-bold"}>9:00 am</span>
  </div>
    </div>
    <div className="flex flex-row text-primary text-start  py-1 space-x-4  pt-4">
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start"}>Location:</span>
  </div>
  <div className="flex items-start justify-start">
   <Link href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6" target="_blank">
         <span className="text-[14px] inline-flex items-start -pr-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-9 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>10 Naaf Street, Strydompark, Randburg, Johanneburg 2169</span>
</Link>
  </div>
    </div>
          </div>
          </div>  
    <div className="py-4 md:flex md:space-x-8 text-center  justify-center items-center mb-20">
<div> <Button color="primary" className="w-full mt-4">Add to calendar</Button></div>
<div className="flex items-center justify-center"> 
        <Link href="/register">
          <SmallButtonOrange color="primary">Continue browsing
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
          </div>
          <GetInTouch />
    </div>
  );
};

export default ConfirmedBooking;
