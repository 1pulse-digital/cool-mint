import Link from "next/link";
import React from "react";

export const FilterButtons = () => {
  return(
      <div className={"grid grid-cols-1 bg-background py-8"}>
        <div className="w-full max-w-2xl mx-auto">
    <p className="text-start text-xs dark:text-gray-400 pb-4">Filter by</p>
    <div className="flex flex-auto justify-evenly border bg-[#2A2A2A] py-1 rounded-md w-full dark:border-gray-600/60 dark:text-white text-sm">
       <Link href="/">
        <button className="border-none py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="woodwork" />
            <label className="cursor-pointer" htmlFor="woodwork">Woodwork</label>   
        </button>
        </Link>
        <Link href="/">
        <button className="border-none px-2 py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="metalwork" />
            <label className="cursor-pointer" htmlFor="metalwork">Metalwork</label>  
        </button>
        </Link>
        <Link href="/">
        <button className="text-white px-2 py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="engineering" /> 
            <label className="cursor-pointer" htmlFor="engineering">Engineering</label>
        </button>
        </Link>
    </div>   
   </div>
</div>
  );
};



