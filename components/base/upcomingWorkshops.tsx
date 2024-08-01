"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { format } from "date-fns"
import React from "react"
import { WorkshopItem } from "../workshop"

interface UpcomingWorkshopsProps {
  sessions: Session[]
  masterClasses: MasterClass[]
}

export const UpcomingWorkshops: React.FC<UpcomingWorkshopsProps> = ({
  masterClasses,
  sessions,
}) => {
  // const dates = sessions.map((session) => session.date)
  // const months = dates.map((dateS) => format(new Date(dateS), "MMMM"))
  // const categories = masterClasses.map((masterClass) => masterClass.tags)

  // Create a map to store sessions grouped by month
  const sessionMap = new Map<string, Session[]>()
  let defaultMonth: string = ""
  sessions.forEach((session) => {
    // Get the month of the session date
    const month = format(new Date(session.date), "MMMM")

    // Set the default month if it hasn't been set yet
    defaultMonth = defaultMonth || month

    // Add the session to the corresponding month in the session map
    if (sessionMap.has(month)) {
      sessionMap.get(month)?.push(session)
    } else {
      sessionMap.set(month, [session])
    }
  })

  return (
    <div className="py-1 font-medium text-primary">
      <Tabs defaultValue={defaultMonth}>
        <div className="mt-10">
          {/* Filtering by month */}
          <div className="mx-2 pb-16 sm:px-4  xl:px-0 2xl:px-0">
            <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2 text-foreground">
              {Array.from(sessionMap.keys()).map((month) => (
                <TabsTrigger key={month} value={month} className="p-5">
                  {month}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="px-0 xl:px-0 2xl:px-40">
          {Array.from(sessionMap.keys()).map((month) => (
            <TabsContent key={month} value={month} className="space-y-8 px-10">
              {sessionMap.get(month)?.map((session) => {
                const masterClass = masterClasses.find(
                  (masterClass) => session.parent === masterClass.name,
                )
                if (masterClass === undefined) {
                  console.error("Master class not found for session", session)
                  return null
                }
                return (
                  <Card className="border-0 bg-background" key={session.name}>
                    <WorkshopItem masterClass={masterClass} session={session} />
                  </Card>
                )
              })}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
