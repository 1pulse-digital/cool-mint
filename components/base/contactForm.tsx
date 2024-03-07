import React from "react";
import Button from "./button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"


export const ContactForm = () => {

  return (
      <div className={"bg-background py-8 px-8 sm:px-0 md:px-0"}>
         <div className="w-full">
          <div className="pb-5 text-start">
         <p
            className={
              "font-helvetica font-bold text-primary 2xl:pb-4 text-3xl 2xl:text-start sm:text-4xl"
            }
          >
            Send us a message
          </p>
          </div>
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
      <Input type="email" id="email" placeholder="Email" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div className="pb-1">
           <Label htmlFor="tel" className="text-secondary mt-2">Contact Number</Label>
           <div className="mt-2">
      <Input type="tel" id="tel" placeholder="Tel" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
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

            <div className="flex lg:space-x-5 bg-background font-helvetica text-[14px] text-secondary flex-wrap space-x-4 space-y-2 ">
              <Checkbox id="workshops" />
              <label
                htmlFor="workshops"
                className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Workshops
              </label>

              <Checkbox id="woodwork" />
              <label
                htmlFor="woodwork"
                className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Woodwork
              </label>

              <Checkbox id="metalwork" />
              <label
                htmlFor="metalwork"
                className="text-sm font-medium leading-none text-secondary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Metalwork
              </label>

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

  <div className="pt-8">
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
