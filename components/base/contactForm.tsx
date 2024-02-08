
import React from "react";
import Button from "./button";


export const ContactForm = () => {

  return (
      <div className={"bg-background py-8"}>
         <div className="w-full">
            <form>
           <label>
           <div className="pb-6">
          <label htmlFor="name" className="block text-secondary font-helvetica text-sm font-medium leading-6 ">First Name</label>
          <div className="mt-2">
          <input type="text" name="name" placeholder="Henry"  className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></input> 
          </div>
        </div>
        </label>

        <label>
         <div className="pb-6">
          <label htmlFor="surname" className="block text-secondary font-helvetica text-sm font-medium leading-6">Last Name</label>
          <div className="mt-2">
          <input type="text" name="surname" placeholder="Levine" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></input> 
          </div>
        </div>
  </label>

  <label>
    <div className="pb-6">
          <label htmlFor="email" className="block text-secondary font-helvetica text-sm font-medium leading-6 ">Email Address</label>
          <div className="mt-2">
          <input type="text" name="email" placeholder="HenryLevine1234" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></input> 
          </div>
        </div>
  </label>

  <label>
  <div className="pb-6">
          <label htmlFor="tel" className="block text-secondary font-helvetica text-sm font-medium leading-6 ">Contact Number</label>
          <div className="mt-2">
          <input type="number" name="number" placeholder="0799999998" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></input> 
          </div>
        </div>
  </label>
  <div>
  <p className={"text-[14px] text-secondary font-helvetica font-normal py-4 text-start"}>What are you interested in?</p>
  <div className="bg-background text-secondary font-helvetica text-[14px]">
  <div className="flex flex-row space-x-3">
  <input type="checkbox" id="Workshops" name="Workshops" value="workshops" className="bg-background"/>
  <label htmlFor="workshops"> Workshops</label><br/>
  <input type="checkbox" id="woodwork" name="Woodwork" value="woodwork"/>
  <label htmlFor="woodwork"> Woodwork</label><br />
  <input type="checkbox" id="metalwork" name="metalwork" value="metalwork"/>
  <label htmlFor="metalwork">Metalwork</label>
  </div>

  <div className="flex flex-row space-x-4 py-4">
  <input type="checkbox" id="cnc" name="cnc" value="cnc" className="bg-background"/>
  <label htmlFor="cnc">CNC</label><br/>
  <input type="checkbox" id="engineering" name="engineering" value="engineering"/>
  <label htmlFor="engineering">Engineering</label><br />
  <input type="checkbox" id="memberships" name="memberships" value="memberships"/>
  <label htmlFor="memberships">Memberships</label>
  </div>
  </div>
  </div>
  <label>
  <div className="pt-6">
          <label htmlFor="message" className="block text-secondary font-helvetica text-sm font-medium leading-6">Message</label>
          <div className="mt-2">
          <textarea name="message" placeholder="HenryLevine1234" className="placeholder:text-xs placeholder:px-3 py-8 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300  text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></textarea>
          </div>
        </div>
  </label>
  <div> <Button color="primary" className="w-3/5 mt-6">Submit</Button></div>
</form>
          </div>
     </div>
  );
};
