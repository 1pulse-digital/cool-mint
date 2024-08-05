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
import { Clock, UserRound } from "lucide-react"
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

  return (
    <>
      <div className={"bg-background"}>
        <div className="grid grid-cols-1 py-10 sm:py-20">
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
                {/* {masterClass.gallery.images.map((item, index) => ( */}
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
                {/* ))} */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
        <div className="px-8">
          <Suspense fallback={<UpcomingClassesLoader />}>
            <UpcomingClasses masterClass={masterClass.name}/>
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
