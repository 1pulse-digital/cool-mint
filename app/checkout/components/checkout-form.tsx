"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { useCart } from "@/contexts/cart"
import { useUser } from "@/contexts/user"
import { Address, BillingAddress } from "@/lib/fusion/commerce/order.pb"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { placeOrder } from "../actions"
import { myCart } from "@/app/cart/actions"

interface CheckoutFormProps {}

const addressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string().optional(),
  address1: z.string(),
  address2: z.string().optional(),
  city: z.string(),
  postalCode: z.string(),
})

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
  billingAddress: z.object({
    address: addressSchema,
    email: z.string().email(),
    taxNumber: z.string().optional(),
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
  }),
})

type CheckoutFormValues = z.infer<typeof schema>

export const CheckoutForm = ({}: CheckoutFormProps) => {
  const user = useUser()
  const router = useRouter()
  const { cart, setCart } = useCart()

  useEffect(() => {
    myCart({}).then((cart) => setCart(cart))
  }, [])

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {},
    mode: "onChange",
  })

  const {
    formState: { isLoading, isSubmitting },
  } = form

  useEffect(() => {
    if (user && user.email) {
      form.setValue("billingAddress.email", user.email)
    }
  }, [user, form])

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (
    values: CheckoutFormValues,
  ) => {
    try {
      const response = await placeOrder({
        billingAddress: normaliseBillingAddress(values.billingAddress),
        eTag: cart.auditEntry.eTag,
        shippingAddress: Address.initialize(),
      })
      toast.success(`Order placed, proceeding to payment...`)
      // redirect to the payment page
      router.push(response.redirectUrl)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to place order: ${error.message}`)
      } else {
        toast.error(`Failed to place order`)
      }
    }
  }

  const loading = isLoading || isSubmitting

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-4"
      >
        <div className="grid gap-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="billingAddress.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormDescription>Your email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormDescription>Your telephone number</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="billingAddress.address.firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.address.lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2 lg:grid-cols-2 lg:py-4">
          <FormField
            control={form.control}
            name="billingAddress.address.company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>(Optional) Your company name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.taxNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  (Optional) Your registered VAT number
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="billingAddress.address.address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.address.address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.address.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billingAddress.address.postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          size={"sm"}
          type="submit"
          disabled={loading}
          className="relative pr-4"
        >
          Place Order
          {loading && (
            <Spinner className="absolute right-0 top-0 h-4 w-4 text-background" />
          )}
        </Button>
      </form>
    </Form>
  )
}

// we need to normalise the address before sending it to the server because the some of the fields are optional, but the generated typescript code doesn't know that
function normaliseBillingAddress(billingAddress: {
  address: {
    firstName: string
    lastName: string
    company?: string | undefined
    address1: string
    city: string
    postalCode: string
    address2?: string | undefined
  }
  email: string
  phone?: string | undefined
  taxNumber?: string | undefined
}): BillingAddress {
  return {
    ...billingAddress,
    address: normaliseAddress(billingAddress.address),
    phone: billingAddress.phone || "-",
    taxNumber: billingAddress.taxNumber || "-",
  }
}

// we need to normalise the address before sending it to the server because the some of the fields are optional, but the generated typescript code doesn't know that
function normaliseAddress(address: {
  firstName: string
  lastName: string
  company?: string
  address1: string
  city: string
  postalCode: string
  address2?: string | undefined
}): Address {
  return {
    ...address,
    address2: address.address2 || "-",
    company: address.company || "",
  }
}
