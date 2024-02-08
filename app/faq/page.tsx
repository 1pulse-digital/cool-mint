"use client"

import Link from "next/link";
import React from "react";

export const FAQ = () => {
    return(
        <div className={"grid grid-cols-1 bg-background py-12 px-8 "}>
        <div className={"grid content-center font-helvetaica p-5 sm:p-10 md:max-w-prose"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 text-center"}>FAQ</h1>
          <p className={"text-BodyText text-textColor text-center font-helvetica font-light"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>


        <div className="pt-8">
        <div className="flex flex-auto justify-evenly border bg-[#2A2A2A] py-1 rounded-md w-full dark:border-gray-600/60 dark:text-white text-sm">
       <Link href="/">
        <button className="border-none py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="woodwork" />
            <label className="cursor-pointer" htmlFor="woodwork">Machines</label>   
        </button>
        </Link>
        <Link href="/">
        <button className="border-none px-2 py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="metalwork" />
            <label className="cursor-pointer" htmlFor="metalwork">Workshops</label>  
        </button>
        </Link>
        <Link href="/">
        <button className="text-white px-2 py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="engineering" /> 
            <label className="cursor-pointer" htmlFor="engineering">General</label>
        </button>
        </Link>
    </div>  
    </div> 
     </div>
    )
}

export default FAQ;