import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import PricingTable from "@/components/base/pricing-table";

const Memberships = () => {
  return(
      <div className={"grid grid-cols-1 bg-background py-12 "}>
       
        <div className={"grid content-center font-helvetica sm:p-10 md:max-w-prose px-8"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Memberships</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          We have membership options that cover all types of customers ranging from <span className="text-primary"> professionals</span> to <span className="text-primary"> hobbyists</span> .
          <br/> <br/>Our Membership model was designed to work in perfect synchronisation with your business cycle. 
          <br/><br/>Days do not have to be used in consecutive order and can be used by multiple users on the same day. Prices include VAT.
          </p>
          <p className="text-BodyText text-primary text-center font-helvetica font-normal py-8" >Prices include VAT</p>
          </div>
          <div className=" text-center pb-10 px-8"><PricingTable /></div>
        <GetInTouch />
     </div>
  );
};

export default Memberships;