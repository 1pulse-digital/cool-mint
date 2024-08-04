import React from "react"
import { title } from "process"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"
import { MoneyField } from "@/components/money-field"
import { getMasterClass } from "@/app/classes/actions"

interface OrderConfirmedProps {
  name: string
  price: bigint
  confirm: string
}

const OrderConfirmedItem: React.FC<OrderConfirmedProps> = async ({
  name,
  price,
  confirm,
}) => {
  const masterClass = await getMasterClass({
    name: "masterClasses/" + name.toLowerCase().replace(/\s+/g, "-"),
  })

  return (
    <div className="flex space-x-2 rounded-2xl py-6 font-helvetica text-sm">
      <Image
        src={masterClass.gallery.thumbnail.url}
        alt={title}
        height={80}
        width={65}
        className="rounded-xl"
      />
      <div></div>
      <div className="text-start">
        <span className="font-helvetica text-xl font-bold text-foreground">
          {masterClass.displayName}
        </span>
        <div className="row sm:flex sm:space-x-32">
          <div className="space-x-4">
            <span className="inline-flex items-center py-1 text-xs text-foreground">
              <Clock className="mr-2 h-4 w-4 text-yellow-500" />
              {masterClass.duration / 60} hours
            </span>
            {/* <span className="text-foreground text-xs py-1 inline-flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
            {masterClass.SESSION_TIME } 
          </span> */}
            <span className="inline-flex py-1 text-xs text-foreground">
              <Users className="mr-2 h-4 w-4 text-yellow-500" />
              QTY: {masterClass.maxAttendees}
            </span>
          </div>
          <div>
            <MoneyField value={price} />
            <Badge
              variant="outline"
              className="mt-1 border-none text-[#ADFA1C]"
            >
              {confirm}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmedItem
