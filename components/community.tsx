import React from "react";
import Image from "next/image";
import gallery from "../images/banner.webp";

export const Community = () => {
    return(
        <div className={"bg-background px-8"}>
          <div className={"content-center font-karla p-5 sm:p-10 md:max-w-prose"}>
            <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center leading-tight"}>Maker Community.</h1>
            <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          </div>
          <div className="grid grid-cols-3 space-x-2 rounded-md py-16">
          <div className="rounded-md">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          <div className="mt-10 rounded-md">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          <div className="mt-20 rounded-md">
          <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"/>
          </div>
          </div>
       </div>
    );
  };
  
