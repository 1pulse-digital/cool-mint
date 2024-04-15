import React from "react";
import Link from "next/link";
import { SquareButton } from "./base/button";
import Image from "next/image";

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
    <div className="w-16 md:w-12 lg:w-28 2xl:w-20">
      <Image src={ImageSrc} alt={title} height={30} width={110} />
    </div>
    <div className="text-start">
      <p className="font-helvetica text-xl font-bold text-textColor">{title}</p>
      <p className="font-helvetica text-[14px] font-normal text-secondary">
        {description}
      </p>
      <span>
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
      </span>
    </div>
  </div>
);

const Offerings: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-primary md:h-auto lg:h-screen lg:py-0">
      <div className="">
        <h1 className="py-4 text-headings font-bold text-secondary">
          Our Offerings<span className="text-primary">?</span>
        </h1>
      </div>
      <div className="grid-cols-2 md:pt-6 lg:grid">
        <div className="lg:px-20">
          <OfferingItem
            title="Memberships"
            description="Our memberships provide flexible access to our facilities, exclusive discounts on classes and a community of makers and mentors to support your project. Our memberships are tailored to fit all your making needs."
            linkText="Learn More"
            linkUrl="/memberships"
            ImageSrc="/icons/memberships.png"
          />
        </div>
        <div className="lg:px-20">
          <OfferingItem
            title="Industrial Machines"
            description="From CNC machines to laser cutters to general hand tools, our shared workshops are equipped with high-quality industrial machines and tooling, ready to handle any project you bring."
            linkText="Learn More"
            linkUrl="/machines"
            ImageSrc="/icons/machines.png"
          />
        </div>

        <div className="lg:px-20">
          <OfferingItem
            title="Classes"
            description="Our classes cover a wide variety of making processes and techniques on all equipment available in the workshop. These classes are led by industry experts and range from beginner-friendly introductions to advanced skills training."
            linkText="Learn More"
            linkUrl="/classes"
            ImageSrc="/icons/workshops.png"
          />
        </div>
        <div className="lg:px-20">
          <OfferingItem
            title="MIW Café"
            description="Need a break or a place to brainstorm? Our café is the perfect spot to recharge, meet fellow makers, or enjoy a good cup of coffee."
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
