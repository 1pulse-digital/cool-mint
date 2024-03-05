// Import the InputComponent
import Image from 'next/image';
import google from "../../images/google.png";
import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import login from "../../images/login.png";


const Register: React.FC = () => {
  return (
    <div className={"bg-background py-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
       <div className="hidden md:block">
       <div className="object-cover w-full h-full">
            <Image src={login} alt="made in workshop" placeholder={"blur"} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
      </div>
      <div className="grid px-8 md:px-16 2xl:mx-52 2xl:place-content-center 2xl:px-0">
      <div className={"grid content-center font-helvetica  md:max-w-prose"}>
      <h1 className={"text-headings text-secondary font-helvetica font-bold py-2 lg:py-0 md:py-0 text-center sm:text-start md:text-start"}>Create an account</h1>
          </div> 
          <div className="flex-row inline-flex space-x-4">
          <div className="pt-4">
          <p className={"text-[14px] text-textColor text-center font-helvetica"}>
          Already have an account?
          </p>
            </div>
            <div> 
        <Link href="/login">
          <SmallButtonOrange className="font-bold" color="primary">Login here
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
    </div>
    <div className="py-4">
    <div>
           <Label htmlFor="email" className="text-secondary mt-2">Email</Label>
           <div className="mt-2">
      <Input type="email" id="email" placeholder="henry@madeinworkshop.co.za" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>
    <div> <Button color="primary" className="w-full mt-4">Register with Email</Button></div>
    <div className="flex items-center justify-center py-10 space-x-4">
    <hr className="flex-grow h-[1px] mx-2 bg-secondary border-0"></hr>
    <p className="text-textColor text-xs font-helvetica">OR CONTINUE WITH</p>
    <hr className="flex-grow h-[1px] mx-2 bg-secondary border-0"></hr>
</div>
 <div className="inline-flex w-full "> 
          <LongButton color="secondary" className="w-full flex items-center justify-center">
            <p className="flex items-center">
            <Image 
                src={google}
                alt="team member"
                placeholder="blur"
                className="rounded-t-lg ml-2 mr-2"
                height={20}
                width={20}
            />
            GOOGLE
        </p>
          </LongButton></div>
          <p className="text-textColor text-center font-helvetica py-10 text-xs">By clicking continue, you agree to our <Link href="/" className="underline">Terms of Service</Link> and <Link href="/" className="underline">Privacy Policy</Link>.</p>
          </div>
          </div>
          </div>
    </div>
  );
};

export default Register;
