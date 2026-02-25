import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/header-title"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { moneyFormatter } from "@/lib/util/money-formatter"
import {
  BarChart2,
  Clock,
  Link,
  MapPin,
  SignalHigh,
  Tag,
  UserRound,
  Users,
} from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getMasterClass } from "../actions"
import { Suspense } from "react"
import { UpcomingClasses, UpcomingClassesLoader } from "@/components/classes"

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
      <div className="flex w-full  items-center justify-center">
        <Skeleton className="h-1/3 w-1/3" />
      </div>
    )
  }

  // Calculate spots filled (you can replace these with actual data)
  const spotsFilled = 3
  const totalSpots = masterClass.maxAttendees || 6
  const spotsRemaining = totalSpots - spotsFilled
  const fillPercentage = (spotsFilled / totalSpots) * 100

  // Related classes tags
  const relatedTags = [
    "Metalwork",
    "Introduction Class",
    "CNC Plasma Cutter",
    "Welding",
    "Metal Fabrication",
  ]

  return (
    <>
      <div className={"bg-background"}>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/*  New code starts */}
          <div className="grid grid-cols-1 gap-8  lg:grid-cols-3 ">
            {/* Left Column - Class Details */}
            <div className={"text-start lg:col-span-2 "}>
              <h1 className="font-helvetica text-3xl font-bold text-foreground md:text-4xl">
                {/* Title */}
                {masterClass.displayName}
              </h1>
              {/* Description */}
              <p className="mt-6 font-helvetica text-base text-muted-foreground text-white md:text-lg">
                {masterClass.shortDescription}
              </p>

              {/* Related Classes Tags */}
              <div className="mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground text-white">
                  <Tag className="h-4 w-4" />
                  <span>Related Classes</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedTags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <hr className="my-8 border-muted-foreground/20" />

                {/* Instructor Section */}
                <div>
                  <h2 className="font-helvetica text-lg font-bold text-muted-foreground">
                    Your Instructor
                  </h2>
                  <div className="mt-4 flex items-start gap-4">
                    {/* Instructor Image */}
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={
                          masterClass.gallery?.thumbnail?.url ||
                          "/placeholder-avatar.jpg"
                        }
                        alt={masterClass.presenter || "Instructor"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Instructor Info */}
                    <div>
                      <h3 className="font-helvetica text-lg font-semibold text-foreground">
                        {masterClass.presenter || "Instructor Name"}
                      </h3>
                      <p className="text-sm text-muted-foreground">CEO</p>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        Experienced instructor with expertise in this field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div
                className={
                  "rounded-lg border border-primary/10 bg-[#262626] px-6 py-6 font-helvetica"
                }
              >
                {/* Price */}
                <div className="mb-6">
                  <span className="font-helvetica text-3xl font-bold text-primary">
                    {moneyFormatter.format(masterClass.standardPrice / 100n)}
                  </span>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                {/* Class Details */}
                <div className="space-y-4">
                  {/* Difficulty */}
                  <div className="flex items-start gap-3">
                    <SignalHigh className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Difficulty
                      </p>
                      <p className="font-helvetica font-medium normal-case text-foreground">
                        {masterClass.difficulty}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Time</p>
                      <p className="font-helvetica font-medium text-foreground">
                        {masterClass.duration} Minutes
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-helvetica font-medium text-foreground">
                        10 Naaf St, Strydompark, Randburg, 2169
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">
                        Availability
                      </p>
                      <p className="font-helvetica font-medium text-foreground">
                        {spotsFilled} / {totalSpots} spots filled
                      </p>
                      {/* Progress Bar */}
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${fillPercentage}%` }}
                        />
                      </div>
                      <p className="mt-1 text-sm text-primary">
                        {spotsRemaining} spots remaining
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href={`/classes/${slug}/book`}>
                  <button className="mt-6 w-full rounded-lg bg-primary py-3 font-helvetica font-semibold text-background transition-colors hover:bg-primary/90">
                    Reserve Your Spot
                  </button>
                </a>

                {/* Cancellation Policy */}
                <p className="mt-4 text-center text-xs  text-white/80">
                  Free cancellation up to 48 hours before class
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-10 text-start text-foreground">
            {/* Divider */}
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
          <div className="grid grid-cols-2 px-20 py-10">
            {" "}
            <div className=" gap-3">
              <Image
                src={masterClass.gallery.thumbnail.url}
                alt={"Gallery Image"}
                className="rounded-lg "
                width="600"
                height="400"
              />
            </div>
            <div className="gap-3">
              <Image
                src={masterClass.gallery.thumbnail.url}
                alt={"Gallery Image"}
                className="rounded-lg "
                width="600"
                height="400"
              />
            </div>
          </div>

          <div className="px-8">
            <Suspense fallback={<UpcomingClassesLoader />}>
              <UpcomingClasses masterClass={masterClass.name} />
            </Suspense>
          </div>

          {/*  New code ends */}

          <div className={"grid content-center px-8 font-helvetica"}>
            <HeaderTitle>{masterClass.displayName}</HeaderTitle>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-4 text-xl">
            <div className="flex items-center space-x-2">
              <Clock className="text-primary" />
              <span>{masterClass.duration} Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserRound className="text-primary" />
              <span>{masterClass.presenter}</span>
            </div>
          </div>
          <div className="flex flex-col items-center py-10">
            <div className="mb-2 text-4xl font-semibold text-primary">
              {moneyFormatter.format(masterClass.standardPrice / 100n)}
            </div>
            <div className="text-foreground-light mb-6 text-base">
              Max {masterClass.maxAttendees} per session
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center text-foreground">
            <p>{masterClass.description}</p>
            <p className="text-foreground-light mt-4 text-sm font-bold">
              *Please note that this class is not a tradesman qualification.
            </p>
          </div>
        </div>
        {masterClass.gallery.thumbnail.url.length !== 0 && (
          <div className="mx-auto flex max-w-2xl items-center justify-center text-foreground">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="">
                          <Image
                            src={masterClass.gallery.thumbnail.url}
                            alt={"Gallery Image"}
                            className="rounded-lg "
                            width="400"
                            height="400"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {masterClass.gallery.images.map((item, index) => (
                  <CarouselItem key={index + 2}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="">
                            <Image
                              src={item.url}
                              alt={"Gallery Image"}
                              className="rounded-lg "
                              width="400"
                              height="400"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
        <div className="px-8">
          <Suspense fallback={<UpcomingClassesLoader />}>
            <UpcomingClasses masterClass={masterClass.name} />
          </Suspense>
        </div>
        <div className="py-20 lg:px-8 2xl:px-24">
          <GetInTouch />
        </div>
      </div>
    </>
  )
}

export const dynamic = "force-dynamic"

// TODO: FIGURE THIS OUT. THE STATIC SITE GENERATION WORKS BUT THE CACHE KEEPS KRONNING AROUND
// export async function generateStaticParams() {
//   try {
//     const { masterClasses } = await upcomingSessions({})
//     return await Promise.all(masterClasses.map(async (masterClass) => {
//       const slug = masterClass.displayName.toLowerCase().replace(/\s+/g, '-');
//       const fullMasterClass = await getMasterClass({ name: "masterClasses/" + slug });
//       return {
//         slug,
//         masterClass: fullMasterClass
//       };
//     }));
//   } catch (error) {
//     console.error("Failed to generate static params:", error)
//     return []
//   }
// }
