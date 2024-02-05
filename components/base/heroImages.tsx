import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";

export const HeroImages = () => {
 return (
  <div className="bg-background px-8">
    <div className="grid grid-cols-2 space-x-4">
    <div></div>
    <div className={"rounded-md"}>
        <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 space-x-4 mt-[-80px]">
    <div className="rounded-md">
      <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className="rounded-md"
        /></div>
    <div></div>
    </div>
  </div>
    )
}