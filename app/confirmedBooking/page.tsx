import Button, {
  LongButton,
  SmallButtonOrange,
} from "@/components/base/button";
import Link from "next/link";

const ConfirmedBooking: React.FC = () => {
  return (
    <div className={"bg-background py-32"}>
      <div className="grid content-center items-center justify-center px-8  font-helvetica">
        <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-secondary">
          <Link href="/">
            <div>
              Home
              <span className="px-1">|</span>
            </div>
          </Link>
          <Link href="/confirmedBooking">
            <div className="text-primary">Booking Confirmed</div>
          </Link>
        </div>
        <h1 className="py-8 text-center font-helvetica text-headings font-bold leading-tight text-secondary">
          Booking Confirmed
        </h1>
        <div className="flex items-center justify-center py-4 text-[#ADFA1C]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>

        <div className="grid content-center items-center justify-center">
          <div className="flex flex-row space-x-16 py-1 pt-4 text-center text-primary lg:space-x-60">
            <div>
              <span
                className={"text-start font-helvetica text-[16px] font-bold"}
              >
                Date:
              </span>
            </div>
            <div>
              <span
                className={
                  "text-start font-helvetica text-[16px] font-bold text-secondary"
                }
              >
                27 January 2024
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-8 py-1 text-[16px] text-primary">
            <div className="flex space-x-16 lg:space-x-60 ">
              <div>
                <span className={"font-helvetica font-bold"}>Time:</span>
              </div>
              <div className="text-end">
                <span className={"font-helvetica font-bold text-secondary"}>
                  9:00 am
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-8 py-1  pt-4 text-start text-primary lg:space-x-52">
            <div>
              <span
                className={"text-start font-helvetica text-[16px] font-bold"}
              >
                Location:
              </span>
            </div>
            <div className="flex items-start justify-start font-bold text-secondary">
              <Link
                href="https://maps.app.goo.gl/j4SW9cavsiZCNjMT6"
                target="_blank"
              >
                <p className="inline-flex items-start text-[16px] ">
                  10 Naaf Street, Strydompark, Randburg, Johanneburg 2169
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className=" pt-10">
          <div className="mb-20 items-start justify-start py-4 text-center sm:text-start md:flex md:space-x-8 lg:justify-start lg:px-0">
            <Link href="/">
              <div>
                {" "}
                <Button color="primary" className="w-full ">
                  Add to calendar
                </Button>
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <Link href="/">
                <SmallButtonOrange color="primary">
                  Continue browsing
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
  );
};

export default ConfirmedBooking;
