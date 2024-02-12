import React from "react";
import Image from "next/image";
import gallery from "/images/banner.webp";
import GetInTouch from "@/components/base/getInTouch";
import Carousel from "@/components/base/Carousel";

export const About = () => {
  return (
    <div className="bg-background">
      <div className="rounded-md">
        <Image
          src={gallery}
          alt="made in workshop"
          placeholder={"blur"}
          className=""
        />
      </div>
      <div
        className={
          "grid content-center p-5 font-helvetica sm:p-10 md:max-w-prose"
        }
      >
        <h1
          className={
            "py-4 text-center font-helvetica text-headings font-bold text-secondary"
          }
        >
          Where it all began.<span className="text-primary">.</span>
        </h1>
        <p
          className={
            "text-textColor text-center font-helvetica text-BodyText font-light"
          }
        >
          In 2016 Made In Workshop opened its doors with only a small laser
          cutter, 3D printers and miscellaneous hand tools and machines. As
          members came and went, Made In Workshop moulded a space that was not
          only an essential asset to our customers/members it was also their
          community.
          <br />
          <br />
          Made In Workshop is not just about the tools and machines. Made In
          Workshop is not just about the workspace.
          <br />
          <br />
          Made In Workshop is the spark of inspiration that is the culmination
          of tools, machines, workspace and the community that we are creating.
          <br />
        </p>
      </div>
      <h1 className={"text-headings text-secondary font-helvetica font-bold py-16 text-center"}>Meet the Team<span className="text-primary">.</span></h1>
      <Carousel />
      <GetInTouch />
    </div>
  );
};
export default About;
