import { Order } from "@/lib/fusion/commerce/order.pb"
import { DataTable } from "./data-table"
import { columns } from "./order-columns"

// TODO: #34 Connect orders table to the api. 
// 1. Fetch orders from the api
// 2. Display orders in the table
// 3. Implement pagination
// 4. Implement sorting
// 5. Implement filtering
// 6. Implement searching
// 7. Implement row actions
// 8. Implement column actions
// 9. Implement column resizing
    // 10. Implement column reordering
// Get types/ lables/ values from the proto definitions

type Props = {
    orders: Order[];
}

export function OrdersTable(props: Props) {

    return (
        <div
            className="overflow-x-auto  rounded-md bg-[#27272A] text-foreground font-helvetica flex-wrap "
        >
            <DataTable data={props.orders} columns={columns} />
        </div>


    )
}

export default OrdersTable