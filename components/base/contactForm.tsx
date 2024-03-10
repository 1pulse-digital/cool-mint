import React from "react";
import Button from "./button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"


export const ContactForm = () => {

  return (
      <div className={"bg-background px-8 sm:px-0 md:px-0 md:py-12 lg:py-0 py-6"}>
         <div className="w-full">
          
            <form>
            <div className="lg:grid grid-cols-2">
           <div className="pb-1">
           <Label htmlFor="name" className="text-secondary mt-2">First Name</Label>
           <div className="mt-2 2xl:mr-6 lg:mr-6">
      <Input type="name" id="name" placeholder="First Name" className="placeholder:text-xs  placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-1">
           <Label htmlFor="surname" className="text-secondary mt-2">Last Name</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="Last Name" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-1 2xl:mr-6 lg:mr-6">
           <Label htmlFor="email" className="text-secondary mt-2">Email Address</Label>
           <div className="mt-2">
      <Input type="email" id="email" placeholder="Email Address" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-1">
           <Label htmlFor="tel" className="text-secondary mt-2">Contact Number</Label>
           <div className="mt-2">
      <Input type="tel" id="tel" placeholder="Contact Number" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        </div>
        <div className="">
  <p
    className={
      "pb-6 text-start font-helvetica text-[14px] font-normal text-secondary"
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


  <div className="pt-8">
  <Label htmlFor="message" className="text-secondary">Message</Label>

<div className="mt-2">
      <Textarea placeholder="Type your message here." id="message" className="placeholder-top placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 lg:py-4 text-secondary shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background" />
         </div>
          </div>
          <div className="flex items-center pt-6 text-secondary space-x-2">
      <Checkbox id="newsletter" />
      <label
        htmlFor="newsletter"
        className="text-sm font-medium leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Subscribe to our newsletter to stay in touch with the latest.
      </label>
    </div>
  <div> <Button color="primary" className="w-1/3 mt-6">Submit</Button></div>
</form>
          </div>
     </div>
  );
};
