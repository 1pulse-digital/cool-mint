import Button, {
  LongButton,
  SmallButton,
  SmallButtonOrange,
} from "@/components/base/button"
import Link from "next/link"
import OrderConfirmed from "@/components/base/orderConfirmed"
import GetInTouch from "@/components/base/getInTouch"
import HeaderTitle from "@/components/header-title"

const OrderConfirmation: React.FC = () => {
  return (
    <div className={"bg-background px-8 py-20"}>
      <div className="grid content-center items-center text-center font-helvetica sm:p-10">
        <div className="inline-flex justify-center  font-helvetica text-xs font-normal text-foreground">
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

        <div>
          <HeaderTitle>Order Confirmation</HeaderTitle>
        </div>
        <div className="flex items-center justify-center py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ADFA1C"
            className="h-14 w-20"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="grid items-center justify-center">
          <OrderConfirmed />
        </div>
      </div>
      {/* <div className="py-4">
<hr className="flex-grow h-[1px] bg-muted-foreground border-0"></hr>
</div> */}
      <div className="sm:flex sm:justify-center sm:space-x-52">
        <div className="">
          <Link href="/workshops">
            <Button color="primary">Back to Workshops</Button>
          </Link>
        </div>
        <div className="sm:flex-col">
          <div>
            <span
              className={
                "text-start font-helvetica text-BodyText font-bold text-muted-foreground"
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

          <div className="pb-14 text-[16px]  text-primary ">
            <div>
              <span className={"font-helvetica font-bold line-through"}>
                R1,700.00
              </span>
            </div>
          </div>
        </div>
        <div className="xs:block grid hidden">
          <Link href="/workshops">
            <Button color="primary">Back to Workshops1</Button>
          </Link>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}

export default OrderConfirmation
