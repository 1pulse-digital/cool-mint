import { FAQSBanner } from "@/components/base/faqsBanner";
import { FilterButtons } from "@/components/base/filterButtons";
import GetInTouch from "@/components/base/getInTouch";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import React from "react";

const Workshops = () => {
  return(
      <div className={"grid grid-cols-1 bg-background py-12 "}>
        <div className={"grid content-center font-helvetica sm:p-10 md:max-w-prose px-8"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Upcoming Workshops</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          </p>
          </div>
          <div className=" text-center px-8">
       
         </div>
        <UpcomingWorkshops />
        <FAQSBanner />
        <GetInTouch />
     </div>
  );
};

export default Workshops;