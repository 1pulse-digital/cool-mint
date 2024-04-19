import Link from "next/link";
import React from "react";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";

const Workshops = () => {
  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 sm:py-20 py-10">
        <div className={"grid content-center px-8 font-helvetica"}>
          <div className="inline-flex justify-center font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/workshops">
              <div className="text-primary">Classes</div>
            </Link>
          </div>

          <div>
          <div className="2xl:mx-40 xl:mx-60 lg:mx-40 md:mx-16 px-6">
      <h1 className="text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight">Upcoming Classes<span className="text-primary">.</span></h1>
      <p className="text-BodyText text-textColor text-center font-helvetica font-normal 2xl:px-60">
      Our classes are geared towards <span className="text-primary">empowering and training</span> individuals to grow their skills and learn new ones. 
      We embrace the <span className="text-primary">do-it-yourself revolution</span> and host numerous classes to help you get the most out of our tools and machinery. 
      Master fundamental manufacturing skills, learn about safety and upskill  yourself and team through our hands-on learning experiences.
</p>
      
    </div>
      </div>
        </div>
        <div className="lg:mx-20 xl:mx-2">
          <UpcomingWorkshops />
        </div>        
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Workshops;
