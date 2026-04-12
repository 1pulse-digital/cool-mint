"use client"

import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { SignalHigh } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { SessionPicker } from "./session-picker"

interface RelatedClassCardProps {
  course: MasterClass
}

export const RelatedClassCard: React.FC<RelatedClassCardProps> = ({
  course,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false)

  return (
    <>
      <div className="group rounded-b-lg border-primary/10 bg-[#262626]">
        <Link
          href={`/classes/${course.name.replace("masterClasses/", "")}`}
        >
          <div className="relative h-[160px] overflow-hidden rounded-t-lg">
            {course.gallery?.thumbnail?.url && (
              <Image
                src={course.gallery.thumbnail.url}
                alt={course.displayName}
                className="object-cover transition-transform group-hover:scale-105"
                fill
              />
            )}
          </div>
        </Link>
        <div className="space-y-2 p-4">
          <Link
            href={`/classes/${course.name.replace("masterClasses/", "")}`}
          >
            <h3 className="mt-3 font-helvetica font-semibold text-foreground">
              {course.displayName}
            </h3>
          </Link>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {course.duration} Minutes
            </span>
            <span className="font-semibold text-primary">
              {moneyFormatter.format(course.standardPrice / 100n)}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <SignalHigh className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <p className="font-helvetica font-medium normal-case text-foreground">
              {course.difficulty}
            </p>
          </div>
          <Button
            size="sm"
            className="mt-2 w-full"
            onClick={() => setPickerOpen(true)}
          >
            Book
          </Button>
        </div>
      </div>

      <SessionPicker
        masterClassName={course.name}
        masterClassDisplayName={course.displayName}
        maxAttendees={course.maxAttendees}
        standardPrice={course.standardPrice}
        open={pickerOpen}
        onOpenChange={setPickerOpen}
      />
    </>
  )
}
