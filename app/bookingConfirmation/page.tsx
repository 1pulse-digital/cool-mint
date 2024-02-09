import { ContactForm } from "@/components/base/contactForm";
import Link from "next/link";
import React from "react";
import { InputComponent } from "@/components/base/inputComponents";
import Button, { SmallButtonOrange } from "@/components/base/button";

 const BookingConfirmation = () => {
  return (
    <div>
      <div className={"bg-background py-12 px-8"}>
        <div className={"grid content-center font-helvetica sm:p-10"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 pb-10 text-center"}>Booking Confirmation</h1>
        </div>
        <div>
        <InputComponent label="First Name" name="name" placeholder="Henry" />
        <InputComponent label="Last Name" name="surname" placeholder="Levine" />
        <InputComponent label="Email" name="email" placeholder="henry@madeinworkshop.co.za" />
        <InputComponent label="Contact Number" name="tel" placeholder="0799107666" />
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
  <p className={"text-xs text-primary font-helvetica font-bold pt-10 text-start"}>Booking information:</p>
    </div>
    <div> 
        <Link href="/login">
        <div> <Button color="primary" className="w-full mt-4">Confirm</Button></div></Link>
    </div>
     </div>
     </div>
  );
};
export default BookingConfirmation;