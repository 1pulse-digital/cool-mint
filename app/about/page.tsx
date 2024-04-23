import React from "react"
import { TeamCarousel } from "@/components/base/teamCarousel"
import Link from "next/link"
import GetInTouch from "@/components/base/getInTouch"

const About = () => {
  return (
    <div className="bg-background font-helvetica">
      <div className="lg:px-40">
        <div className="relative -mt-20 flex h-auto flex-col justify-center px-8 py-32 text-center text-primary sm:px-28 sm:py-20 md:h-screen md:px-10">
          <div className={"grid content-center  font-helvetica"}>
            <div className="inline-flex justify-center font-helvetica text-xs font-normal text-secondary">
              <Link href="/">
                <div>
                  Home
                  <span className="px-1">|</span>
                </div>
              </Link>
              <Link href="/about">
                <div className="text-primary">About</div>
              </Link>
            </div>
            <div>
              <h1
                className={
                  "py-1 text-center font-helvetica text-headings font-bold text-secondary"
                }
              >
                Where it all began
                <span className="leading-snug text-primary">.</span>
              </h1>
              <p
                className={
                  "text-center font-helvetica text-BodyText font-normal text-textColor"
                }
              >
                Since opening our doors in 2017 with just a small laser cutter,
                3D printers, and a selection of hand tools and machines,
                we&apos;ve grown into more than just a workshop; we&apos;ve
                become a pivotal part of our members&apos; lives and our
                ever-growing makerspace community. Our evolution has been deeply
                influenced by the diverse individuals who&apos;ve joined us,
                moulding our space into an essential resource and a hub of{" "}
                <span className="text-primary">creativity</span> and{" "}
                <span className="text-primary">collaboration</span>.
                <br />
                <br />
                At our core, we believe that we&apos;re not just about providing
                tools, machines, or space. We represent the spark of inspiration
                that comes to life when these resources are combined with the
                community we&apos;ve built. We are a{" "}
                <span className="text-primary">collective </span>
                 dedicated to innovation, a place where{" "}
                <span className="text-primary">creativity is nurtured</span>,
                and a makerspace community that welcomes anyone driven to
                create.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
        </div>
      </div>
      <TeamCarousel />
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
export default About
