import { HeroImages } from "@/components/base/heroImages"
import { Community } from "@/components/community"
import Hero from "@/components/hero"
import { Suspense } from "react"
import GetInTouch from "@/components/base/getInTouch"
import { UpcomingClasses, UpcomingClassesLoader } from "@/components/classes"
import Offerings from "@/components/offerings"

export default async function Page() {
  return (
    <div className="bg-background">
      <div className="font-helvetica lg:px-10 2xl:px-32">
        <div className="px-8">
          <Hero />
          <div>
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <HeroImages />
          <div>
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <Offerings />
          <div>
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <Community />
          <div>
            <hr className="h-[1px] flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
          <div className="px-8 font-medium text-primary sm:px-4 md:px-8 md:text-left">
            <div className="pt-28 text-center">
              <h1 className="text-headings font-bold  text-foreground">
                Upcoming Classes<span className="text-primary">.</span>
              </h1>
              <p className="text-BodyText font-normal text-muted-foreground lg:px-40 xl:px-40 2xl:px-40">
                Whether you want to learn a{" "}
                <span className="text-primary">
                  new skill, refine your craft or meet other creative
                  individuals
                </span>
                , we have something for everyone. Check out our upcoming classes
                and book your spot today.
              </p>
            </div>
          </div>
        </div>
        <Suspense fallback={<UpcomingClassesLoader />}>
          <UpcomingClasses />
        </Suspense>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}


// TODO: Figure out how to remove this
export const dynamic = "force-dynamic"
