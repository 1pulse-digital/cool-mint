import React from "react";
import { title } from "process";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users } from "lucide-react";
import { MoneyField } from "@/components/money-field";
import { LineItem, Order } from "@/lib/fusion/commerce/order.pb";

interface OrderConfirmedProps {
  imageSrc: string;
  date: string;
  name: string;
  time: string;
  price: bigint;
  confirm: string;
  quantity: string;
}

const OrderConfirmedItem: React.FC<OrderConfirmedProps> = ({
  imageSrc,
  date,
  name,
  time,
  price,
  confirm,
  quantity,
}) => {

  return (<div className="flex font-helvetica space-x-2 rounded-2xl text-sm py-6">
    <Image src={imageSrc} alt={title} height={80} width={65} className="rounded-xl" />
    <div>
    </div>
    <div className="text-start">
      <span className="text-xl font-helvetica font-bold text-foreground">{name}</span>
      <div className="sm:flex row sm:space-x-32">
        <div className="space-x-4">
          <span className="text-foreground text-xs py-1 inline-flex items-center">
            <Clock className="w-4 h-4 mr-2 text-yellow-500" />
            {time}
          </span>
          <span className="text-foreground text-xs py-1 inline-flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
            {date}
          </span>
          <span className="text-foreground text-xs py-1 inline-flex">
              <Users className="w-4 h-4 mr-2 text-yellow-500" />
            QTY: {quantity}
          </span>
        </div>
        <div>
          <p className="font-bold text-primary text-start text-[16px] pt-2">{price}</p>
          <MoneyField value={price} />
          <Badge variant="outline" className="mt-1 text-[#ADFA1C] border-none">
            {confirm}
          </Badge>
        </div>
      </div>
    </div>
  </div>
)}

export default OrderConfirmedItem;