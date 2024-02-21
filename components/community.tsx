import React from "react";
import Image from "next/image";
import gallery from "../images/maker-community-img.png";

export const Community = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5 font-helvetica">
      <h1 className="py-4 text-center text-headings font-bold leading-tight text-secondary">
        Maker Community<span className="text-primary">.</span>
      </h1>
      <p className="text-center  text-BodyText font-light text-textColor xl:px-40 2xl:px-52">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna.
      </p>
      <div className="mt-10 flex justify-center rounded-md  ">
        {/* Ensure the Image component is used appropriately with your setup */}
        <Image
          src={gallery}
          alt="made in workshop"
          placeholder="blur"
          className="rounded-md"
        />
      </div>
    </div>
  );
};
