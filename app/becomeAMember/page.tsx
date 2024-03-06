import Image from "next/image";
import google from "../../images/google.png";
import Button, {
  LongButton,
  SmallButtonOrange,
} from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";

const BecomeAMember: React.FC = () => {
  return (
    <div className="bg-background">
      <div className={"px-8 py-20"}>
        <div className={"grid content-center font-helvetica"}>
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>
            <Link href="/news">
              <div className="text-primary">Become a member</div>
            </Link>
          </div>
          <div>
       <HeaderTitle title=" Become a Member"
        description=" Membership registrations are done at Made in Workshop and includes a
        tour of the facilitates."
      />
      </div>
          <div className="text-center 2xl:mx-72">
            <p
              className={
                "pb-4 pt-6 text-center font-helvetica text-BodyText font-light text-textColor"
              }
            >
              Visit us at
            </p>
            <div className="items-start px-12 text-secondary ">
              <Link
                href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6"
                target="_blank"
              >
                <p className="inline-flex text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FDBB10"
                    className="h-6 w-9 pr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  10 Naaf Street, Strydompark, Randburg, Johanneburg 2169
                </p>
              </Link>
            </div>
            <div className="py-4">
              <div className="flex items-center justify-center space-x-4 py-4">
                <p className="font-helvetica text-BodyText text-textColor">
                  OR{" "}
                </p>
              </div>
              <Link href="/bookTour">
                <div className="py-2">
                  {" "}
                  <Button
                    color="primary"
                    className="mt-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3"
                  >
                    Book a Tour
                  </Button>
                </div>
              </Link>
              <div className="flex items-center justify-center">
                <Link href="/contact">
                  <SmallButtonOrange color="primary">
                    Contact us for more information
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
                  </SmallButtonOrange>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default BecomeAMember;
