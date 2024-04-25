import React from "react";
import Image from "next/image";
import gallery from "../../images/Small-Business-Showcase-Made-In-Workshop-ppf2pfvr473a0ffmkpg74v3dum5fvs3n8zynm7rma0.png";
import Link from "next/link";
import BlogWidget from "@/components/detailed/blogWidget";
import Button from "@/components/base/button";
import GetInTouch from "@/components/base/getInTouch";

const NewsTitle = () => {
  return (
    <div className={"bg-background"}>
      <div className="h-[500px] px-6 py-6 2xl:mx-40 sm:px-16">
        <Image
          src={gallery}
          alt="made in workshop"
          className="rounded-md"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="grid items-center justify-center px-8 sm:px-4 2xl:mx-40">
        <div className={"grid content-center font-helvetica sm:p-10 "}>
          <div className="inline-flex flex-wrap items-start justify-start pb-4 font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>

            <Link href="/news">
              <div className="">
                News <span className="px-1">|</span>{" "}
              </div>
            </Link>
            <Link href="/news">
              <div className="text-primary">
                Small Business Showcase Made in Workshop
              </div>
            </Link>
          </div>
          <h1
            className={
              "text-start font-helvetica text-headings font-bold leading-tight text-secondary"
            }
          >
            Small business showcase: Made in workshop
            <span className="leading-snug text-primary">.</span>
          </h1>
          <div className="row flex space-x-4 pb-8">
            <span className="inline-flex items-center py-1 text-xs text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              Date
            </span>
            <span className="inline-flex py-1 text-xs text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Author
            </span>
          </div>
          <p
            className={
              "pb-8 text-start font-helvetica text-BodyText font-light text-textColor"
            }
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <p
            className={
              "text-start font-helvetica text-[16px] font-normal text-secondary"
            }
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum.
          </p>
          <div className="pt-12">
            <hr className="h-[1px] flex-grow border-0 bg-textColor"></hr>
          </div>
          <div>
            <h1
              className={
                "pt-10 text-start font-helvetica text-headings font-bold text-secondary"
              }
            >
              Latest News
            </h1>
          </div>
          <div className="sm:hidden">
            <div>
              <p
                className={
                  "py-2 text-start font-helvetica text-BodyText font-bold text-textColor"
                }
              >
                Article title that can go onto 2 Lines for 3
              </p>
              <div className="row flex space-x-4">
                <span className="inline-flex items-center py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  Date
                </span>
                <span className="inline-flex py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Author
                </span>
              </div>
            </div>
            <div>
              <p
                className={
                  "pt-14 text-start font-helvetica text-BodyText font-bold text-textColor"
                }
              >
                Article title that can go onto 2 Lines for 3
              </p>
              <div className="row flex space-x-4">
                <span className="inline-flex items-center py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  Date
                </span>
                <span className="inline-flex py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Author
                </span>
              </div>
            </div>
            <div>
              <p
                className={
                  "pt-14 text-start font-helvetica text-BodyText font-bold text-textColor"
                }
              >
                Article title that can go onto 2 Lines for 3
              </p>
              <div className="row flex space-x-4">
                <span className="inline-flex items-center py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  Date
                </span>
                <span className="inline-flex py-1 text-xs text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Author
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid hidden grid-cols-3 grid-cols-3 grid-cols-3 sm:block md:block lg:block lg:grid xl:block xl:grid 2xl:block 2xl:grid">
          <div>
            <BlogWidget
              imageUrl="/icons/miw.webp"
              date="3 July 2022"
              author="Henry Levine"
              title="Does South African Manufacturing Have A Problem?"
              categories={["Machines", "General"]}
              linkUrl="/newsTitle"
            />
          </div>

          <div>
            <BlogWidget
              imageUrl="/icons/made-in-workshop-building-1.webp"
              date="3 January 2024"
              author="Parson Gapa"
              title="Made In Workshop Is The Largest DIY Workshop And Makerspace In South Africa"
              categories={["News", "Workshops"]}
              linkUrl="/newsTitle"
            />
          </div>

          <div>
            <BlogWidget
              imageUrl="/icons/made-in-workshop-is-expanding.webp"
              date="3 January 2024"
              author="Parson Gapa"
              title="Made In Workshop (MIW) Is Expanding Its Equipment Offered To Its Members."
              categories={["News", "Workshops"]}
              linkUrl="/newsTitle"
            />
          </div>
        </div>
        <div className="pt-12 text-center sm:py-8 sm:pt-0 md:py-10 lg:py-20">
          <Link href="/">
            <Button color={"primary"}>Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default NewsTitle;
