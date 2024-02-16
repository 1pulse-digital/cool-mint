import React from "react";
import Link from "next/link";
import { SquareButton } from "./base/button";

interface OfferingItemProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string; 
  ImageSrc: string;
}

const OfferingItem: React.FC<OfferingItemProps> = ({ title, description, linkText, linkUrl, ImageSrc }) => (
  <div className="flex space-x-8 text-sm py-6">
    <div>
      <img src={ImageSrc} alt={title} height={30} width={110} />
    </div>
    <div className="text-start">
      <p className="text-xl font-helvetica font-bold text-textColor">{title}</p>
      <p className="font-helvetica text-[14px] font-normal text-secondary">{description}</p>
      <p>
      <Link href={linkUrl}>
          <SquareButton color="primary">
            {linkText}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </SquareButton>
        </Link>
      </p>
    </div>
  </div>
);

const Offerings: React.FC = () => {
  return (
    <div className="font-medium text-primary text-center md:text-left px-10  bg-background">
      <h1 className="text-headings text-secondary font-helvetica font-bold py-4 text-center">
        Our Offerings<span className="text-primary">?</span>
      </h1>
       <div className="lg:grid grid-cols-2 lg:mx-60">
      <div className="lg:px-20">
      <OfferingItem
        title="Membership"
        description="We have membership options that cover all types of customers ranging form professionals to hobbyists."
        linkText="Learn More"
        linkUrl="/memberships" 
        ImageSrc="/icons/memberships.png"
       
      />
      </div>
      <div className="lg:px-20">
<OfferingItem
        title="Industrial Machines"
        description="We have membership options that cover all types of customers ranging form professionals to hobbyists."
        linkText="Learn More"
        linkUrl="/machines" 
        ImageSrc="/icons/machines.png"
       
      />
</div>

<div className="lg:px-20">

<OfferingItem
        title="Workshops"
        description="We have membership options that cover all types of customers ranging form professionals to hobbyists."
        linkText="Learn More"
        linkUrl="/workshops" 
        ImageSrc="/icons/workshops.png"
       
      />
</div>
<div className="lg:px-20">
<OfferingItem
        title="MIW Café"
        description="We have membership options that cover all types of customers ranging form professionals to hobbyists."
        linkText="Learn More"
        linkUrl="/cafe" 
        ImageSrc="/icons/cafe.png"
       
      />
      </div>
      </div>
    </div>
  );
};

export default Offerings;
