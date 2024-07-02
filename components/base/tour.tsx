"use client"
import React from "react"

import { AvailableSlotsResponse } from "@/lib/fusion/workshop/tourBooking.manager.pb"
import { addMinutes, format, formatISO, formatRFC3339 } from "date-fns"
import { useRouter } from "next/navigation"
import { BookingButton } from "./button"

interface TourProps {
  slot: AvailableSlotsResponse.Slot
}

const Tour: React.FC<TourProps> = ({ slot }) => {
  const router = useRouter()

  const slotTime = new Date(slot.time)
  const startTime = slotTime
  const endTime = addMinutes(startTime, 30)
  const params = new URLSearchParams()
  params.append("time", slotTime.toISOString())

  const redirect = `/booking-confirmation?${params.toString()}`
  console.log(slot.time, { redirect })
  return (
    <div className="bg-background">
      <div className={"px-8"}>
        <span
          className={
            "text-start font-helvetica text-BodyText font-bold text-primary "
          }
        >
          <span></span>
        </span>
        <div className="text-foreground">
          <div className="grid grid-cols-2 space-x-4">
            <div className="pt-1">
              {format(startTime, "HH:mm")} - {format(endTime, "HH:mm")}
            </div>
            <div className="grid items-end justify-end">
              <BookingButton
                disabled={!slot.available}
                onClick={() => router.push(redirect)}
                color={slot.available ? "primary" : "secondary"}
              >
                Book
              </BookingButton>
            </div>
          </div>
          <div className="w-full pb-2 pt-4 lg:block">
            <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour
