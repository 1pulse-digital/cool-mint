import Image from 'next/image';
import google from "../../images/google.png";
import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import gallery from "../../images/banner.webp";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const Login: React.FC = () => {
  return (
    <div className={"bg-background 2xl:h-screen py-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
       <div className="hidden md:block">
        <div>
          <Image
            src={gallery}
            alt="made in workshop"
            placeholder={"blur"}
          />
        </div>
      </div>
      <div className="grid 2xl:mx-52 2xl:place-content-end px-8 2xl:px-0 md:px-16">
      <div className={"grid content-center font-helvetica"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-2 lg:py-0 md:py-0 text-center lg:text-start md:text-start"}>Login</h1>
          </div> 
          <div className="flex-row inline-flex space-x-2">
          <div className="pt-4">
          <span className={"text-[13px] text-textColor text-center font-helvetica pb-6"}>
          Don’t have an account?
          </span>
            </div>
            <div> 
        <Link href="/register">
          <SmallButtonOrange color="primary">Create an account
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
    </div>
    <div>
    <div>
           <Label htmlFor="email" className="text-secondary mt-2">Email</Label>
           <div className="mt-2">
      <Input type="email" id="email" placeholder="henry@madeinworkshop.co.za" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div>
           <Label htmlFor="password" className="text-secondary mt-2">Password</Label>
           <div className="mt-2">
      <Input type="password" id="password" placeholder="*************" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>
    <div> <Button color="primary" className="w-full mt-4">Login</Button></div>
    <div className="flex items-center justify-center py-10 space-x-4">
    <hr className="flex-grow h-[1px] mx-2 bg-secondary border-0"></hr>
    <span className="text-textColor text-xs font-helvetica">OR CONTINUE WITH</span>
    <hr className="flex-grow h-[1px] mx-2 bg-secondary border-0"></hr>
</div>
 <div className="inline-flex w-full "> 
          <LongButton color="secondary" className="w-full flex items-center justify-center">
            <span className="flex items-center">
            <Image 
                src={google}
                alt="team member"
                placeholder="blur"
                className="rounded-t-lg ml-2 mr-2"
                height={20}
                width={20}
            />
            GOOGLE
        </span>
          </LongButton></div>
          <span className="text-textColor text-center font-helvetica py-10 text-xs">By clicking continue, you agree to our <Link href="/" className="underline">Terms of Service</Link> and <Link href="/" className="underline">Privacy Policy</Link>.</span>
          </div>
          </div>
          </div>
    </div>
  );
};

export default Login;
