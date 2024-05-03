import React from "react";
import Image from "next/image";
import community from "../images/home/Maker-Community.png";

export const Community = () => {
  return (
    <div className="flex py-20 flex-col items-center justify-center p-5 font-helvetica">
      <h1 className="py-4 text-center text-headings font-bold leading-tight text-secondary">
        Makerspace Community<span className="text-primary">.</span>
      </h1>
      <span className="text-center  text-BodyText font-normal text-textColor lg:px-40 xl:px-40 2xl:px-52">
      Made in Workshop is proud to be at the forefront of the <span className="text-primary">maker movement</span>, fostering a culture of <span className="text-primary">creativity and collaboration</span>. 
      Contributing to our economy and community through innovation, entrepreneurship, and education.
      </span>
      <div className="py-10 flex justify-center rounded-md">
        <Image
          src={community}
          alt="community"
          className="rounded-md"
        />
      </div>
    </div>
  );
};
