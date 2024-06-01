import Image from "next/image"
import React from "react"

interface ShoppingCartItemProps {
  image?: string
  price: BigInt
  productName: string
  quantity: BigInt
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  image,
  price,
  productName,
  quantity,
}) => (
  <div className="flex flex-wrap space-x-2 rounded-2xl py-6 font-helvetica text-sm">
    <Image
      src={image || "/icons/banner.webp"}
      alt={productName}
      height={60}
      width={90}
      className="rounded-xl"
    />
    <div></div>
    <div className="py-4 sm:py-0 md:flex md:space-x-40 2xl:space-x-32">
      <div className="text-start">
        <span className="font-helvetica text-xl font-bold text-foreground">
          {productName}
        </span>
        <div className="row flex space-x-4">
          <span className="inline-flex items-center py-1 text-xs text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FDBB10"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            "time"
          </span>
          <span className="inline-flex items-center py-1 text-xs text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FDBB10"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            "date"
          </span>
          <span className="inline-flex py-1 text-xs text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FDBB10"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            "host"
          </span>
        </div>
      </div>
      <div>
        <p className="pt-2 text-start text-[16px] font-bold text-primary">
          {price.toString()}
        </p>
        <p className="justify py-1 text-start text-[12px] text-muted-foreground md:text-end">
          "remove"
        </p>
      </div>
    </div>
  </div>
)
