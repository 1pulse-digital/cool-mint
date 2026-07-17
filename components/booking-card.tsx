"use client"

import { Session } from "@/lib/fusion/masterClass/session.pb"
import { SessionInfo } from "@/lib/fusion/masterClass/session.manager.pb"
import { formatDuration } from "@/lib/util/format-duration"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { Clock, MapPin, SignalHigh, Users } from "lucide-react"
import React from "react"
import { InlineSessionSelector } from "./inline-session-selector"

interface BookingCardProps {
  standardPrice: bigint
  difficulty: string
  duration: number
  maxAttendees: number
  spotsFilled: number
  sessions: Session[]
  sessionInfos?: SessionInfo[]
}

export const BookingCard: React.FC<BookingCardProps> = ({
  standardPrice,
  difficulty,
  duration,
  maxAttendees,
  spotsFilled,
  sessions,
  sessionInfos,
}) => {
  const spotsRemaining = maxAttendees - spotsFilled
  const fillPercentage = (spotsFilled / maxAttendees) * 100

  return (
    <div
      className={
        "rounded-lg border border-primary/10 bg-[#262626] px-6 py-6 font-helvetica"
      }
    >
      {/* Price */}
      <div className="mb-6">
        <span className="font-helvetica text-3xl font-bold text-primary">
          {moneyFormatter.format(standardPrice / 100n)}
        </span>
        <p className="text-sm text-muted-foreground">per person</p>
      </div>

      {/* Class Details */}
      <div className="space-y-4">
        {/* Difficulty */}
        <div className="flex items-start gap-3">
          <SignalHigh className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Difficulty</p>
            <p className="font-helvetica font-medium normal-case text-foreground">
              {difficulty}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="font-helvetica font-medium text-foreground">
              {formatDuration(duration)}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="font-helvetica font-medium text-foreground">
              10 Naaf St, Strydompark, Randburg, 2169
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Availability</p>
            <p className="font-helvetica font-medium text-foreground">
              {spotsFilled} / {maxAttendees} spots filled
            </p>
            {/* Progress Bar */}
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <p className="mt-1 text-sm text-primary">
              {spotsRemaining} spots remaining
            </p>
          </div>
        </div>
      </div>

      {/* Inline session selection + booking CTA */}
      <InlineSessionSelector
        maxAttendees={maxAttendees}
        standardPrice={standardPrice}
        sessions={sessions}
        sessionInfos={sessionInfos}
        maxSelections={5}
      />

      {/* Cancellation Policy */}
      <p className="mt-4 text-center text-xs text-white/80">
        Free cancellation up to 48 hours before class
      </p>
    </div>
  )
}
