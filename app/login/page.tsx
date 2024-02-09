// Import the InputComponent
import Image from 'next/image';
import google from "../../images/google.png";
import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";


const Login: React.FC = () => {
  return (
    <div className={"bg-background py-12 px-8"}>
      <div className={"grid content-center font-helvetica sm:p-10 md:max-w-prose"}>
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-8 text-center"}>Login</h1>
          </div> 
          <div className="flex-row inline-flex space-x-2">
          <div className="pt-4">
          <p className={"text-[13px] text-textColor text-center font-helvetica"}>
          Don’t have an account?
          </p>
            </div>
            <div> 
        <Link href="/register">
          <SmallButtonOrange color="primary">Create an account
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
    </div>
    <div className="py-4">
    <InputComponent label="Email" name="email" placeholder="HenryLevine1234" />
    <InputComponent label="Password" name="password" placeholder="********" />
    <div> <Button color="primary" className="w-full mt-4">Login</Button></div>
    <div className="flex items-center justify-center py-10 space-x-4">
    <hr className="flex-grow h-[1px] mx-2 bg-secondary border-0"></hr>
    <p className="text-textColor text-xs font-helvetica">OR CONTINUE WITH</p>
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
          <p className="text-textColor text-center font-helvetica py-10 text-xs">By clicking continue, you agree to our <a href="/" className="underline">Terms of Service</a> and <a href="/" className="underline">Privacy Policy</a>.</p>
          </div>
    </div>
  );
};

export default Login;
