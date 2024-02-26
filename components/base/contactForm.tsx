import React from "react";
import Button from "./button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"


export const ContactForm = () => {

  return (
      <div className={"bg-background py-8 2xl:mx-60 xl:mx-40 md:mx-20 px-8"}>
         <div className="w-full">
          
            <form>
            <div className="lg:grid grid-cols-2">
           <div className="pb-2 ">
           <Label htmlFor="name" className="text-secondary mt-2">First Name</Label>
           <div className="mt-2 2xl:mr-6 xl:mr-6">
      <Input type="name" id="name" placeholder="Henry" className="placeholder:text-xs  placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-2">
           <Label htmlFor="surname" className="text-secondary mt-2">Last Name</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="Levine" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-2  2xl:mr-6  xl:mr-6">
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
  <p className={"text-[14px] text-secondary font-helvetica font-normal py-4 text-start"}>What are you interested in?</p>
  
  <div className="bg-background text-secondary font-helvetica text-[14px]">
  <div className="flex flex-row space-x-0 lg:space-x-8">

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

  <div className="flex flex-row  space-x-3 py-4 lg:space-x-2">
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

  <div className="pt-6">
  <Label htmlFor="message" className="text-secondary">Message</Label>
  <div className="mt-2">
      <Textarea placeholder="Type your message here." id="message" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 lg:py-10 text-secondary shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background" />
         </div>
          </div>
  <div> <Button color="primary" className="w-1/3 mt-6">Submit</Button></div>
</form>
          </div>
     </div>
  );
};
