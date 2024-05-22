import Link from "next/link";
import React from "react";
import { Classes } from "@/components/base/classes";
import ClassIndividual from "@/components/base/classIndividual";
import GetInTouch from "@/components/base/getInTouch";

const Workshops = () => { 
  return(
      <div className={"bg-background py-12"}>
      <div className={"grid content-center justify-center font-helvetica sm:p-10 px-8"}>
        <div className="text-xs text-foreground text-center justify-center font-helvetica font-normal inline-flex py-2">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/workshops">
          <div>Classes <span className="px-1">|</span>  </div>
          </Link>
          <Link href="/">
          <div className="text-primary">Individual Class</div>
          </Link>
          </div>
          <div className="text-center ">
            <Classes />         
          </div>
          </div>
          <div className="lg:mx-40">
     <ClassIndividual />
 
    </div>
    <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
     </div>
  );
};

export default Workshops;