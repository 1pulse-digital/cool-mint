import { LongButton, SmallButtonOrange } from "@/components/base/button"
import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/base/headerTitle"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { myCart } from "./actions"
import { ShoppingCart } from "./components/cart"
import { Button } from "@/components/ui/button"

const Cart: React.FC = async () => {
  // TODO: redirect to login if not logged in (DONE by middleware.ts?)
  const cart = await myCart({})

  return (
    <div className={"py-20"}>
      <div className={"bg-background px-8"}>
        <div className="xl:mx-28 2xl:mx-36">
          <div className="grid content-center font-helvetica ">
            <div className="inline-flex items-center justify-center font-helvetica text-xs font-normal text-foreground">
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
          {/* <div>
            <div className="grid md:flex md:space-x-32">
              <div className="flex place-items-center space-x-2 sm:space-x-10 2xl:space-x-1">
                <div className="bg-grey-500 flex space-x-6">
                  <div className="py-3">
                    <Label htmlFor="discount" className="mt-2 text-foreground">
                      Add Discount Code:
                    </Label>
                    <div className="mt-2 sm:w-60">
                      <Input
                        type="surname"
                        id="surname"
                        placeholder="discount@2024"
                        className="block w-full text-foreground placeholder:text-xs"
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
                <div className="flex justify-center pt-4 font-bold"></div>
              </div>
              <div>
                <div className="py-2 text-start">
                  <div>
                    <span
                      className={
                        "text-start font-helvetica text-BodyText text-foreground"
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
                <div className="pb-4 text-[16px]  text-muted-foreground sm:pb-0">
                  <div>
                    <span className={"font-helvetica font-bold line-through"}>
                      R1,700.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex mt-16">
            <div className="grow">
              <Link href="/checkout">
                <Button>Proceed to Checkout</Button>
              </Link>
            </div>
              <Link href="/classes">
                <Button variant={"link"} className="text-lg font-semibold">
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
                </Button>
              </Link>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

export default Cart
