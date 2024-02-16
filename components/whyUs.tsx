import Link from "next/link";
import React from "react";
import Button from "./base/button";


export const WhyUs = () => {
  return(
      <div className={"bg-background py-20 lg:hidden"}>
        <div className={"grid content-center font-helvetica p-5"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>Why us<span className="text-primary">?</span></h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Made In Workshop (MIW) is a shared workshop and fabrication studio. Not just a workshop with a
           collection of tools and machines but a community of like-minded fabricators, manufacturers, and designers.
          </p>
          <div className="py-8 text-center ">
          <Link href="/about">
              <Button color="primary">Learn More</Button></Link>
          </div>
        </div>
     </div>
  );
};
