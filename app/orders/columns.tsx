"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { format } from "date-fns"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "number",
    header: "Order Number",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    header: "Date Created",
    cell: ({ row }) =>
      format(new Date(row.original.auditEntry.dateCreated), "yyyy-MM-dd HH:mm"),
  },
  {
    accessorKey: "userID",
    header: "User ID",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
]
