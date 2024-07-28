import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import React from "react"
import { ContactForm } from "./components/contact-form"

const Contact = () => {
  return (
    <div className="bg-background">
      <div className="grid grid-cols-1 py-10 sm:px-12 sm:py-20 lg:grid-cols-2 lg:space-x-10 lg:px-12 xl:px-32 2xl:px-52">
        <div className="sm:px-0 lg:mr-10 xl:mr-16 2xl:mr-32">
          <div className={"px-6 font-helvetica sm:px-0 md:px-0"}>
            <Breadcrumbs
              className="justify-start"
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Contact", href: "/contact" },
              ]}
            />
            <div className="text-start">
              <h1 className="text-headings font-bold  text-foreground">
                Contact Us<span className="text-primary">.</span>
              </h1>
            </div>

            <div>
              <div className="flex-col items-start justify-start space-y-2 py-8 text-foreground sm:space-x-0 sm:py-6">
                <div>
                  <Link
                    href="mailto:info@madeinworkshop.co.za"
                    className="2xl:pb-0"

                  >
                    <p className="inline-flex pb-1 text-Body hover:text-primary sm:pb-0 md:pr-5">
                      <Mail className="h-6 w-6 pr-2 text-primary" />
                      info@madeinworkshop.co.za
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="tel:0107451577">
                    <p className="inline-flex text-Body hover:text-primary">
                      <Phone className="h-6 w-6 pr-2 text-primary" />
                      Tel: +27 10 745 1577
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6"
                    target="_blank"
                  >
                    <span className="inline-flex text-Body hover:text-primary">
                      <MapPin className="h-6 w-6 pr-2 text-primary" />
                      10 Naaf Street, Strydompark, Randburg, Johanneburg 2169
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={"mx-6 bg-background sm:mx-0"}>
            <div className="border-0 bg-background  ">
              <div className="mapouter grayscale">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.542461931366!2d27.97206827633481!3d-26.08120535897773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95745507de8113%3A0xa12accebfd06858b!2s10%20Naaf%20St%2C%20Strydompark%2C%20Randburg%2C%202169!5e0!3m2!1sen!2sza!4v1707394967139!5m2!1sen!2sza"
                  height="300"
                  width="100%"
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-10 lg:pt-0">
          {/* <ContactForm /> */}
          <ContactForm />
        </div>
      </div>
      <div className="pb-20 sm:pb-20 md:py-0 md:pb-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
export default Contact
