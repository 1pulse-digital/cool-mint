import Link from "next/link"
import React from "react"
import {UpcomingWorkshops} from "@/components/base/upcomingWorkshops"
import GetInTouch from "@/components/base/getInTouch"
import { upcomingSessions } from "./actions"

export default async function Page() {
  const response = await upcomingSessions({})

  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 py-10 sm:py-20">
        <div className={"grid content-center px-8 font-helvetica"}>
          <div className="inline-flex justify-center font-helvetica text-xs font-normal text-foreground">
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
          <div>
            <div className="xl:mx0 px-0 sm:px-6 md:mx-16 lg:mx-40 2xl:mx-20">
              <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
                Upcoming Classes<span className="text-primary">.</span>
              </h1>
              <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground lg:px-14 2xl:px-60">
                Our classes are geared towards{" "}
                <span className="text-primary">empowering and training</span>{" "}
                individuals to grow their skills and learn new ones. We embrace
                the{" "}
                <span className="text-primary">do-it-yourself revolution</span>{" "}
                and host numerous classes to help you get the most out of our
                tools and machinery. Master fundamental manufacturing skills,
                learn about safety and upskill yourself and team through our
                hands-on learning experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mx-20 xl:mx-40">
          <UpcomingWorkshops sessions={response.sessions} masterClasses={response.masterClasses} />
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
