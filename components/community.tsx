import React from "react";
import Image from "next/image";
import gallery from "../images/banner.webp";

export const Community = () => {
    return(
        <div className={"bg-background px-8 lg:h-screen"}>
          <div className={"content-center font-helvetica p-5 lg:px-72"}>
            <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Maker Community.</h1>
            <p className={"text-BodyText text-textColor text-center font-helvetica font-normal"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          </div>
          <div className="grid grid-cols-3 space-x-2 lg:space-x-10 rounded-md py-16 lg:mx-40">
          <div className="rounded-md lg:mt-40 ">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          <div className="mt-10 lg:mt-24 rounded-md">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          <div className="mt-20 lg:mt-8 rounded-md">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          </div>
          <div className="py-20">
    <hr className="flex-grow h-[1px] bg-[#A1A1AA] border-0 mx-40 hidden lg:flex xl:flex"></hr>
  </div>
       </div>
    );
  };
  
