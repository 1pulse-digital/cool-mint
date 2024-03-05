import Link from "next/link";
import React from "react";
import UpcomingWorkshops from "@/components/base/upcomingWorkshops";
import GetInTouch from "@/components/base/getInTouch";

const Workshops = () => {
  return (
    <div className={"grid grid-cols-1 bg-background py-20"}>
      <div className="lg:mx-28">
        <div className={"grid content-center px-8 font-helvetica"}>
          <div className="inline-flex justify-center font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/workshops">
              <div className="text-primary">Classes</div>
            </Link>
          </div>
          <h1
            className={
              "py-4 text-center font-helvetica text-headings font-bold leading-tight text-secondary"
            }
          >
            Upcoming Classes<span className="text-primary">.</span>
          </h1><p
            className={
              "text-center font-helvetica text-BodyText font-light text-textColor lg:px-96"
            }
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div>
          <UpcomingWorkshops />
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Workshops;
