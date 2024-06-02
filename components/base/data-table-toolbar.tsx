"use client"

import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CircleIcon, Cross2Icon, CrossCircledIcon, QuestionMarkCircledIcon, StopwatchIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/base/data-table-view-options"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"

export const paymentStatuses = [
  {
    value: "pending",
    label: "Pending",
    icon: CircleIcon,
  },
  {
    value: "processing",
    label: "Processing",
    icon: StopwatchIcon,
  },
  {
    value: "on hold",
    label: "On Hold",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "paid",
    label: "Paid",
    icon: CheckCircledIcon,
  },
  {
    value: "cancelled",
    label: "Cancelled",
    icon: CrossCircledIcon,
  },
  {
    value: "refunded",
    label: "Refunded",
    icon: Cross2Icon,
  },
  {
    value: "failed",
    label: "Failed",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("order")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("order")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("paymentStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("paymentStatus")}
            title="Status"
            options={paymentStatuses}
          />
        )}
        {/* {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
