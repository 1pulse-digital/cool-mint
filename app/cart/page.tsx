import Button, { LongButton, SmallButton, SmallButtonOrange } from "@/components/base/button";
import { InputComponent } from "@/components/base/inputComponents";
import Link from "next/link";
import ShoppingCart from '@/components/base/shoppingCart';


const Cart: React.FC = () => {
  return (
    <div className={"bg-background py-20 px-8"}>
      <div className="2xl:mx-36 xl:mx-28">
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
          <h1 className="text-headings text-secondary font-helvetica font-bold  text-center leading-tight">Your Cart</h1>
          <ShoppingCart />       
          </div> 
          <div className="grid md:flex md:space-x-32 md:justify-center xl:space-x-24 2xl:space-x-40">
          <div className="flex space-x-12">
          <div className="w-full">
        <InputComponent label="Add Discount Code:" name="text" placeholder="disc@10"/>
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
  <p className={"text-BodyText font-helvetica font-bold text-start text-textColor"}>Total:</p>
  </div>
  <div>
  <p className={"text-[25px] text-primary font-helvetica font-bold text-start"}>R1,500.00</p>
  </div>
    </div>
<div className="text-[16px] text-primary  pb-14 ">
  <div>
  <p className={"font-helvetica font-bold line-through"}>R1,700.00</p>
  </div>
</div>
</div>
</div> 

<div className="flex items-start space-x-10  xl:mx-80 2xl:mx-72 md:mx-32 ">
<div> 
<Button color="primary" className="w-full mt-4">Proceed to Checkout</Button></div>
<div className="flex items-center justify-center py-2"> 
<Link href="/register">      
<SmallButtonOrange color="primary">Continue Shopping
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
</SmallButtonOrange></Link>
    </div>
     </div>
     </div>
    </div>
  );
};

export default Cart;
