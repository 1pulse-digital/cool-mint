// Import the InputComponent
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
    <div className={"bg-background py-10"}>
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
      <div className="grid 2xl:mx-52 xl:mx-20 2xl:place-content-end px-8 2xl:px-0 md:px-16">
      <div className={"grid content-center font-helvetica"}>
      <h1 className={"text-headings text-secondary font-helvetica font-bold py-4 lg:py-2 md:py-0 text-center lg:text-start md:text-start"}>Verify your email address</h1>
          </div> 
          <div className="flex-row inline-flex space-x-2">
    </div>
    <div>
    <div>
           <Label htmlFor="email" className="text-secondary mt-2">Email</Label>
           <div className="mt-2">
      <Input type="email" id="email" placeholder="henry@madeinworkshop.co.za" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div>
           <Label htmlFor="surname" className="text-secondary mt-2">Password</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="*************" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>

        <div>
           <Label htmlFor="password" className="text-secondary mt-2">Confirm Password</Label>
           <div className="mt-2">
      <Input type="password" id="password" placeholder="*************" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>/
      </div>
        </div>
   
    <div> 
    <p className="text-textColor text-start font-helvetica py-3 text-xs">Verification Code:</p></div>
    <div className="flex gap-4 max-w-lg mx-auto justify-start items-start font-[sans-serif]">
    <Input type="text" id="number" placeholder="1" className="w-16 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
    <Input type="text" id="number" placeholder="2" className="w-16 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
    <Input type="text" id="number" placeholder="3" className="w-16 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
    <Input type="text" id="number" placeholder="4" className="w-16 h-20 placeholder:text-4xl placeholder:px-4 placeholder:py-4 placeholder:font-helvetica placeholder:text-white block  rounded-md border-0 border-amber-300 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-[#707070] focus:ring-2 focus:ring-inset focus:ring-background sm:leading-6 bg-background" />
    </div>
    <div className="py-4"><Button color="primary" className="w-full mt-4">Verify</Button></div>
          </div>
          </div>
          </div>
    </div>
  );
};

export default Login;
