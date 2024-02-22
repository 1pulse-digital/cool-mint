import Link from "next/link";
import React from "react";
import GetInTouch from "@/components/base/getInTouch";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";

const Workshops = () => {
  return (
    <div className={"grid grid-cols-1 bg-background lg:py-32"}>
      <div className="lg:mx-28">
        <div className={"grid content-center px-8 font-helvetica"}>
          <div className="inline-flex justify-center  font-helvetica text-xs font-light text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/workshops">
              <div className="text-primary">Workshop</div>
            </Link>
          </div>
          <h1
            className={
              "py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary"
            }
          >
            Upcoming Workshops <span className="text-primary">.</span>
          </h1>
          <span
            className={
              "text-center font-helvetica text-BodyText font-light text-textColor lg:px-96"
            }
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </span>
        </div>
        <div className="">
          <UpcomingWorkshops />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Workshops;
