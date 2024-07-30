"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { format } from "date-fns"
import { DataTableColumnHeader } from "@/components/base/data-table-column-header"
import { MoneyField } from "@/components/money-field"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => (
      <span className="font-bold">{row.original.number.toString().padStart(6, "0")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    header: "Total",
    cell: ({ row }) => <MoneyField value={row.original.total} />,
  },
  {
    header: "Date Created",
    cell: ({ row }) =>
      format(new Date(row.original.auditEntry.dateCreated), "yyyy-MM-dd HH:mm"),
  },
]
