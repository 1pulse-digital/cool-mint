import Button, { LongButton, SmallButton, SmallButtonOrange } from "@/components/base/button";
import Link from "next/link";
import OrderConfirmed from "@/components/base/orderConfirmed";


const OrderConfirmation: React.FC = () => {
  return (
    <div className={"bg-background py-12 px-8"}>
    <div className="grid content-center items-center text-center font-helvetica sm:p-10">
    <div className="text-xs text-secondary  font-helvetica font-normal inline-flex justify-center">
            <Link href="/">
          <div>
            Home 
            <span className="px-1">|</span>  
          </div>
          </Link>
          <Link href="/orderConfirmation">
          <div className="text-primary">Order Confirmation</div>
          </Link>
          </div>
          <h1 className="text-headings text-secondary font-helvetica font-bold  text-center leading-tight">Order Confirmation<span className="text-primary">.</span></h1>
          <div className="flex items-center justify-center py-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ADFA1C" className="w-20 h-14">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
         </div>
         <div className="grid items-center justify-center">
          <OrderConfirmed />
          </div>
          </div>      
{/* <div className="py-4">
<hr className="flex-grow h-[1px] bg-textColor border-0"></hr>
</div> */}
<div className="sm:flex sm:justify-center sm:space-x-52">
<div className=""> 
<Link href="/workshops">
<Button color="primary">Back to Workshops</Button>
</Link>
</div>
<div className="sm:flex-col">
  <div>
  <span className={"text-BodyText font-helvetica font-bold text-start text-textColor"}>Total:</span>
  </div>
  <div>
  <span className={"text-[25px] text-primary font-helvetica font-bold text-start"}>R1,500.00</span>
  </div>
    
<div className="text-[16px] text-primary  pb-14 ">
  <div>
  <span className={"font-helvetica font-bold line-through"}>R1,700.00</span>
  </div>
</div>
</div>
<div className="grid hidden xs:block"> 
<Link href="/workshops">
<Button color="primary">Back to Workshops1</Button>
</Link>
</div>
</div>
     </div>
    
  );
};

export default OrderConfirmation;
