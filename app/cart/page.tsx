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
      <div className="grid content-center font-helvetica sm:mx-20 md:mx-20">
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
          <h1 className="text-headings text-secondary font-helvetica font-bold text-center leading-tight">Your Cart<span className="text-primary">.</span></h1>
          <ShoppingCart />       
         
          
          
          <div className="sm:px-20">
          <div className="grid md:flex md:space-x-20 md:justify-center xl:space-x-24 2xl:space-x-32">
          <div className="flex sm:space-x-12 space-x-2 place-items-center">
          
          <div className="pb-2 2xl:w-96 px:w-40 ">
           <Label htmlFor="discount" className="text-secondary mt-2">Add Discount Code:</Label>
           <div className="mt-2">
      <Input type="surname" id="surname" placeholder="disc@20" className="placeholder:text-xs placeholder:px-3 placeholder:font-helvetica placeholder:text-white block w-full rounded-md border-0 border-amber-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070]  focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6 bg-background"></Input>
      </div>
        </div>    
  <div className="flex pt-4 justify-center font-bold"> 
 <Link href="/register">
 <SmallButtonOrange color="primary">Apply
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
</div>
<div>  
<div className="text-start py-2">
  <div>
  <span className={"text-BodyText font-helvetica text-start text-textColor"}>Total:</span>
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



<div className="sm:flex items-start sm:space-x-0  md:mx-0 lg:px-32 sm:pt-8 pt-0 ">
<div className="lg:w-full"> 
<Link href="/login">  
<Button color="primary" className=" mt-4">Proceed to Checkout</Button></Link></div>
<div className="flex sm:items-center sm:justify-center items-start justify-start py-2"> 
<Link href="/workshops">      
<SmallButtonOrange color="primary" className="font-helvetica font-bold">Continue Shopping
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
     </div>
     </div>
      </div> 



     </div>
     <div className="sm:py-20 py-8 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Cart;
