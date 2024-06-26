import { Breadcrumbs } from "@/components/breadcrumbs"
import { myOrders } from "./actions"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { HeaderTitle } from "@/components/header-title"

export default async function Page() {
  const response = await myOrders({})

  return (
    <div className="border border-fuchsia-400 px-8">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Orders", href: "/orders" },
        ]}
      />
      <HeaderTitle description="Your recent orders">Order History</HeaderTitle>
      {/* <h1 className="text-4xl font-bold">Order History</h1> */}
      {/* <span>Your recent orders</span> */}
      <DataTable columns={columns} data={response.orders} />
    </div>
    // <div className={"bg-background"}>
    //   <div className={"grid content-center px-8 py-10 font-helvetica sm:pt-10"}>
    //     <div className="inline-flex justify-center font-helvetica text-xs font-normal text-foreground">
    //       <Link href="/">
    //         <div>
    //           Home
    //           <span className="px-1">|</span>
    //         </div>
    //       </Link>
    //       <Link href="/orderHistory">
    //         <div className="text-primary">Order History</div>
    //       </Link>
    //     </div>
    //     <div>
    //       <HeaderTitle
    //         title="Order History"
    //         description="A list of your recent orders."
    //       />
    //     </div>
    //   </div>
    //   <div className="px-6 pt-10 md:px-10 md:pt-12 lg:pt-0 2xl:px-28 ">
    //     <OrdersTable />
    //   </div>
    //   <div className="py-20 lg:px-8 2xl:px-24">
    //     <GetInTouch />
    //   </div>
    // </div>
  )
}
