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

const OfferingItem: React.FC<OfferingItemProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  ImageSrc,
}) => (
  <div className="flex space-x-8 py-6 text-sm">
    <div>
      <img src={ImageSrc} alt={title} height={30} width={110} />
    </div>
    <div className="text-start">
      <p className="font-helvetica text-xl font-bold text-textColor">{title}</p>
      <p className="font-helvetica text-[14px] font-normal text-secondary">
        {description}
      </p>
      <p>
        <Link href={linkUrl}>
          <SquareButton color="primary">
            {linkText}
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
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
    <div className="flex flex-col items-center justify-center h-screen text-center text-primary md:items-start   ">
      <div className="">
        <h1 className="py-4 text-headings font-bold text-secondary">
          Our Offerings<span className="text-primary">?</span>
        </h1>
        <p className="text-center  text-BodyText font-light text-textColor pb-14 xl:px-40 2xl:px-52 ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
      </div>
      <div className="grid-cols-2 lg:grid">
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
