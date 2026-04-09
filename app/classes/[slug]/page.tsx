import GetInTouch from "@/components/base/getInTouch"
import { BookingCard } from "@/components/booking-card"
import { RelatedClasses } from "@/components/related-classes"
import { Skeleton } from "@/components/ui/skeleton"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { SignalHigh, Tag } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getMasterClass, upcomingSessions } from "../actions"
import { Suspense } from "react"
import { UpcomingClasses, UpcomingClassesLoader } from "@/components/classes"
import miwLogo from "../../favicon.ico"

interface ClassPageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: ClassPageProps) {
  const { slug } = params

  const masterClass = await getMasterClass({
    name: "masterClasses/" + slug,
  }).catch((error) => {
    console.error("Failed to fetch master class:", error)
    notFound()
  })

  if (!masterClass) {
    return (
      <div className="flex w-full items-center justify-center">
        <Skeleton className="h-1/3 w-1/3" />
      </div>
    )
  }

  const { sessions, sessionInfos } = await upcomingSessions({
    masterClass: masterClass.name,
    user: "",
  })

  // Sessions are already filtered by masterClass on the backend
  const masterClassSessions = sessions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )

  const firstAvailableSession = masterClassSessions.find(
    (s) => s.confirmedAttendees < masterClass.maxAttendees,
  )

  const spotsFilled = firstAvailableSession?.confirmedAttendees || 0
  const totalSpots = masterClass.maxAttendees || 6

  return (
    <>
      <div className={"bg-background"}>
        <div className="mx-auto px-6 py-12 lg:px-8 2xl:px-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Class Details */}
            <div className={"text-start lg:col-span-2"}>
              <h1 className="font-helvetica text-3xl font-bold text-foreground md:text-4xl">
                {masterClass.displayName}
              </h1>
              <p className="mt-6 font-helvetica text-base text-muted-foreground text-white md:text-lg">
                {masterClass.shortDescription}
              </p>

              {/* Tags */}
              {masterClass.tags.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground text-white">
                    <Tag className="h-4 w-4" />
                    <span>Tags</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {masterClass.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}
              <hr className="my-8 border-muted-foreground/20" />

              {/* Instructor Section */}
              <div>
                <h2 className="font-helvetica text-lg font-bold text-muted-foreground">
                  Your Instructor
                </h2>
                <div className="mt-4 flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={masterClass.presenterImage || miwLogo}
                      alt={masterClass.presenter || "Instructor"}
                      fill
                      className={
                        masterClass.presenterImage
                          ? "object-cover"
                          : "object-contain p-2"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="font-helvetica text-lg font-semibold text-foreground">
                      {masterClass.presenter || "Instructor Name"}
                    </h3>
                    {masterClass.presenterPosition && (
                      <p className="text-sm text-muted-foreground">
                        {masterClass.presenterPosition}
                      </p>
                    )}
                    {masterClass.presenterBio && (
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        {masterClass.presenterBio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <BookingCard
                masterClassName={masterClass.name}
                displayName={masterClass.displayName}
                standardPrice={masterClass.standardPrice}
                difficulty={masterClass.difficulty}
                duration={masterClass.duration}
                maxAttendees={totalSpots}
                spotsFilled={spotsFilled}
                firstAvailableSession={firstAvailableSession}
                sessionInfos={sessionInfos}
              />
            </div>
          </div>

          {/* About This Class */}
          <div className="mx-auto py-10 text-start text-foreground">
            <hr className="my-6 border-muted-foreground/20" />
            <h2 className="py-3 font-helvetica text-lg font-bold text-muted-foreground">
              About This Class
            </h2>
            <p>{masterClass.description}</p>
            <p className="text-foreground-light mt-4 text-sm font-bold">
              * Please note that this class is not a tradesman qualification.
            </p>
          </div>

          {/* Class Images */}
          {masterClass.gallery.images[0] && (
            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
              <div className="relative h-[480px] overflow-hidden rounded-lg">
                <Image
                  src={masterClass.gallery.images[0].url}
                  alt={"Gallery Image"}
                  className="object-cover"
                  fill
                />
              </div>
              {masterClass.gallery.images[1] && (
                <div className="relative h-[480px] overflow-hidden rounded-lg">
                  <Image
                    src={masterClass.gallery.images[1].url}
                    alt={"Gallery Image"}
                    className="object-cover"
                    fill
                  />
                </div>
              )}
            </div>
          )}

          {/* Choose Your Date */}
          <hr className="my-6 border-muted-foreground/20" />
          <div id="choose-date">
            <h2 className="py-3 font-helvetica text-lg font-bold text-muted-foreground">
              Choose Your Date
            </h2>
          </div>
          <div>
            <Suspense fallback={<UpcomingClassesLoader />}>
              <UpcomingClasses masterClass={masterClass.name} />
            </Suspense>
          </div>

          {/* Related Classes */}
          <hr className="my-6 border-muted-foreground/20" />
          <Suspense fallback={null}>
            <RelatedClasses
              masterClassName={masterClass.name}
              limit={4}
              title="Continue Your Learning Journey"
            />
          </Suspense>

          <hr className="my-6 border-muted-foreground/20" />
        </div>
        <div className="pb-20 sm:pb-20 md:py-0 md:pb-20 lg:px-8 2xl:px-24">
          <GetInTouch />
        </div>
      </div>
    </>
  )
}

export const dynamic = "force-dynamic"
