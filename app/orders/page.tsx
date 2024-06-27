import { Breadcrumbs } from "@/components/breadcrumbs"
import { myOrders } from "./actions"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { HeaderTitle } from "@/components/header-title"

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
      <DataTable columns={columns} data={response.orders} />
    </div>
  )
}
