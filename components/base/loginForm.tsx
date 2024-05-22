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
//import signIn from "@/lib/firebase/auth/sign-in"
import { zodResolver } from "@hookform/resolvers/zod"
//import { FirebaseError } from "firebase/app"
import { SubmitHandler, useForm } from "react-hook-form"
//import { toast } from "sonner"
import { z } from "zod"
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type LoginFormValues = z.infer<typeof schema>

export const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  })

  /* const onSubmit: SubmitHandler<LoginFormValues> = async (
    values: LoginFormValues,
  ) => {
    try {
      const response = await signIn(values.email, values.password)
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
  } */
  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="user@example.com"
                  type="email"
                  autoComplete="username"
                  {...field}
                  className="w-full bg-background text-foreground border-0 border-amber-300 rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-sm  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
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
              <FormLabel className="text-foreground">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  autoComplete="current-password"
                  className="w-full bg-background text-foreground border-0 border-amber-300 rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-[#707070] placeholder:px-3 placeholder:font-helvetica placeholder:text-sm  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-background sm:text-sm sm:leading-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-[#fdbb10] hover:bg-foreground text-background">Sign In</Button>
      </form>
    </Form>
  )
}
