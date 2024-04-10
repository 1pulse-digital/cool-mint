import React from "react";
import Image from "next/image";
import community from "../images/Maker-Community-High-Res.png";

export const Community = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5 font-helvetica">
      <h1 className="py-4 text-center text-headings font-bold leading-tight text-secondary">
        Makerspace Community<span className="text-primary">.</span>
      </h1>
      <span className="text-center  text-BodyText font-light text-textColor xl:px-40 2xl:px-52">
        The makerspace community is more than a trend; it's a movement towards
        innovation, entrepreneurship and education. Made in Workshop is proud to
        be at the forefront of this movement, fostering a culture of creativity
        and collaboration that contributes significantly to the local economy
        and community.
      </span>
      <div className="mt-10 flex justify-center rounded-md">
        <Image
          src={community}
          alt="community"
          placeholder="blur"
          className="rounded-md"
        />
      </div>
    </div>
  );
};
