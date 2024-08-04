import React from "react";
import { title } from "process";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { MoneyField } from "@/components/money-field";
import { getMasterClass } from "@/app/classes/actions";

interface OrderConfirmedProps {
  name: string;
  price: bigint;
  confirm: string;
}

const OrderConfirmedItem: React.FC<OrderConfirmedProps> = async ({
  name,
  price,
  confirm,
}) => {

  const masterClass = await getMasterClass({
    name: "masterClasses/" + name.toLowerCase().replace(/\s+/g, '-'),
  })

  return (<div className="flex font-helvetica space-x-2 rounded-2xl text-sm py-6">
    <Image src={masterClass.gallery.thumbnail.url} alt={title} height={80} width={65} className="rounded-xl" />
    <div>
    </div>
    <div className="text-start">
      <span className="text-xl font-helvetica font-bold text-foreground">{masterClass.displayName}</span>
      <div className="sm:flex row sm:space-x-32">
        <div className="space-x-4">
          <span className="text-foreground text-xs py-1 inline-flex items-center">
            <Clock className="w-4 h-4 mr-2 text-yellow-500" />
            {masterClass.duration / 60} hours
          </span>
          {/* <span className="text-foreground text-xs py-1 inline-flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
            {masterClass.SESSION_TIME } 
          </span> */}
          <span className="text-foreground text-xs py-1 inline-flex">
            <Users className="w-4 h-4 mr-2 text-yellow-500" />
            QTY: {masterClass.maxAttendees}
          </span>
        </div>
        <div>
          <MoneyField value={price} />
          <Badge variant="outline" className="mt-1 text-[#ADFA1C] border-none">
            {confirm}
          </Badge>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderConfirmedItem;
