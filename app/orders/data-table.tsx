"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

import { MoneyField } from "@/components/money-field"
import { Separator } from "@/components/ui/separator"
import { Order } from "@/lib/fusion/commerce/order.pb"
import { format } from "date-fns"
import React from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  initialSorting?: SortingState
}

export function DataTable<TData, TValue>({
  columns,
  data,
  initialSorting,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>(
    initialSorting ?? [],
  )
  const [selectedRow, setSelectedRow] = React.useState<Order | undefined>()
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const onDialogOpenChange = () => {
    setDialogOpen(false)
    setSelectedRow(undefined)
  }

  const onRowClick = (row: TData) => {
    console.log("Row clicked", row)
    setSelectedRow(row as Order)
    setDialogOpen(true)
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  const total = selectedRow?.total ?? 0n
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => onRowClick(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Summary</DialogTitle>
            <DialogDescription>
              Date: {format(new Date(), "MMMM d, yyyy")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {selectedRow?.lineItems.map((item) => (
                <li
                  key={item.product}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">
                    {item.productDisplayName} x{" "}
                    <span>{item.quantity.toString()}</span>
                  </span>
                  <MoneyField value={item.price * item.quantity} />
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <MoneyField value={total} />
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <DialogFooter>
            <div className="text-xs text-muted-foreground">
              Made in Workshop
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
