'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import gallery from "../../images/banner.webp"

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="bg-white flex-row">
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
    </div>
  )
}
 export default Carousel;