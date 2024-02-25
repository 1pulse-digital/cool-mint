import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import Link from "next/link";
import GetInTouch from '@/components/base/getInTouch';


const ConfirmedBooking: React.FC = () => {
  return (
    <div className={"bg-background py-32"}>
      <div className="grid content-center justify-center items-center font-helvetica  px-8">
      <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/confirmedBooking">
           <div className="text-primary">Booking Confirmed</div>
          </Link>
          </div>
          <h1 className="text-headings text-secondary font-helvetica font-bold py-8 text-center leading-tight">Booking Confirmed</h1>
          <div className="text-[#ADFA1C] flex items-center justify-center py-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
          </div>
          
  <div className="grid content-center justify-center items-center">
  <div className="flex flex-row text-primary text-center lg:space-x-60 space-x-16 py-1 pt-4">
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start"}>Date:</span>
  </div>
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start text-secondary"}>27 January 2024</span>
  </div>
    </div>
<div className="flex flex-row text-primary text-[16px] py-1 space-x-8">
 <div className="flex space-x-16 lg:space-x-60 ">
  <div>
  <span className={"font-helvetica font-bold"}>Time:</span>
  </div>
  <div className="text-end">
  <span className={"font-helvetica font-bold text-secondary"}>9:00 am</span>
  </div>
    </div>
    </div>
    <div className="flex flex-row text-primary text-start  py-1 pt-4 lg:space-x-52 space-x-8">
  <div>
  <span className={"text-[16px] font-helvetica font-bold text-start"}>Location:</span>
  </div>
  <div className="flex items-start justify-start text-secondary font-bold">
   <Link href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6" target="_blank">
         <p className="text-[16px] inline-flex items-start ">10 Naaf Street, Strydompark, Randburg, Johanneburg 2169</p>
</Link>
  </div>
    </div>
          </div>
          <div className=" pt-10">
    <div className="py-4 md:flex md:space-x-8 text-center lg:px-0 sm:text-start justify-start lg:justify-start items-start mb-20">
    <Link href="/">
<div> <Button color="primary" className="w-full ">Add to calendar</Button></div>
</Link>
<div className="flex items-center justify-center"> 
        <Link href="/">
          <SmallButtonOrange color="primary">Continue browsing
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
    </div>
          </div>
          </div>  
         
          <div className="lg:px-28">
          <GetInTouch />
          </div>
    </div>
  );
};

export default ConfirmedBooking;
