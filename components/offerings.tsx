import React from "react"
import Link from "next/link"
import { SquareButton } from "./base/button"
import Image from "next/image"

interface OfferingItemProps {
  title: string
  description: string
  linkText?: string
  linkUrl?: string
  ImageSrc: string
}

const OfferingItem: React.FC<OfferingItemProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  ImageSrc,
}) => (
  <div className="flex space-x-8 py-6 text-sm">
    <div className="w-32 sm:w-20 md:w-16 lg:w-32 2xl:w-20">
      <Image src={ImageSrc} alt={title} height={30} width={110} />
    </div>
    <div className="text-start">
      <p className="font-helvetica text-xl font-bold text-muted-foreground">
        {title}
      </p>
      <p className="font-helvetica text-Body font-normal text-foreground">
        {description}
      </p>
      <span>
        {linkUrl && (
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
        )}
      </span>
    </div>
  </div>
)

const Offerings: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-primary md:h-auto lg:h-screen lg:py-0">
      <div className="">
        <h1 className="py-4 text-headings font-bold text-foreground">
          Our Offerings<span className="text-primary">?</span>
        </h1>
      </div>
      <div className="grid-cols-2 md:pt-6 lg:grid">
        <div className="lg:px-4">
          <OfferingItem
            title="Memberships"
            description="Members have flexible access to our facilities, class discounts and support from mentors through tailored packages to suit your needs."
            linkText="Learn More"
            linkUrl="/memberships"
            ImageSrc="/icons/memberships.png"
          />
        </div>
        <div className="lg:px-4">
          <OfferingItem
            title="Industrial Machines"
            description="Our workshops have a range of high-quality industrial machines, from CNC machinery to specialised equipment for all disciplines."
            linkText="Learn More"
            linkUrl="/machines"
            ImageSrc="/icons/machines.png"
          />
        </div>

        <div className="lg:px-4">
          <OfferingItem
            title="Classes"
            description="We host classes covering all tools and machinery in our workshops, led by industry experts, catering to participants from beginners to advanced levels."
            linkText="Learn More"
            linkUrl="/classes"
            ImageSrc="/icons/workshops.png"
          />
        </div>
        <div className="lg:px-4">
          <OfferingItem
            title="MIW Shop"
            description="Looking for delicious snacks and unique products? Visit our shop to find a variety of items and connect with fellow makers."
            linkText="Learn More"
            // linkUrl="/cafe"
            ImageSrc="/icons/cafe.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Offerings
