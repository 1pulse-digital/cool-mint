import Link from "next/link";
import React from "react";



export const FilterButtons = () => {
  return(
      <div className={"grid grid-cols-1 bg-background py-8"}>
        <div className="w-full max-w-2xl mx-auto ">
    <p className="text-start text-xs dark:text-gray-400 pb-4">
    Filter by
    </p>
    <div className="flex flex-auto   justify-evenly border bg-[#2A2A2A] py-1 rounded-md w-full dark:border-gray-600/60 dark:text-white text-sm">

        <button className="border-none py-1 rounded-md w-full hover:bg-background">
            <input type="radio" className="hidden" id="searchMCQs" />
            <label className="cursor-pointer" htmlFor="searchMCQs">Woodwork</label>
            
        </button>

        <button className="border-none px-2 py-1 rounded-md w-full">
            <input type="radio" className="hidden" id="searchTopics" />
            <label className="cursor-pointer" htmlFor="searchTopics">Metalwork</label>
            
        </button>

        <button className="hover:bg-blue-600 text-white px-2 py-1 rounded-md w-full">
            <input type="radio" className="hidden" id="searchChapters" /> 
            <label className="cursor-pointer" htmlFor="searchChapters">Engineering</label>
        
        </button>

        

    </div>

    
</div>
     </div>
  );
};




