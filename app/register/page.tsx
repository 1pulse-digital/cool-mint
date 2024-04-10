// Import the InputComponent
import Image from "next/image";
import google from "../../images/google.png";
import Button, {
  LongButton,
  SmallButtonOrange,
} from "@/components/base/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import login from "../../images/background.png";

const Register: React.FC = () => {
  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-full w-full object-cover">
            <Image
              src={login}
              alt="made in workshop"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="grid place-content-center px-8 md:px-16 2xl:mx-52 2xl:px-0">
          <div className={"grid content-center font-helvetica  md:max-w-prose"}>
            <h1
              className={
                "py-2 text-center font-helvetica text-headings font-bold text-secondary sm:text-start md:py-0 md:text-start lg:py-0"
              }
            >
              Create an account
            </h1>
          </div>
          <div className="inline-flex flex-row space-x-4">
            <div className="pt-4">
              <p
                className={
                  "text-center font-helvetica text-[14px] text-textColor"
                }
              >
                Already have an account?
              </p>
            </div>
            <div>
              <Link href="/login">
                <SmallButtonOrange className="font-bold" color="primary">
                  Login here
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
          <div className="py-4">
            <div>
              <Label htmlFor="email" className="mt-2 text-secondary">
                Email
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>
            <div>
              {" "}
              <Button color="primary" className="mt-4 w-full">
                Register with Email
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-4 py-10">
              <hr className="mx-2 h-[1px] flex-grow border-0 bg-secondary"></hr>
              <p className="font-helvetica text-xs text-textColor">
                OR CONTINUE WITH
              </p>
              <hr className="mx-2 h-[1px] flex-grow border-0 bg-secondary"></hr>
            </div>
            <Link href="/verify">
              <div className="inline-flex w-full">
                <LongButton
                  color="secondary"
                  className="flex w-full items-center justify-center"
                >
                  <p className="flex items-center">
                    <Image
                      src={google}
                      alt="google"
                      className="ml-2 mr-2 rounded-t-lg"
                      height={20}
                      width={20}
                    />
                    GOOGLE
                  </p>
                </LongButton>
              </div>
            </Link>
            <p className="py-10 text-center font-helvetica text-xs text-textColor">
              By clicking continue, you agree to our{" "}
              <Link href="/" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
