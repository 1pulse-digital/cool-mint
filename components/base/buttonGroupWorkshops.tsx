import React from "react";
import Link from "next/link";
import Button, { SquareButton } from "./button";

interface ButtonGroupWorkshopsProps {
  bookLink: string;
  // learnMoreLink: string;
}

const ButtonGroupWorkshops: React.FC<ButtonGroupWorkshopsProps> = ({ bookLink }) => (
  <div className="z-10 py-5 text-right text-[16px] flex-row flex space-x-6 w-40">
    <div>
      <Link href={bookLink}>
        <Button color="primary">Book a Spot</Button>
      </Link>
    </div>
  </div>
);

export default ButtonGroupWorkshops;
