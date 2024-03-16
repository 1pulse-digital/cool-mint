import React from "react";
import Link from "next/link";
import { LongButton, SquareButton } from "./button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
{
  order: "INV001",
  paymentStatus: "Paid",
  totalAmount: "R250.00",
  paymentMethod: "Credit Card",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV002",
  paymentStatus: "Pending",
  totalAmount: "R150.00",
  paymentMethod: "PayPal",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV003",
  paymentStatus: "Unpaid",
  totalAmount: "R350.00",
  paymentMethod: "Bank Transfer",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV004",
  paymentStatus: "Paid",
  totalAmount: "R450.00",
  paymentMethod: "Credit Card",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV005",
  paymentStatus: "Paid",
  totalAmount: "R550.00",
  paymentMethod: "PayPal",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV006",
  paymentStatus: "Pending",
  totalAmount: "R200.00",
  paymentMethod: "Bank Transfer",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
{
  order: "INV007",
  paymentStatus: "Unpaid",
  totalAmount: "R300.00",
  paymentMethod: "Credit Card",
  productType: "Monthly Membership",
  orderDate: "20 March 2024",
},
]

export function OrderHis() {
  return (
    <div
    className="overflow-x-auto  rounded-md bg-[#27272A] text-secondary font-helvetica flex-wrap "
  >
    <Table className="min-w-full">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] sm:w-auto capitalize text-secondary font-bold">Order Number</TableHead>
          <TableHead className="text-secondary font-bold">Method</TableHead>
          <TableHead className=" text-secondary font-bold">Product Type</TableHead>
          <TableHead className=" text-secondary font-bold">Order Date</TableHead>
          <TableHead className="text-secondary font-bold">Status</TableHead>
          <TableHead className=" text-secondary font-bold">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
  {orders.map((order) => (
    <TableRow key={order.order}>
      <TableCell className="font-medium">{order.order}</TableCell>
      
      <TableCell>{order.paymentMethod}</TableCell>
     
      <TableCell>{order.productType}</TableCell>
      <TableCell>{order.orderDate}</TableCell>
      <TableCell>{order.paymentStatus}</TableCell>
      <TableCell>{order.totalAmount}</TableCell>
    </TableRow>
  ))}
</TableBody>
      {/* <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order}>
            <TableCell className="font-medium">{order.order}</TableCell>
            <TableCell>{order.paymentStatus}</TableCell>
            <TableCell>{order.paymentMethod}</TableCell>
            <TableCell className="text-right">{order.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="font-bold">R2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

  </div>
  
  );
};

export default OrderHis;

