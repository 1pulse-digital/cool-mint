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
          <h1 className={"text-headings text-secondary font-helvetica font-bold py-8 text-center leading-tight"}>Verify your email address</h1>
          </div> 
          <div className="flex-row inline-flex space-x-2">
    </div>
    <div>
    <InputComponent label="Email" name="email" placeholder="HenryLevine1234" />
    <InputComponent label="Password" name="password" placeholder="********" />
    <InputComponent label="Confirm password" name="password" placeholder="********" />
    <div> <p className="text-textColor text-start font-helvetica py-3 text-xs">Verification Code:</p></div>
    <div className="flex gap-4 max-w-lg mx-auto justify-start font-[sans-serif]">
      <input type="text" placeholder="1" className="w-12 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
      <input type="text" placeholder="2" className="w-12 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
      <input type="text" placeholder="3" className="w-12 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
      <input type="text" placeholder="4" className="w-12 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
    </div>
    <div className="py-4"><Button color="primary" className="w-full mt-4">Verify</Button></div>
          </div>
    </div>
  );
};

export default Login;
