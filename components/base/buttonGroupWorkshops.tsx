import React from "react";
import Link from "next/link";
import Button, { SquareButton } from "./button";

interface ButtonGroupWorkshopsProps {
  bookLink: string;
  // learnMoreLink: string;
}

const ButtonGroupWorkshops: React.FC<ButtonGroupWorkshopsProps> = ({ bookLink }) => (
  <div className="z-10 py-5 text-right flex-row flex space-x-6 w-40">
    <div>
      <Link href={bookLink}>
        <Button color="primary">Book a Spot</Button>
      </Link>
    </div>
    {/* <div>
      <Link href={learnMoreLink}>
        <SquareButton color="primary">
          Learn More
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
    </div> */}
  </div>
);

export default ButtonGroupWorkshops;
