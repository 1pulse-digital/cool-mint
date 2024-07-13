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
import { TourBooking } from "@/lib/fusion/workshop/tourBooking.pb"
import { bookTour } from "../actions"
import { Checkbox } from "@/components/ui/checkbox"
import { addMinutes, format } from "date-fns"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

interface BookingFormProps {
  booking: TourBooking
}
const interestsSchema = z.object({
  workshops: z.boolean().optional(),
  woodwork: z.boolean().optional(),
  metalwork: z.boolean().optional(),
  cnc: z.boolean().optional(),
  engineering: z.boolean().optional(),
  memberships: z.boolean().optional(),
})
type Interests = z.infer<typeof interestsSchema>

const touristSchema = z.object({
  displayName: z.string(),
  email: z.string(),
  phone: z.string(),
  interests: interestsSchema,
})

const schema = z.object({
  name: z.string(),
  tourist: touristSchema,
})

type BookingFormValues = z.infer<typeof schema>

export const BookingForm = ({ booking }: BookingFormProps) => {

  const searchParams = useSearchParams()
    const redirect = `/confirmed-booking?${searchParams.toString()}`
    const router = useRouter()

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      tourist: {
        displayName: "",
        email: "",
        phone: "",
        interests: {
          workshops: false,
          woodwork: false,
          metalwork: false,
          cnc: false,
          engineering: false,
          memberships: false,
        },
      },
    },
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<BookingFormValues> = async (
    values: BookingFormValues,
  ) => {
    try {
      const interests: (keyof Interests)[] = []
      for (const key in values.tourist.interests) {
        if (values.tourist.interests[key as keyof Interests]) {
          interests.push(key as keyof Interests)
        }
      }
      console.log("booking the tour", { values, interests })
      const response = await bookTour({
        time: booking.time,
        tourist: {
          displayName: values.tourist.displayName,
          email: values.tourist.email,
          phone: values.tourist.phone,
          interests: interests,
        },
      })
      toast.success("Booking successful")
      router.push(redirect)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to make booking: ${error.message}`)
      } else {
        toast.error(`Failed to make booking`)
      }
    }
  }

  const bookingDateTime = new Date(booking.time)
  const bookingDay = format(bookingDateTime, "EEEE, MMMM d, yyyy")
  const startTime = format(bookingDateTime, "HH:mm")
  const endTime = format(addMinutes(bookingDateTime, 30), "HH:mm")

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-8 px-8"
      >
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          <FormField
            control={form.control}
            name="tourist.displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Your first and last name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.email"
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
            name="tourist.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormDescription>In case we need to reach you</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p
          className={
            "mb-8 py-0 text-start font-helvetica text-sm font-normal text-foreground"
          }
        >
          What are you interested in?
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2">
          <FormField
            control={form.control}
            name="tourist.interests.workshops"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="border">Workshops</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.interests.woodwork"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Woodwork</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.interests.metalwork"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Metalwork</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.interests.cnc"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>CNC</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.interests.engineering"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Engineering</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourist.interests.memberships"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Memberships</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <p
          className={
            "pb-2 pt-8 text-start font-helvetica text-sm font-bold text-primary"
          }
        >
          Booking information:
        </p>
        <div>
          <div className="flex flex-row space-x-10 py-1 text-start text-muted-foreground ">
            <div>
              <p className={"text-start font-helvetica text-[16px] font-bold"}>
                Date:
              </p>
            </div>
            <div>
              <p className={"text-start font-helvetica text-[16px] font-bold"}>
                {bookingDay}
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-10 py-1 text-[16px] text-muted-foreground">
            <div>
              <span className={"font-helvetica font-bold"}>Time:</span>
            </div>
            <div>
              <span className={"font-helvetica font-bold"}>
                {startTime} - {endTime}
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 py-1 text-[16px] text-muted-foreground">
            <div>
              <span className={"font-helvetica text-[16px] font-bold"}>
                Location:
              </span>
            </div>
            <div>
              <Link
                target="_blank"
                className="font-helvetica font-bold"
                href="https://maps.app.goo.gl/fMh6eh7hpUXrWfFb6"
              >
                {/* <span className={"font-helvetica text-[16px] font-bold"}> */}
                10 Naaf Street, Strydompark, Randburg, Johannesburg 2169
                {/* </span> */}
              </Link>
            </div>
          </div>
        </div>
        <Button size={"sm"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
