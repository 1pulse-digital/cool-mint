import { addToCart } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { format } from "date-fns"
import { CalendarClock, Clock2, User } from "lucide-react"
import Link from "next/link"
import React from "react"
import { toast } from "sonner"

interface WorkshopProps {
  masterClass: MasterClass
  session: Session
}

export const WorkshopItem: React.FC<WorkshopProps> = ({
  masterClass,
  session,
  // learnMoreLink,
}) => {
  const handleAddToCart = async () => {
    await addToCart({
      productName: session.name,
      quantity: 1n,
    })
    toast.success("Added to cart")
  }

  const date = new Date(session.date)
  const day = format(date, "eee")
  const stamp = format(date, "h:mm a")
  return (
    <div className="flex w-full gap-x-4">
      <span className="text-2xl font-bold text-foreground">{day}</span>
      <div className="grow">
        <div className="flex w-full flex-row flex-wrap">
          <Link href={"https://google.co.za"}>
            <div className="text-xl font-bold text-muted-foreground">
              {masterClass.displayName}
            </div>
          </Link>
          <div className="w-full pb-2 pt-4 lg:block">
            <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
        </div>
        <div className="flex space-x-4 text-xs text-foreground">
          <div className="flex space-x-2">
            <CalendarClock size={16} className="text-primary" />
            <p>{stamp}</p>
          </div>
          <div className="flex space-x-2">
            <Clock2 size={16} className="text-primary" />
            <p>{masterClass.duration / 60} hours</p>
          </div>
          <div className="flex space-x-2">
            <User size={16} className="text-primary" />
            <p>{masterClass.presenter}</p>
          </div>
        </div>
        <p className="py-2 text-sm font-normal text-white sm:text-base">
          {masterClass.description}
        </p>
      </div>
      <div className="ml-4">
        <p className="text- pt-4 font-bold text-primary lg:pt-0">
          {moneyFormatter.format(masterClass.standardPrice / 100n)}
        </p>
        <p className="py-1 text-base text-foreground">
          {masterClass.maxAttendees - session.confirmedAttendees} Spots Left
        </p>
        <div className="w-40 py-5">
          <Button onClick={handleAddToCart}>Book a Spot</Button>
        </div>
        {/* <ButtonGroupWorkshops */}
        {/* bookLink={"https://www.google.com"} */}
        {/* // learnMoreLink={learnMoreLink} */}
        {/* /> */}
      </div>
    </div>
  )
}
