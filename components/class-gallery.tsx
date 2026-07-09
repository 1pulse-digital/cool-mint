"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export type GalleryImage = { url: string; description: string }

const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"

function altFor(image: GalleryImage, title: string): string {
  return image.description.trim() || title
}

export function ClassGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title: string
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="py-10">
        <div className="relative h-[480px] overflow-hidden rounded-lg">
          <Image
            src={images[0].url}
            alt={altFor(images[0], title)}
            className="object-cover"
            sizes={IMAGE_SIZES}
            fill
          />
        </div>
      </div>
    )
  }

  return (
    <div className="py-10">
      <Carousel setApi={setApi} opts={{ loop: true }} className="mx-12">
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={image.url + i}>
              <div className="relative h-[480px] overflow-hidden rounded-lg">
                <Image
                  src={image.url}
                  alt={altFor(image, title)}
                  className="object-cover"
                  sizes={IMAGE_SIZES}
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={"dot-" + image.url + i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === selected}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === selected ? "bg-primary" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  )
}
