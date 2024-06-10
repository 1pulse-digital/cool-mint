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
import resetPassword from "@/lib/firebase/auth/reset-password"
import { zodResolver } from "@hookform/resolvers/zod"
import { FirebaseError } from "firebase/app"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
const schema = z.object({
  email: z.string().email(),
})

type RegisterFormValues = z.infer<typeof schema>

interface MyFormEvent extends React.FormEvent<HTMLFormElement> {
  nativeEvent: Event & {submitter: HTMLElement};
}

export const ResetPasswordForm = () => {
  const router = useRouter()
  const [resetSuccess, setResetSuccess] = useState(false)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: ""},
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<RegisterFormValues> = async (
    values: RegisterFormValues,
  ) => {
    try {
      const response = await resetPassword(values.email)
      if (response.error === null) {
        setResetSuccess(true)
      } else {
        toast.error(response.error.message)
      }
    } catch (error) {
      console.error("Error resetting password:", error)

      if (error instanceof FirebaseError) {
        console.error("Firebase error:", error.code, error.message)
        toast.error(`Firebase error: ${error.code} - ${error.message}`)
      } else {
        console.error("Unknown error:", error)
        toast.error("An error occurred. Please try again later.")
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={(e: MyFormEvent) => {
          e.preventDefault()
          if (e.nativeEvent.submitter.id === "back") {
            router.push("/login")
          } else {
            form.handleSubmit(onSubmit)()
          }
        }} className="space-y-4">
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
        {resetSuccess ? (
          <Button id="back" className="w-full">Go Back</Button>
        ) : (
          <Button id="reset" className="w-full">Reset</Button>
        )}
      </form>
    </Form>
  )
}
