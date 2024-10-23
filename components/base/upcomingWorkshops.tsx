"use client"

import { Card, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { format, formatDate } from "date-fns"
import React from "react"
import { WorkshopItem } from "../workshop"

interface UpcomingWorkshopsProps {
  single: boolean
  sessions: Session[]
  masterClasses: MasterClass[]
}

export const UpcomingWorkshops: React.FC<UpcomingWorkshopsProps> = ({
  single,
  masterClasses,
  sessions,
}) => {
  // Create a map to store sessions grouped by month
  const sessionMap = new Map<string, Session[]>()

  sessions.forEach((session) => {
    // Get the month of the session date
    const yyyyMM = format(new Date(session.date), "yyyy-MM")

    // Add the session to the corresponding month in the session map
    if (sessionMap.has(yyyyMM)) {
      sessionMap.get(yyyyMM)?.push(session)
    } else {
      sessionMap.set(yyyyMM, [session])
    }
  })

  const months = Array.from(sessionMap.keys()).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime()
  })

  // Set the default month (which tab to select by default)
  let defaultMonth: string = months[0]

  return (
    <div className="py-1 font-medium text-primary">
      <Tabs defaultValue={defaultMonth}>
        <div className="mt-10">
          {/* Filtering by month */}
          <div className="mx-2 pb-16 sm:px-4 xl:px-0 2xl:px-0">
            <TabsList className="h-18 grid w-full grid-cols-4 gap-2 bg-[#27272A] py-2 text-foreground sm:grid-cols-5">
              {months.map((month) => (
                <TabsTrigger key={month} value={month} className="p-5">
                  {formatDate(new Date(month), "MMMM")}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="px-0 xl:px-0 2xl:px-40">
          {single && (
            <CardTitle className="mb-4 text-foreground">
              {masterClasses[0].displayName}
            </CardTitle>
          )}
          {months.map((month) => (
            <TabsContent key={month} value={month} className="space-y-8 px-10">
              {sessionMap
                .get(month)
                ?.sort((a, b) => {
                  return new Date(a.date).getTime() - new Date(b.date).getTime()
                })
                .map((session) => {
                  const masterClass = masterClasses.find(
                    (masterClass) => session.parent === masterClass.name,
                  )
                  if (masterClass === undefined) {
                    console.error("Master class not found for session", session)
                    return null
                  }
                  return (
                    <Card className="border-0 bg-background" key={session.name}>
                      <WorkshopItem
                        single={single}
                        masterClass={masterClass}
                        session={session}
                      />
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
