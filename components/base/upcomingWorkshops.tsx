import { Card, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MasterClass } from "@/lib/fusion/masterClass/masterClass.pb"
import { Session } from "@/lib/fusion/masterClass/session.pb"
import { format } from "date-fns"
import Link from "next/link"
import React from "react"
import { Clock2, User, CalendarClock } from "lucide-react"
import ButtonGroupWorkshops from "./buttonGroupWorkshops"
import { moneyFormatter } from "@/lib/util/money-formatter"

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

  const sessionMap = new Map<string, Session[]>()
  let defaultMonth: string = ""
  sessions.forEach((session) => {
    const month = format(new Date(session.date), "MMMM")
    defaultMonth = defaultMonth || month
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
          {/* Filtering by category */}

          {/* <div className="mx-10 sm:px-20 md:px-40 xl:px-28 2xl:px-60"> */}
          {/* <p className="text-center text-xs text-muted-foreground">Filter by</p> */}
          {/* <TabsList className="my-6 grid w-full grid-cols-3 bg-[#27272A] px-2 text-foreground">
              <TabsTrigger value="january woodwork">Woodwork</TabsTrigger>
              <TabsTrigger value="february">Metalwork</TabsTrigger>
              <TabsTrigger value="march">Engineering</TabsTrigger>
            </TabsList> */}
          {/* </div> */}

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
            <TabsContent key={month} value={month} className="px-10">
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
                    <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
                      {format(new Date(session.date), "MMM do")}
                    </CardTitle>
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

interface WorkshopProps {
  masterClass: MasterClass
  session: Session
}

const WorkshopItem: React.FC<WorkshopProps> = ({
  masterClass,
  session,
  // learnMoreLink,
}) => {
  const date = new Date(session.date)
  const day = format(date, "eee")
  const stamp = format(date, "h:mm a")
  return (
    <div className="flex w-full gap-x-4">
      <span className="text-2xl font-bold text-foreground">{day}</span>
      <div className="grow">
        <div className="flex w-full flex-row flex-wrap">
          <Link href={"https://google.co.za"}>
            <div className="text-xl font-bold text-muted-foreground">
              {masterClass.displayName}
            </div>
          </Link>
          <div className="w-full pb-2 pt-4 lg:block">
            <hr className="h-[1px] w-full  flex-grow border-0 bg-[#A1A1AA]"></hr>
          </div>
        </div>
        <div className="flex space-x-4 text-xs text-foreground">
          <div className="flex space-x-2">
            <CalendarClock size={16} className="text-primary" />
            <p>{stamp}</p>
          </div>
          <div className="flex space-x-2">
            <Clock2 size={16} className="text-primary" />
            <p>{masterClass.duration / 60} hours</p>
          </div>
          <div className="flex space-x-2">
            <User size={16} className="text-primary" />
            <p>{masterClass.presenter}</p>
          </div>
        </div>
        <p className="py-2 text-sm font-normal text-white sm:text-base">
          {masterClass.description}
        </p>
      </div>
      <div className="ml-4">
        <p className="text- pt-4 font-bold text-primary lg:pt-0">
          {moneyFormatter.format(masterClass.standardPrice / 100n)}
        </p>
        <p className="py-1 text-base text-foreground">
          {masterClass.maxAttendees - session.confirmedAttendees} Spots Left
        </p>
        <ButtonGroupWorkshops
          bookLink={"https://www.google.com"}
          // learnMoreLink={learnMoreLink}
        />
      </div>
    </div>
  )
}
