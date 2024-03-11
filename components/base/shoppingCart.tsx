import React from "react";
import { title } from "process";
import Image from 'next/image';


interface ShoppingCartProps {
  date: string;
  name: string;
  time: string;
  ImageSrc: string;
  price: string;
  remove: string;
  host: string;
  
}

const ShoppingCartItem: React.FC<ShoppingCartProps> = ({
  ImageSrc,
  date,
  name,
  time,
  price,
  remove,
  host,
}) => (
  <div className="flex font-helvetica space-x-2 rounded-2xl text-sm py-6 flex-wrap">
   <Image src={ImageSrc} alt={title} height={60} width={90} className="rounded-xl"  />
   <div>
    </div>
    <div className="md:flex md:space-x-40 2xl:space-x-32 py-4 sm:py-0">
    <div className="text-start">
      <span className="text-xl font-helvetica font-bold text-secondary">{name}</span>
      <div className="flex row space-x-4">
        <span className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>{time}
        </span>
        <span className="text-secondary text-xs py-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg> {date}
        </span>
        <span className="text-secondary text-xs py-1 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FDBB10" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>{host}
        </span>
      </div>
      </div>
      <div>
      <p className="font-bold text-primary text-start text-[16px] pt-2">{price} </p>
      <p className="text-textColor text-[12px] justify py-1 text-start md:text-end">{remove}</p>
      </div>
    </div>
  </div>
);

const ShoppingCart: React.FC = () => {
  return (
    <div className="grid font-medium text-primary text-center md:text-left pt-4 bg-background 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:start">
      
      <ShoppingCartItem
        ImageSrc="/icons/banner.webp"
        date="January"
        name="Workshop Name"
        time="3 hours"
        price="R1,500.00"
        remove="Remove"
        host="Henry Levine"
      />


      <ShoppingCartItem
     ImageSrc="/icons/banner.webp"
        date="February"
        name="Workshop Name"
        time="3 hours"
        price="R1,200.00"
        remove="Remove"
        host="Henry Levine"
      />
    </div>
  );
};

export default ShoppingCart;
