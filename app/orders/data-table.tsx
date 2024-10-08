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
  DialogTitle,
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
                className="cursor-pointer"
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
              {selectedRow && selectedRow.discountTotal > 0n && (
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Discount</span>
                  <MoneyField value={-selectedRow.discountTotal} className="text-primary" />
                </li>
              )}
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <MoneyField value={total} />
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          {selectedRow && selectedRow.coupons.length > 0 && (
            <>
              <div className="font-semibold">Coupons</div>
              <ul className="flex flex-col gap-2">
                {selectedRow.coupons.map((item) => (
                  <li
                    key={item.name}
                    className="flex grow items-center  space-x-2"
                  >
                    <span className="text-muted-foreground">{item.code}</span>
                    <span className="grow italic text-muted-foreground">
                      {item.discountText}
                    </span>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
            </>
          )}
          <DialogFooter>
            <div className="flex w-full items-center text-nowrap text-xs text-muted-foreground">
              <span className="grow">Made in Workshop</span>
              <span className="font-bold">All prices are inclusive of VAT</span>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
