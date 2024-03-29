import Button, { LongButton, SmallButtonOrange } from "@/components/base/button";
import Link from "next/link";
import ShoppingCart from "@/components/base/shoppingCart";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GetInTouch from "@/components/base/getInTouch";
import HeaderTitle from "@/components/base/headerTitle";

const Cart: React.FC = () => {
  return (
    <div className={"bg-background py-20"}>
      <div className={"bg-background px-8"}>
      <div className="xl:mx-28 2xl:mx-36">
        <div className="grid content-center font-helvetica ">
          <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-secondary">
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
          <div>
            <HeaderTitle title="Your Cart" description="" />
          </div>
        </div>
      </div>
      <div className="grid justify-center">
        <div>
          <ShoppingCart />
        </div>
        <div>
          <div className="grid md:flex md:space-x-32">
            <div className="flex place-items-center space-x-2 sm:space-x-10 2xl:space-x-1">
              <div className="bg-grey-500 flex space-x-6">
              
                 <div className="py-3">
                <Label htmlFor="discount" className="mt-2 text-secondary">
                  Add Discount Code:
                </Label>
                <div className="sm:w-60 mt-2">
                  <Input
                    type="surname"
                    id="surname"
                    placeholder="discount@2024"
                    className="block rounded-md border-0 border-amber-300 bg-background py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-xs placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                  ></Input>
                </div>
              </div> 
              <div className="pt-8">
                <Link href="/register">
                  <SmallButtonOrange color="primary" className="font-bold">
                    Apply
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </SmallButtonOrange>
                </Link>
              </div>
              </div>
              <div className="flex justify-center pt-4 font-bold">
                
              </div>
            </div>
            <div>
              <div className="py-2 text-start">
                <div>
                  <span
                    className={
                      "text-start font-helvetica text-BodyText text-secondary"
                    }
                  >
                    Total:
                  </span>
                </div>
                <div>
                  <span
                    className={
                      "text-start font-helvetica text-[25px] font-bold text-primary"
                    }
                  >
                    R1,500.00
                  </span>
                </div>
              </div>
              <div className="pb-4 text-[16px]  text-textColor sm:pb-0">
                <div>
                  <span className={"font-helvetica font-bold line-through"}>
                    R1,700.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:space-x-6 sm:flex">
          <div>
            <Link href="/login">
              <LongButton color="secondary" className="mt-4 w-60">
                Proceed to Checkout
              </LongButton>
            </Link>
          </div>
          <div className="items-start justify-start py-2 sm:items-center sm:justify-center">
            <Link href="/classes">
              <SmallButtonOrange
                color="primary"
                className="font-helvetica font-bold"
              >
                Continue Shopping
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </SmallButtonOrange>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className="py-8 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Cart;
