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
  totalAmount: "R1599.00",
  paymentMethod: "Credit Card",
  productType: "Intro to Welding: Youth Class",
  orderDate: "31 March 2024",
},
{
  order: "INV002",
  paymentStatus: "Paid",
  totalAmount: "R1799.00",
  paymentMethod: "Payfast",
  productType: "TIG Welding: Mild steel",
  orderDate: "20 March 2024",
},
{
  order: "INV003",
  paymentStatus: "Paid",
  totalAmount: "R1399.00",
  paymentMethod: "Bank Transfer",
  productType: "Intro to Metal Working",
  orderDate: "15 March 2024",
},
{
  order: "INV004",
  paymentStatus: "Paid",
  totalAmount: "R1540.00",
  paymentMethod: "Credit Card",
  productType: "MIG Welding 101",
  orderDate: "01 March 2024",
},
{
  order: "INV005",
  paymentStatus: "Paid",
  totalAmount: "R1799.00",
  paymentMethod: "Payfast",
  productType: "TIG Welding: Mild steel",
  orderDate: "25 February 2024",
},
{
  order: "INV006",
  paymentStatus: "Paid",
  totalAmount: "R1799.00",
  paymentMethod: "Bank Transfer",
  productType: "TIG Welding: Mild steel",
  orderDate: "12 February 2024",
},
{
  order: "INV007",
  paymentStatus: "Paid",
  totalAmount: "R1540.00",
  paymentMethod: "Credit Card",
  productType: "MIG Welding 101",
  orderDate: "05 February 2024",
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
          <TableCell className="font-bold">R11,475.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

  </div>
  
  );
};

export default OrderHis;

