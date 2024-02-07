import React from "react";
import Button from "../base/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <div className="bg-background py-10">
            <div className="text-secondary font-helvetica h-auto px-8">
            <div>
                <p className="text-headings text-secondary font-helvetica font-bold">Subscribe</p>
                <p className="text-secondary text-[12px] py-2">Subscribe to our newsletter to stay in touch with the latest</p>
            <div ><form>
           <label>
           <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-secondary font-helvetica text-sm font-medium leading-6 ">Email address:</label>
          <div className="mt-2">
          <input type="text" name="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></input> 
          </div>
        </div>
  </label>
  <div> <Button color="primary" className="w-full mt-4"> Sign Up</Button></div>
</form>
          </div>
          </div>
            <div className="grid grid-cols-2 pt-16  ">
                <div>
                    
                <p className="text-textColor font-helvetica font-bold text-BodyText py-2">Contact</p>
               <p className="text-[12px] inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-6 h-4 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>Tel: +27 10 745 1577</p>
               <p className="text-[12px] inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-6 h-4 pr-2 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
info@madeinworkshop.co.za</p></div>

                <div className="pl-10">
                <p className="text-textColor font-helvetica font-bold text-BodyText py-2">Visit Us</p>
               <p className="text-xs inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-12 h-6 pr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>10 Naaf Street, Strydompark, Randburg, Johanneburg 2169</p>
               
                </div>
                <div className="py-6 ">
                <p className="text-textColor font-helvetica font-bold text-BodyText ">Quick Links</p>
               <p className="text-xs pt-2">Legal</p>
               <p className="text-xs">Become a Member</p>
               <p className="text-xs">Book a Tour</p>
               <p className="text-xs">Workshops</p>

                </div>
                <div className="py-6 pl-10">
                    <p className="text-textColor font-helvetica font-bold text-BodyText">Follow Us</p>
                    <div className="flex flex-row space-x-2 py-2">
                    <p> <svg
              viewBox="0 0 24 24"
              fill="#FDBB10"
              className="w-4 h43 hover:text-secondary">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg></p>
              <p><svg
              viewBox="0 0 30 30"
              fill="#FDBB10"
              className="h-5 hover:text-secondary">
              <circle cx="15" cy="15" r="4" />
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg></p>
            <p><svg
              viewBox="0 0 30 30"
              fill="#FDBB10"
              className="h-5 hover:text-secondary">
              <circle cx="15" cy="15" r="4" />
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg></p>
            
            </div>
                </div>
                <div className="py-4">
                <p className="text-textColor font-helvetica font-bold text-BodyText">Legal</p>
               <p className="text-xs pt-2">Privacy Policy</p>
               <p className="text-xs">Terms and Conditions</p>
                </div>
            </div>  
        </div>
            </div>
            <div className="bg-[#929597] text-xs text-center py-4 px-16">
                <p className="text-secondary font-helvetica">© 2024 Made in Workshop. </p>
                <Link href="https://www.1pulse.digital/" target="_blank" className="text-secondary">
               <p>Developed and design by 1Pulse Digital</p> 
                </Link>
                
            </div>
        </div>
    )
}