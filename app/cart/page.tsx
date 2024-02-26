import Button, { LongButton, SmallButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import ShoppingCart from '@/components/base/shoppingCart';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import GetInTouch from "@/components/base/getInTouch";

const Cart: React.FC = () => {
  return (
    <div className={"bg-background py-20"}>
      <div className="2xl:mx-36 xl:mx-28 px-8">
      <div className="grid content-center font-helvetica">
      <div className="text-xs text-secondary font-helvetica font-normal inline-flex justify-center items-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/cart">
           <div className="text-primary">Cart</div>
          </Link>
          </div>
          <h1 className="text-headings text-secondary font-helvetica font-bold  text-center leading-tight">Your Cart<span className="text-primary">.</span></h1>
          <ShoppingCart />       
          </div> 
          <div className="grid md:flex md:space-x-32 md:justify-center xl:space-x-24 2xl:space-x-40">
          <div className="flex space-x-12">
          
          <div className="pb-2 w-full">
           <Label htmlFor="discount" className="text-secondary mt-2">Add Discount Code:</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="disc@20" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>
      </div>
        </div>    
  <div className="flex pt-4 justify-center"> 
 <Link href="/register">
 <SmallButtonOrange color="primary">Apply
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
</div>
<div className="py-4">
<hr className="flex-grow h-[1px] bg-textColor border-0"></hr>
</div>
<div>
<div className="text-start py-2">
  <div>
  <span className={"text-BodyText font-helvetica font-bold text-start text-textColor"}>Total:</span>
  </div>
  <div>
  <span className={"text-[25px] text-primary font-helvetica font-bold text-start"}>R1,500.00</span>
  </div>
    </div>
<div className="text-[16px] text-primary pb-4 sm:pb-0">
  <div>
  <span className={"font-helvetica font-bold line-through"}>R1,700.00</span>
  </div>
</div>
</div>
</div> 

<div className="flex items-start space-x-10 xl:mx-24 2xl:mx-40 md:mx-10 lg:px-32">
<div> 
<Button color="primary" className="w-full mt-4">Proceed to Checkout</Button></div>
<div className="flex items-center justify-center py-2"> 
<Link href="/register">      
<SmallButtonOrange color="primary" className="font-helvetica font-bold">Continue Shopping
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
     </div>
     </div>
     <div className="2xl:px-24 lg:px-8 lg:pt-20 pt-16">
      <GetInTouch />
     </div>
    </div>
  );
};

export default Cart;
