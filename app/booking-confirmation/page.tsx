"use client"
import React from "react"
import GetInTouch from "@/components/base/getInTouch"
import { useSearchParams } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"
import { BookingForm } from "./components/booking-form"
import { TourBooking } from "@/lib/fusion/workshop/tourBooking.pb"
import { formatRFC3339 } from "date-fns"

const BookingConfirmation = () => {
  const searchParams = useSearchParams()
  const bookingTime = new Date(searchParams.get("time") || "")

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
