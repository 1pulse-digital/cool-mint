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
import signIn from "@/lib/firebase/auth/sign-in"
import { zodResolver } from "@hookform/resolvers/zod"
import { FirebaseError } from "firebase/app"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type LoginFormValues = z.infer<typeof schema>

export const LoginForm = () => {
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (
    values: LoginFormValues,
  ) => {
    try {
      const response = await signIn(values.email, values.password)
      if (response.error === null) {
        // redirect handled by user context
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

  interface MyFormEvent extends React.FormEvent<HTMLFormElement> {
    nativeEvent: Event & { submitter: HTMLElement }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e: MyFormEvent) => {
          e.preventDefault()
          if (e.nativeEvent["submitter"].id === "signIn") {
            form.handleSubmit(onSubmit)()
          } else if (e.nativeEvent["submitter"].id === "forgotPassword") {
            router.push("/reset-password")
          }
        }}
        className="space-y-4"
      >
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
                  autoComplete="current-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button id="signIn" className="w-full">
          Sign In
        </Button>
        <Button id="forgotPassword" variant="secondary" className="w-full">
          Forgot Password
        </Button>
      </form>
    </Form>
  )
}
