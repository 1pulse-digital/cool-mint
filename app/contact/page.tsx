import { ContactForm } from "@/components/base/contactForm";
import GetInTouch from "@/components/base/getInTouch";
import Link from "next/link";
import React from "react";

 const Contact = () => {
  return(
    <div className="bg-background">
      <div className={"bg-background py-12"}>
        <div className={"grid content-center font-helvetica sm:p-10 2xl:mx-60 xl:mx-40 px-8"}>
        <div className="text-xs text-secondary  font-helvetica font-light inline-flex justify-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/">
          <div className="text-primary">Contact</div>
          </Link>
          </div>
          <h1 className={"text-headings text-secondary font-helvetica font-bold pb-4 text-center"}>Contact<span className="text-primary">.</span></h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light lg:px-40"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
          tempor invidunt ut labore et dolore magna aliquyam erat
          </p>
         <div className="text-secondary grid items-start py-16 2xl:grid-cols-2 sm:text-center lg:px-40">
         <div className="2xl:grid grid-rows-2">
         <Link href="mailto:info@madeinworkshop.co.za" className="pb-10 2xl:pb-0">
         <p className="text-[14px] pb-4 inline-flex hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-6 h-4 pr-2 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>info@madeinworkshop.co.za</p>
</Link>

<Link href="tel:0107451577">
<p className="text-[14px] pb-4 inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-6 h-4 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>Tel: +27 10 745 1577</p>
</Link>
</div>
<div>
<Link href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6" target="_blank">
         <span className="text-[14px] inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-9 h-6 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>10 Naaf Street, Strydompark, Randburg, Johanneburg 2169</span>
</Link>
</div>
         </div>
        </div>
        <div className="2xl:mx-40 text-center">
        <p className={"text-BodyText text-primary font-helvetica font-bold  text-center 2xl:text-center 2xl:text-4xl 2xl:pb-16 xl:mx-40"}>Send us a message</p>
        
    </div>
    <ContactForm />
     </div>
     <div className="bg-background border-0 py-6 px-8 2xl:px-0 ">
     <div className="mapouter grayscale 2xl:mx-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.542461931366!2d27.97206827633481!3d-26.08120535897773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95745507de8113%3A0xa12accebfd06858b!2s10%20Naaf%20St%2C%20Strydompark%2C%20Randburg%2C%202169!5e0!3m2!1sen!2sza!4v1707394967139!5m2!1sen!2sza"
            height="300"
            width="100%"
            scrolling="no"
            loading="lazy"
          ></iframe>
        </div>
        </div>
        <div className="bg-background 2xl:px-28 lg:px-6 lg:pt-20  sm:px-0 pt-8">
        <GetInTouch />
        </div>
     </div>
  );
};
export default Contact;