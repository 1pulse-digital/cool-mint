
import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb";
import * as mediaGallery from "../../../lib/fusion/media/gallery.pb";
import { Clock, UserRound } from "lucide-react";
import { upperFirst } from "lodash"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"

interface ClassPageProps {
  params: {
    slug: string,
  },
}

export default function Page(props: ClassPageProps) {
  const slug = props.params.slug;
  const decodedSlug = decodeURIComponent(slug);
  const styledSlug = upperFirst(decodedSlug);


  const masterClass: MasterClass = {
    name: "",
    uid: "",
    displayName: styledSlug,
    standardPrice: BigInt(1500),
    salePrice: BigInt(1000),
    duration: 30,
    presenter: "Philippe Starck",
    maxAttendees: 20,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    shortDescription: "Lorem ipsum dolor sit amet",
    tags: ["engineering", "cnc"],
    gallery: mediaGallery.Gallery.initialize(),
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
              <span>{masterClass.duration} Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserRound className="text-primary" />
              <span>{masterClass.presenter}</span>
            </div>
          </div>
          <div className="flex flex-col items-center py-10">
            <div className="text-4xl font-semibold text-primary mb-2">R {masterClass.standardPrice.toString()}</div>
            <div className="text-base text-foreground-light mb-6">Max {masterClass.maxAttendees} pax per session</div>
          </div>
          <div className="text-center max-w-2xl mx-auto text-foreground">
            <p>{masterClass.description}</p>
            <p className="text-sm text-foreground-light font-bold mt-4">*Please note that this class is not a tradesman qualification.</p>
          </div>
        </div>
        {masterClass.gallery.images.length != 0 ??
          <div className="flex justify-center items-center max-w-2xl mx-auto text-foreground">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {masterClass.gallery.images.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="pt-16 sm:pt-32 md:pt-44 lg:pt-52 xl:pt-72 2xl:pt-80">
                            <Image
                              src={item.url}
                              alt={"Gallery Image"}
                              className="rounded-lg"
                              width="600"
                              height="600"
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
        }
        <div className="py-20 lg:px-8 2xl:px-24">
          <GetInTouch />
        </div>
      </div>
    </>
  )
}
