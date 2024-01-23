import React from "react";


export const AboutUs = () => {
  return (
      <div className={"grid grid-cols-1 bg-[#e1e1e1] rounded-lg mx-10 mt-10 py-4 border border-gray-500"}>
        <div className={"grid content-center font-karla p-5 sm:p-10 md:max-w-prose"}>
          <h1 className={"text-3xl font-semibold py-4 text-center"}>About Us</h1>
          <p className={"text-gray-700 text-center font-karla text-base"}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
          </p>
          <div className="py-5">
            <a href="/about" className={"flex justify-center"}>
              <button
                type="submit" className="text-sm p-2 px-6 font-normal text-white transition duration-200 uppercase rounded-md shadow-md focus:outline-none font-karla  bg-[#bbbbbb] text-gray hover:bg-yellow-400">
                More about us
              </button>
            </a>
          </div>
        </div>
     </div>
  );
};
