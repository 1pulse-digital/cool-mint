"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInputField } from "@/components/ui/phone-input"
import signUp from "@/lib/firebase/auth/sign-up"
import { zodResolver } from "@hookform/resolvers/zod"
import { FirebaseError } from "firebase/app"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
const schema = z.object({
  email: z.string().email(),
  phoneNumber: z.string(),
  displayName: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type RegisterFormValues = z.infer<typeof schema>

export const RegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<RegisterFormValues> = async (
    values: RegisterFormValues,
  ) => {
    try {
      const response = await signUp(
        values.email,
        values.password,
        values.displayName,
        values.phoneNumber,
      )
      if (response.error === null) {
        // do nothing, the auth state will be updated automatically
      } else {
        toast.error(response.error.message)
      }
    } catch (error) {
      console.error("Error signing in:", error)

      if (error instanceof FirebaseError) {
        console.error("Firebase error:", error.code, error.message)

        toast.error(`Firebase error: ${error.code} - ${error.message}`)
      } else {
        console.error("Unknown error:", error)

        toast.error("An error occurred. Please try again later.")
      }
      // Handle other errors
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="" autoComplete="given-name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInputField name={field.name} placeholder="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="user@example.com"
                  type="email"
                  autoComplete="username"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full">Sign Up</Button>
      </form>
    </Form>
  )
}
