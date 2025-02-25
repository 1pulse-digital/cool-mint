import { getPosts } from "@/app/library/posts"
import Button from "@/components/base/button"
import GetInTouch from "@/components/base/getInTouch"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notFound } from "next/navigation"


export default async function Page() {

  const posts = await getPosts()

  if (!posts) {
    notFound()
  }

  return (
    <div className={"bg-background py-10"}>
      <div className={"grid content-center font-helvetica sm:p-10"}>
        {/* <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-foreground">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/news">
            <div className="text-primary">News</div>
          </Link>
        </div> */}
        <div className="px-6 sm:px-2 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-0">
          <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
            News<span className="text-primary">.</span>
          </h1>
          <p className="text-center font-helvetica text-BodyText font-normal text-muted-foreground lg:px-20 2xl:px-72">
            Stay updated with the latest at Made in Workshop! Our blog page
            brings you the{" "}
            <span className="text-primary">
              freshest updates, stories, and insights
            </span>{" "}
            from our community, events, and the world of making.
          </p>
        </div>
{/* 
        filtering the posts by category */}
        
        <div className="py-8 text-center md:mx-0 xl:mx-20 2xl:mx-32">
          <div className="px-2">
            <span
              className={
                "px-4 text-center font-helvetica text-[12px] font-normal text-muted-foreground"
              }
            >
              Filter by
            </span>
            <Tabs defaultValue="news">
              <div className="pb-0 sm:pb-16">
                <Carousel className="mx-3 pt-3">
                  <CarouselContent className="">
                    <CarouselItem>
                      <div className="px-8 pb-8 sm:px-16 sm:pb-0 md:px-20 lg:px-20 xl:px-20 2xl:px-60">
                        <TabsList className="grid w-full grid-cols-3 bg-[#27272A] px-3 text-foreground">
                          <TabsTrigger value="news" className="">
                            News
                          </TabsTrigger>
                          <TabsTrigger value="diy">DIY</TabsTrigger>
                          <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="grid w-full space-x-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
                {posts
                  .filter((post) => post.filter === "news")
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((post) => (
                    <div key={post.slug}>
                      <TabsContent
                        className="bg-background font-helvetica"
                        value="news"
                      >
                        <Card className="border-0 bg-background">
                          <article>
                            <Link href={`/news/${post.slug}`}>
                              <div className="relative mx-4 mb-8 grid h-96 py-10 sm:py-0">
                                <Link href={`/news/${post.slug}`}>
                                  <div className="">
                                    <div className="absolute inset-0 h-full w-full">
                                      <Image
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src={post.imageUrl}
                                        alt="news"
                                        className="rounded-md"
                                      />
                                    </div>
                                    <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100"></div>
                                  </div>
                                </Link>
                                <div className="absolute bottom-0 z-10 grid h-auto w-full px-5">
                                  <div className="row flex space-x-4 py-2">
                                    <p className="inline-flex items-start py-1 text-xs text-foreground">
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
                                      {post.date}
                                    </p>
                                    <p className="inline-flex py-1 text-xs text-foreground">
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
                                      {post.author}
                                    </p>
                                  </div>
                                  <p className="pb-1 text-start font-helvetica text-[18px] font-bold leading-tight text-foreground hover:text-primary">
                                    {post.title}
                                  </p>
                                  <div className="pb-8 pt-2 text-start text-[12px] text-foreground">
                                    <p>{post.categories}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </article>
                        </Card>
                      </TabsContent>
                    </div>
                  ))}
                {posts
                  .filter((post) => post.filter === "events")
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((post) => (
                    <div key={post.slug}>
                      <TabsContent
                        className="bg-background font-helvetica"
                        value="events"
                      >
                        <Card className="border-0 bg-background">
                          <article>
                            <Link href={`/news/${post.slug}`}>
                              <div className="relative mx-4 mb-8 grid h-96 py-10 sm:py-0">
                                <Link href={`/news/${post.slug}`}>
                                  <div className="">
                                    <div className="absolute inset-0 h-full w-full">
                                      <Image
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src={post.imageUrl}
                                        alt="news"
                                        className="rounded-md"
                                      />
                                    </div>
                                    <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100"></div>
                                  </div>
                                </Link>
                                <div className="absolute bottom-0 z-10 grid h-auto w-full px-5">
                                  <div className="row flex space-x-4 py-2">
                                    <p className="inline-flex items-start py-1 text-xs text-foreground">
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
                                      {post.date}
                                    </p>
                                    <p className="inline-flex py-1 text-xs text-foreground">
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
                                      {post.author}
                                    </p>
                                  </div>
                                  <p className="pb-1 text-start font-helvetica text-[18px] font-bold leading-tight text-foreground hover:text-primary">
                                    {post.title}
                                  </p>
                                  <div className="pb-8 pt-2 text-start text-[12px] text-foreground">
                                    <p>{post.categories}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </article>
                        </Card>
                      </TabsContent>
                    </div>
                  ))}
                {posts
                  .filter((post) => post.filter === "diy")
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((post) => (
                    <div key={post.slug}>
                      <TabsContent
                        className="bg-background font-helvetica"
                        value="diy"
                      >
                        <Card className="border-0 bg-background">
                          <article>
                            <Link href={`/news/${post.slug}`}>
                              <div className="relative mx-4 mb-8 grid h-96 py-10 sm:py-0">
                                <Link href={`/news/${post.slug}`}>
                                  <div className="">
                                    <div className="absolute inset-0 h-full w-full">
                                      <Image
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src={post.imageUrl}
                                        alt="news"
                                        className="rounded-md"
                                      />
                                    </div>
                                    <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100"></div>
                                  </div>
                                </Link>
                                <div className="absolute bottom-0 z-10 grid h-auto w-full px-5">
                                  <div className="row flex space-x-4 py-2">
                                    <p className="inline-flex items-start py-1 text-xs text-foreground">
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
                                      {post.date}
                                    </p>
                                    <p className="inline-flex py-1 text-xs text-foreground">
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
                                      {post.author}
                                    </p>
                                  </div>
                                  <p className="pb-1 text-start font-helvetica text-[18px] font-bold leading-tight text-foreground hover:text-primary">
                                    {post.title}
                                  </p>
                                  <div className="pb-8 pt-2 text-start text-[12px] text-foreground">
                                    <p>{post.categories}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </article>
                        </Card>
                      </TabsContent>
                    </div>
                  ))}
              </div>
            </Tabs>
          </div>
        </div>
        {/* <div className="py-6 text-center sm:py-8 md:py-10 lg:py-8">
        <Link href="/">
        <Button color={"primary"}>Learn More</Button>
        </Link>
        </div> */}
       </div>
      <div className="py-10 sm:py-20 lg:px-8 2xl:px-24">
      <GetInTouch />
      </div>
    </div>
  )
}
