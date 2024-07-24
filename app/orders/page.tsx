import { Breadcrumbs } from "@/components/breadcrumbs"
import { HeaderTitle } from "@/components/header-title"
import { myOrders } from "./actions"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function Page() {
  const response = await myOrders({})

  return (
    <div className="px-8">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Orders", href: "/orders" },
        ]}
      />
      <HeaderTitle description="Your recent orders">Order History</HeaderTitle>
      <DataTable
        initialSorting={[{ id: "number", desc: true }]}
        columns={columns}
        data={response.orders}
      />
    </div>
  )
}

export const dynamic = "force-dynamic"
