import Image from 'next/image';
import google from "../../images/google.png";
import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import GetInTouch from '@/components/base/getInTouch';


const BecomeAMember: React.FC = () => {
  return (
    <div className="bg-background">
    <div className={"py-32 px-8"}>
      <div className={"grid content-center font-helvetica"}>
      <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/news">
           <div className="text-primary">Become a member</div>
          </Link>
          </div>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-2 pb-8 text-center leading-tight"}>Become a Member<span className="text-primary">.</span></h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-normal md:px-28 sm:px-20"}>
          Membership registrations are done at Made in Workshop and includes a tour of the facilitates. 
          </p>
          <div className="text-center 2xl:mx-72">
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light pt-6 pb-4"}>
          Visit us at
          </p>
          <div className="text-secondary items-start px-12 ">
          <Link href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6" target="_blank">
         <p className="text-[14px] inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-9 h-6 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>10 Naaf Street, Strydompark, Randburg, Johanneburg 2169</p>
</Link>
          </div> 
    <div className="py-4">
    <div className="flex items-center justify-center py-4 space-x-4">
    <p className="text-textColor text-BodyText font-helvetica">OR </p>
</div>
<Link href="/bookTour">
<div className="py-2"> <Button color="primary" className="w-full lg:w-1/3 md:w-1/3 mt-4 sm:w-1/3">Book a Tour</Button></div>
</Link>
<div className="flex items-center justify-center"> 
        <Link href="/contact">
          <SmallButtonOrange color="primary">Contact us for more information
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
          </div>
          </div>  
          </div>
    </div>
    <div className="2xl:px-24 lg:px-8"><GetInTouch /></div>
    </div>
  );
};

export default BecomeAMember;
