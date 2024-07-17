import { ContactForm } from "@/components/base/contactForm"
import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import Link from "next/link"
import React from "react"

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


            {/* <HeaderTitle>
              Contact Us
            </HeaderTitle> */}
            <div>
              <div className="flex-col items-start justify-start space-y-2 py-8 text-foreground sm:space-x-0 sm:py-6">
                <div>
                  <Link
                    href="mailto:info@madeinworkshop.co.za"
                    className="2xl:pb-0"
                  >
                    <p className="inline-flex pb-1 text-Body hover:text-primary sm:pb-0 md:pr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-6 w-6 pr-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      info@madeinworkshop.co.za
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="tel:0107451577">
                    <p className="inline-flex text-Body hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-6 w-6 pr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-6 pr-1 sm:w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
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
