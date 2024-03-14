import React from "react";
import Button from "./button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div className={"bg-background px-6 py-6 sm:px-0 md:px-0 md:py-12 lg:py-0"}>
      <div className="w-full">
        <form>
          <div className="grid-cols-2 lg:grid">
            <div className="pb-1">
              <Label htmlFor="name" className="mt-2 text-secondary">
                First Name
              </Label>
              <div className="mt-2 lg:mr-6 2xl:mr-6">
                <Input
                  type="name"
                  id="name"
                  placeholder="First Name"
                  className="block  w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-1">
              <Label htmlFor="surname" className="mt-2 text-secondary">
                Last Name
              </Label>
              <div className="mt-2">
                <Input
                  type="surname"
                  id="surname"
                  placeholder="Last Name"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset  ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-1 lg:mr-6 2xl:mr-6">
              <Label htmlFor="email" className="mt-2 text-secondary">
                Email Address
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div className="pb-1">
              <Label htmlFor="tel" className="mt-2 text-secondary">
                Contact Number
              </Label>
              <div className="mt-2">
                <Input
                  type="tel"
                  id="tel"
                  placeholder="Contact Number"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset  ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>
          </div>
          <div>
            <p
              className={
                "pb-6 text-start font-helvetica text-[14px] font-normal text-secondary"
              }
            >
              What are you interested in?
            </p>

            <div className="grid grid-cols-2 gap-1 space-y-2 bg-background font-helvetica text-[14px] text-secondary md:grid-cols-3 lg:grid-cols-3">
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
            <Label htmlFor="message" className="text-secondary">
              Message
            </Label>

            <div className="mt-2">
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="placeholder-top block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs placeholder:text-white  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 lg:py-4"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-6 text-secondary">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to our newsletter to stay in touch with the latest.
            </label>
          </div>
          <div>
            {" "}
            <Button color="primary" className="mt-6 w-1/3">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
