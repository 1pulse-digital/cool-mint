import { SmallButtonOrange } from "@/components/base/button";
import Link from "next/link";
import React from "react";

function notFound() {
    return (
        <div className={"bg-background py-12 px-8 "}>
        <div className={"self-center content-center font-helvetica sm:p-10 md:max-w-prose"}>
        <span className={"text-BodyText text-primary text-center font-helvetica font-light"}>
         404
          </span>
          <h1 className={"text-headings text-foreground font-helvetica font-bold py-4 text-center"}>Page not found</h1>
          <span className={"text-BodyText text-muted-foreground text-center font-helvetica font-light"}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </span>
          <div className="py-8 text-center ">
          <Link href="/">
          <SmallButtonOrange color="primary">Continue browsing
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
          </div>
        </div>
     </div>
    )
}

export default notFound;