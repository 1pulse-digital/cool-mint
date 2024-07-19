
import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { Clock, UserRound } from "lucide-react";
import { upperFirst } from "lodash"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { getMasterClass, upcomingSessions } from "../actions";
import { notFound } from "next/navigation";

interface ClassPageProps {
  params: {
    slug: string,
  },
}

export default async function Page({ params }: ClassPageProps) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const requestFriendlySlug = decodedSlug.replace(" ", "-").toLowerCase();
  const styledSlug = upperFirst(decodedSlug);

  const masterClass = await getMasterClass({
    name: "masterClasses/" + requestFriendlySlug,
  }).catch(error => {
    console.error("Failed to fetch master class:", error);
    notFound();
  });

  if (!masterClass) {
    notFound();
  }

  return (
    <>
      <div className={"bg-background"}>
        <div className="grid grid-cols-1 py-10 sm:py-20">
          <div className={"grid content-center px-8 font-helvetica"}>
            <Breadcrumbs
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Classes", href: "/classes" },
                { name: styledSlug, href: "/classes" },
              ]}
            />
            <HeaderTitle>
              {masterClass.displayName}
            </HeaderTitle>
          </div>
          <div className="flex justify-center items-center text-xl mt-2 space-x-4">
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
            <div className="text-4xl font-semibold text-primary mb-2">{moneyFormatter.format(masterClass.standardPrice / 100n)}</div>
            <div className="text-base text-foreground-light mb-6">Max {masterClass.maxAttendees} per session</div>
          </div>
          <div className="text-center max-w-2xl mx-auto text-foreground">
            <p>{masterClass.description}</p>
            <p className="text-sm text-foreground-light font-bold mt-4">*Please note that this class is not a tradesman qualification.</p>
          </div>
        </div>
        {masterClass.gallery.thumbnail.url.length !== 0 &&
          <div className="flex justify-center items-center max-w-2xl mx-auto text-foreground">
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
        }
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