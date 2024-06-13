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

import { Cart } from "@/lib/fusion/commerce/cart.pb"
import { placeOrder } from "../action"
import { Input } from "@/components/ui/input"
import { useUser } from "@/contexts/user"
import { Button } from "@/components/ui/button"
import { Address, BillingAddress } from "@/lib/fusion/commerce/order.pb"
import { useEffect } from "react"

interface CheckoutFormProps {
  cart: Cart
}

const addressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
})

const schema = z.object({
  billingAddress: z.object({
    address: addressSchema,
    email: z.string(),
    phone: z.string(),
  }),
  //   shippingAddress: addressSchema,
})

type CheckoutFormValues = z.infer<typeof schema>

// tell TypeScript that the payfast_do_onsite_payment function is available on the window object
declare global {
  interface Window {
    payfast_do_onsite_payment: (options: { uuid: string }) => void
  }
}

export const CheckoutForm = ({ cart }: CheckoutFormProps) => {
  const user = useUser()

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      billingAddress: BillingAddress.initialize(),
    },
    mode: "onChange",
  })

  useEffect(() => {
    if (user && user.email) {
      form.setValue("billingAddress.email", user.email)
    }
  }, [user])

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (
    values: CheckoutFormValues,
  ) => {
    try {
      const response = await placeOrder({
        billingAddress: values.billingAddress,
        eTag: cart.auditEntry.eTag,
        shippingAddress: Address.initialize(),
      })
      console.log(response)
      window.payfast_do_onsite_payment({ uuid: response.paymentID })
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to place order: ${error.message}`)
      } else {
        toast.error(`Failed to place order`)
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="billingAddress.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"sm"} type="submit">
          Place Order
        </Button>
      </form>
    </Form>
  )
}
