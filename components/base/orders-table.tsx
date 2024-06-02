import { Order } from "@/lib/fusion/commerce/order.pb"
import { DataTable } from "./data-table"
import { columns } from "./order-columns"

// 
export type OrderType = {
    order: string;
    paymentStatus: string;
    totalAmount: string;
    paymentMethod: string;
    productType: string;
    orderDate: string;
}

export const orders: OrderType[] = [
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

// TODO: Connect orders table to the api. 
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

export function OrdersTable() {
    return (
        <div
            className="overflow-x-auto  rounded-md bg-[#27272A] text-foreground font-helvetica flex-wrap "
        >
            <DataTable data={orders} columns={columns} />
        </div>


    )
}

export default OrdersTable