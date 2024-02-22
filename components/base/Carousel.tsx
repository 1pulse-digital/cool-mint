'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import gallery from "../../images/banner.webp"


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Carousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="bg-custom-background px-6">
      <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
      <div className="embla__slide flex-shrink-0 flex-grow-0 w-full min-w-0 flex space-x-1">

      <Tabs>
      <div>
    <TabList className="flex ">
      
      <Tab className="bg-custom-background"> 
      <div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"100"}
             height="100"
           /></div></Tab>
      <Tab><div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"100"}
             height="100"
           /></div></Tab>
            <Tab><div>
            <Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-lg"
             width={"100"}
             height="100"
           /></div></Tab>
           
    </TabList>
    </div>
    <TabPanel>
      <h2 className="text-primary"><div className="bg-[#2c3033] rounded-xl my-10">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Parson</h3>
             <span className="text-primary font-helvetica text-sm py-2 pb-6">Position</span>
             <span className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with real content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as fill text.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             ready-made text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </span>
             </div>
           </div></h2>
    </TabPanel>
    <TabPanel>
      <h2 className="text-primary"><div className="bg-[#2c3033] rounded-xl my-10">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Peter</h3>
             <span className="text-primary font-helvetica text-sm py-2 pb-6">Position</span>
             <span className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with real content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as fill text.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             ready-made text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </span>
             </div>
           </div></h2>
    </TabPanel>
    <TabPanel>
      <h2 className="text-primary"><div className="bg-[#2c3033] rounded-xl my-10">
        <div className="rounded-md"><Image
             src={gallery}
             alt="team member"
             placeholder={"blur"}
             className="rounded-t-lg"
           /></div>
            <div className={"grid content-center font-helvetica p-5 sm:p-10 md:max-w-prose py-8"}>

             <h3 className={"text-BodyText text-textColor font-helvetica font-semibold text-start"}>Isaac</h3>
             <span className="text-primary font-helvetica text-sm py-2 pb-6">Position</span>
             <span className={"text-BodyText text-textColor text-start text-sm font-helvetica font-light"}>
             Dummy text is text that is used in the publishing industry or by web designers
              to occupy the space which will later be filled with real content. This is required when, 
              for example, the final text is not yet available. Dummy text is also known as fill text.
               It is said that song composers of the past used dummy texts as lyrics when writing 
               melodies in order to have a 
             ready-made text to sing with the melody. Dummy texts have been in use by typesetters
              since the 16th century.
             </span>
             </div>
           </div></h2>
    </TabPanel>
  </Tabs>
          </div>
      </div>
    </div>
    
    </div>
  )
}
 export default Carousel;