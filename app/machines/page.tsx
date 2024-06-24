import React, { Suspense } from "react"
import IndustrialMachineTools from "@/components/base/IndustrialMachineTools"
import Link from "next/link"
import GetInTouch from "@/components/base/getInTouch"
import { listMachines } from "./actions"
import { Spinner } from "@/components/ui/spinner"
import HeaderTitle from "@/components/header-title"

export default async function Page() {
  const response = await listMachines({
    filter: "",
    pageSize: 100,
    pageToken: "",
  })
  return (
    <div className={"bg-background py-10 sm:py-20"}>
      <div className="flex h-auto">
        <div className={"grid content-center font-helvetica"}>
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-foreground">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/machines">
              <div className="text-primary">Machines</div>
            </Link>
          </div>
          <div className="px-6 sm:px-14 md:mx-16 lg:mx-48 xl:mx-40 2xl:px-52">
            <HeaderTitle>Industrial Tools & Machines</HeaderTitle>
            <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground">
              We hire a wide range of industrial machinery catering to all
              disciplines, such as woodworking, metalworking, engineering and
              CNC. Each machine is{" "}
              <span className="text-primary">
                maintained to the highest standard
              </span>{" "}
              ensuring constant efficiency and precision. Explore our range for
              hire and let us bring your project to life.
            </p>
          </div>
          <div className="text-center sm:px-6 sm:pt-10 md:px-20 lg:px-10 2xl:px-0">
            <Suspense fallback={<Spinner />}>
              <IndustrialMachineTools machines={response.Machines} />
            </Suspense>
            {/* <div className="pb-16 text-center">
              <Link href="/">
                <Button color={"primary"}>Learn More</Button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="py-10 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
