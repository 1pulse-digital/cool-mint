"use client"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import GetInTouch from "@/components/base/getInTouch"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { bookTour } from "./actions"
import dayjs from "dayjs"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { BookingForm } from "./components/booking-form"
import { TourBooking } from "@/lib/fusion/workshop/tourBooking.pb"
import { formatRFC3339 } from "date-fns"

const BookingConfirmation = () => {
  const router = useRouter()

  const params = new URLSearchParams()

  const searchParams = useSearchParams()
  // const time = searchParams.get("time") || undefined
  const bookingTime = new Date(searchParams.get("time") || "")
  // const tourDay = searchParams.get("tourDay")
  // const endTime = searchParams.get("endTime")
  // params.append("tourDay", tourDay ?? dayjs().format("YYYY-MM-DD"))

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")

  // const handleBooking = async () => {
  //   if (tourDay != null && startTime != null) {
  //     try {
  //       const response = await bookTour({
  //         time: dayjs(tourDay + startTime).format("YYYY-MM-DD HH:mm"),
  //         tourist: {
  //           displayName: firstName + " " + lastName,
  //           email: email,
  //           phone: phoneNumber,
  //           interests: [],
  //         },
  //       })
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }

  return (
    <div className="px-8">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Booking Confirmation", href: "/booking-confirmation" },
        ]}
      />
      <HeaderTitle>Booking Confirmation</HeaderTitle>
      <BookingForm
        booking={TourBooking.initialize({
          time: formatRFC3339(bookingTime),
        })}
      />

      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
  )
}
export default BookingConfirmation
