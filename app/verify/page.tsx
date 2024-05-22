// Import the InputComponent
import Image from "next/image";
import Button from "@/components/base/button";
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
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="grid place-content-center px-8 md:px-16 2xl:mx-52 2xl:px-0">
          <div className={"grid content-center font-helvetica"}>
            <h1
              className={
                "py-4 text-center font-helvetica text-headings font-bold text-foreground md:py-0 md:text-start lg:py-2 lg:text-start"
              }
            >
              Verify your email address
            </h1>
          </div>
          <div className="inline-flex flex-row space-x-2"></div>
          <div>
            <div>
              <Label htmlFor="email" className="mt-1 text-foreground">
                Email
              </Label>
              <div className="mt-1">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="mt-1 text-foreground">
                Password
              </Label>
              <div className="mt-1">
                <Input
                  type="password"
                  id="password"
                  placeholder="*************"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="mt-2 text-foreground">
                Confirm Password
              </Label>
              <div className="mt-1">
                <Input
                  type="password"
                  id="password"
                  placeholder="*************"
                  className="block w-full rounded-md border-0 border-amber-300 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                ></Input>
                /
              </div>
            </div>

            <div>
              <p className="py-3 text-start font-helvetica text-xs text-muted-foreground">
                Verification Code:
              </p>
            </div>
            <div className="mx-auto flex max-w-lg items-start justify-start gap-4 font-helvetica">
              <Input
                type="text"
                id="number"
                placeholder="1"
                className="block h-20 w-16 rounded-md border-0 border-amber-300 bg-background py-1.5  text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-4xl placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6"
              />
              <Input
                type="text"
                id="number"
                placeholder="2"
                className="block h-20 w-16 rounded-md border-0 border-amber-300 bg-background py-1.5  text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-4xl placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6"
              />
              <Input
                type="text"
                id="number"
                placeholder="3"
                className="block h-20 w-16 rounded-md border-0 border-amber-300 bg-background py-1.5  text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-4xl placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6"
              />
              <Input
                type="text"
                id="number"
                placeholder="4"
                className="block h-20 w-16 rounded-md border-0 border-amber-300 bg-background py-1.5  text-foreground shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-4xl placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6"
              />
            </div>
            <Link href="/">
              <div className="py-4">
                <Button color="primary" className="mt-4 w-full">
                  Verify
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
