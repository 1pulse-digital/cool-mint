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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
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
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)

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

  return (
    <div className="py-10">
      {images.length === 1 ? (
        <button
          type="button"
          className="relative block h-[480px] w-full overflow-hidden rounded-lg"
          aria-label={`View ${altFor(images[0], title)} full screen`}
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={images[0].url}
            alt={altFor(images[0], title)}
            className="object-cover"
            sizes={IMAGE_SIZES}
            fill
          />
        </button>
      ) : (
        <>
          <Carousel setApi={setApi} opts={{ loop: true }} className="mx-12">
            <CarouselContent>
              {images.map((image, i) => (
                <CarouselItem key={image.url + i}>
                  <button
                    type="button"
                    className="relative block h-[480px] w-full overflow-hidden rounded-lg"
                    aria-label={`View ${altFor(image, title)} full screen`}
                    onClick={() => setLightboxIndex(i)}
                  >
                    <Image
                      src={image.url}
                      alt={altFor(image, title)}
                      className="object-cover"
                      sizes={IMAGE_SIZES}
                      fill
                    />
                  </button>
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
                aria-current={i === selected ? "true" : undefined}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  i === selected ? "bg-primary" : "bg-muted-foreground/40",
                )}
              />
            ))}
          </div>
        </>
      )}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none">
          <VisuallyHidden asChild>
            <DialogTitle>{title} gallery</DialogTitle>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <DialogDescription>
              Full-screen view of the {title} class gallery images
            </DialogDescription>
          </VisuallyHidden>
          {lightboxIndex !== null && (
            <Carousel opts={{ startIndex: lightboxIndex, loop: true }}>
              <CarouselContent>
                {images.map((image, i) => (
                  <CarouselItem key={"lb-" + image.url + i}>
                    <div className="relative h-[80vh]">
                      <Image
                        src={image.url}
                        alt={altFor(image, title)}
                        className="object-contain"
                        sizes="100vw"
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
