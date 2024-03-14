import Image from "next/image";
import google from "../../images/google.png";
import Button, {
  LongButton,
  SmallButtonOrange,
} from "@/components/base/button";
import Link from "next/link";
import login from "../../images/background.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login: React.FC = () => {
  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-full w-full object-cover">
            <Image
              src={login}
              alt="made in workshop"
              placeholder={"blur"}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="grid place-content-center px-8 md:px-16 2xl:mx-52 2xl:px-0">
          <div className={"grid content-center font-helvetica"}>
            <h1
              className={
                "py-2 text-center font-helvetica text-headings font-bold text-secondary md:py-0 md:text-start lg:py-0 lg:text-start"
              }
            >
              Login
            </h1>
          </div>
          <div className="inline-flex flex-row space-x-2">
            <div className="pt-4">
              <p
                className={
                  "pb-6 text-center font-helvetica text-[13px] text-textColor"
                }
              >
                Don’t have an account?
              </p>
            </div>
            <div>
              <Link href="/register">
                <SmallButtonOrange color="primary" className="font-bold">
                  Create an account
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
          <div>
            <div>
              <Label htmlFor="email" className="mt-1 text-secondary">
                Email
              </Label>
              <div className="mt-1">
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
              <Label htmlFor="password" className="mt-1 text-secondary">
                Password
              </Label>
              <div className="mt-1">
                <Input
                  type="password"
                  id="password"
                  placeholder="*************"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>
            <div>
              <Link href="/register">
                <Button color="primary" className="mt-2 w-full">
                  Login
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 py-8">
              <hr className="mx-2 h-[1px] flex-grow border-0 bg-secondary"></hr>
              <span className="font-helvetica text-xs text-textColor">
                OR CONTINUE WITH
              </span>
              <hr className="mx-2 h-[1px] flex-grow border-0 bg-secondary"></hr>
            </div>
            <Link href="/verify">
              <div className="inline-flex w-full ">
                <LongButton
                  color="secondary"
                  className="flex w-full items-center justify-center"
                >
                  <p className="flex items-center">
                    <Image
                      src={google}
                      alt="team member"
                      placeholder="blur"
                      className="ml-2 mr-2 rounded-t-lg"
                      height={20}
                      width={20}
                    />
                    GOOGLE
                  </p>
                </LongButton>
              </div>
            </Link>
            <p className="py-8 text-center font-helvetica text-xs text-textColor">
              By clicking continue, you agree to our{" "}
              <Link href="/" className="underline">
                Terms of Service
              </Link>
              and
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

export default Login;
