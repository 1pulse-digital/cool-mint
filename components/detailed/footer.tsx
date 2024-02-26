"use client";
import React from "react";
import Button from "../base/button";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import GetInTouch from "../base/getInTouch";

export const Footer = () => {
  return (
    <div className="bg-background">
       <div className="2xl:px-24 lg:px-8 py-20"><GetInTouch /></div>
       <div className="">
            <hr className="mx-28 hidden h-[1px] flex-grow border-0 bg-[#A1A1AA] lg:flex xl:flex"></hr>
          </div>
  
  <div className="text-white sm:flex lg:space-x-52 sm:space-x-12 space-x-2  md:px-28 px-2 py-12">
  <div className="w-auto px-2 "><div>
              <div className="font-helvetica text-headings font-bold text-secondary">
                Subscribe<span className="text-primary">.</span>
              </div>
              <div className="py-2 text-[12px] text-textColor  2xl:text-base">
                Subscribe to our newsletter to stay in touch with the latest.
              </div>
              <Button color="primary" className="w-full mt-5 sm:mt-0">
                      Sign Up
                    </Button>
              </div>
              </div>

  <div className="grid grid-cols-2 px-0 space-x-4 ">
  <div><div>
              <span className="font-helvetica text-BodyText font-bold text-textColor">
                Contact
              </span>
              <div>
                <div>
                  <Link href="tel:0107451577">
                    <span className="inline-flex text-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-4 w-6 pr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      Tel: +27 10 745 1577
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:info@madeinworkshop.co.za">
                    <span className="inline-flex text-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-4 w-6 pr-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      info@madeinworkshop.co.za
                    </span>
                  </Link>
                </div>
              </div>
            </div></div>
  <div><div className="">
              <p className="font-helvetica text-BodyText font-bold text-textColor">
                Visit Us
              </p>
              <Link
                href="https://maps.app.goo.gl/SnAiLT9eKz9Z6j789"
                target="_blank"
              >
                <p className="inline-flex text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="h-6 w-12 pr-2"
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
                </p>
              </Link>
            </div></div>
  <div><div className="py-4">
              <div className="font-helvetica text-BodyText font-bold text-textColor">
                Legal
              </div>
              <Link href="/">
                <div className="pt-2 text-xs">Privacy Policy</div>
              </Link>
              <Link href="/">
                <div className="text-xs">Terms and Conditions</div>
              </Link>
            </div></div>
  <div> <div className="py-4">
              <span className="font-helvetica text-BodyText font-bold text-textColor">
                Follow Us
              </span>
              <div className="flex flex-row space-x-2 py-2">
                <div>
                  <Link
                    href="https://www.facebook.com/madeinworkshop/"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.54em"
                      height="1em"
                      viewBox="0 0 896 1664"
                    >
                      <path
                        fill="#FDBB11"
                        d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
                      />
                    </svg>{" "}
                  </Link>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>

                <div>
                  <Link
                    href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.88em"
                      height="1.2em"
                      viewBox="0 0 740 850"
                    >
                      <path
                        fill="#FDBB11"
                        d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.youtube.com/channel/UCed1ydI3MKtleCkstaAJl3Q"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4em"
                      height="1.4em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FDBB11"
                        d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div></div>

  </div>
  






</div>
   {/*  <div className="2xl:px-24 lg:px-8"><GetInTouch /></div>
      <div className="py-10 pt-20">
        <div className="h-auto px-8 font-helvetica text-secondary xl:mx-20">
          <div className="md:grid grid-cols-2 ">
            <div>
              <div className="font-helvetica text-headings font-bold text-secondary">
                Subscribe<span className="text-primary">.</span>
              </div>
              <div className="py-2 text-[12px] text-textColor  2xl:text-base">
                Subscribe to our newsletter to stay in touch with the latest.
              </div>
              </div>
            <div>
              <form>
                <div className="2xl:pt-4  mt-5 sm:mt-0">
                  <Label htmlFor="email">Email Address:</Label>
                  <div className="sm:flex w-full items-center sm:space-x-2 pt-2">
                    <Input
                      type="email"
                      placeholder="henry@madeinworkshop.co.za"
                      className="w-full"
                    />
                    <Button color="primary" className="w-full mt-5 sm:mt-0">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </form>
            </div>
           
          </div>
          <div className="pt-0 lg:pt-20">
            <hr className="mx-30 hidden h-[1px] flex-grow border-0 bg-[#A1A1AA] lg:flex xl:flex"></hr>
          </div>
          <div className="grid grid-cols-2 pt-16 2xl:grid-cols-3 2xl:pt-8 ">
            <div>
              <span className="py-2 font-helvetica text-BodyText font-bold text-textColor">
                Contact
              </span>
              <div>
                <div>
                  <Link href="tel:0107451577">
                    <span className="inline-flex text-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-4 w-6 pr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      Tel: +27 10 745 1577
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:info@madeinworkshop.co.za">
                    <span className="inline-flex text-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FDBB10"
                        className="h-4 w-6 pr-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      info@madeinworkshop.co.za
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pl-10  2xl:py-2 2xl:pl-0">
              <p className="py-2 font-helvetica text-BodyText font-bold text-textColor">
                Visit Us
              </p>
              <Link
                href="https://maps.app.goo.gl/SnAiLT9eKz9Z6j789"
                target="_blank"
              >
                <span className="inline-flex text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="h-6 w-12 pr-2"
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
            <div className="py-6 2xl:py-2 2xl:pl-0">
              <p className="font-helvetica text-BodyText font-bold text-textColor">
                Quick Links
              </p>
              <Link href="/machines">
                <p className="pt-2 text-xs">Machines</p>
              </Link>
              <Link href="/memberships">
                <p className="text-xs">Become a Member</p>
              </Link>
              <Link href="/bookTour">
                <p className="text-xs">Book a Tour</p>
              </Link>
              <Link href="/workshops">
                <p className="text-xs">Workshops</p>
              </Link>
            </div>
            <div className="py-6 pl-10 2xl:py-2 2xl:pl-0">
              <span className="font-helvetica text-BodyText font-bold text-textColor">
                Follow Us
              </span>
              <div className="flex flex-row space-x-2 py-2">
                <div>
                  <Link
                    href="https://www.facebook.com/madeinworkshop/"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.54em"
                      height="1em"
                      viewBox="0 0 896 1664"
                    >
                      <path
                        fill="#FDBB11"
                        d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
                      />
                    </svg>{" "}
                  </Link>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>

                <div>
                  <Link
                    href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.88em"
                      height="1.2em"
                      viewBox="0 0 740 850"
                    >
                      <path
                        fill="#FDBB11"
                        d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.youtube.com/channel/UCed1ydI3MKtleCkstaAJl3Q"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4em"
                      height="1.4em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FDBB11"
                        d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-4 2xl:py-2 2xl:pl-0">
              <div className="font-helvetica text-BodyText font-bold text-textColor">
                Legal
              </div>
              <Link href="/">
                <div className="pt-2 text-xs">Privacy Policy</div>
              </Link>
              <Link href="/">
                <div className="text-xs">Terms and Conditions</div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#929597] px-16 py-4 text-center text-xs">
        <div className="font-helvetica text-secondary">
          © 2024 Made in Workshop.{" "}
        </div>
        <Link
          href="https://www.1pulse.digital/"
          target="_blank"
          className="text-secondary hover:text-primary"
        >
          <div>Developed and design by 1Pulse Digital</div>
        </Link>

        {/* Scroll to Top */}
      </div>
      <div className="hidden bg-black">
        <ScrollToTop
          className="lg:mx-36"
          smooth
          component={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FDBB11"
              className="h-10 w-10 bg-background"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};
