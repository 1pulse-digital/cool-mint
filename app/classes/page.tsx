import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { UpcomingClasses, UpcomingClassesLoader } from "@/components/classes"
import HeaderTitle from "@/components/header-title"
import { Suspense } from "react"

export default async function  Page() {
  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 py-10 sm:py-20">
        <div className={"grid content-center px-8 font-helvetica"}>
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Classes", href: "/classes" },
            ]}
          />

          <HeaderTitle
            description={
              <p>
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
            }
          >
            Upcoming Classes
          </HeaderTitle>

        </div>
        <div className="lg:mx-20 xl:mx-40">
          <Suspense fallback={<UpcomingClassesLoader />}>
            <UpcomingClasses />
          </Suspense>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

// TODO: Figure out how to remove this
export const dynamic = "force-dynamic"
