"use server"

import { upcomingSessions } from "@/app/classes/actions"
import { Skeleton } from "@/components/ui/skeleton"
import { UpcomingWorkshops } from "./base/upcomingWorkshops"
import { Card, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export const UpcomingClasses = async () => {
  const response = await upcomingSessions({})
  return (
    <UpcomingWorkshops
      masterClasses={response.masterClasses}
      sessions={response.sessions}
    />
  )
}

export const UpcomingClassesLoader = () => {
  return (
    <div className="py-1 font-medium text-primary">
      <Tabs defaultValue="loading">
        <div className="mt-10">
          <div className="mx-2 pb-16 sm:px-4  xl:px-0 2xl:px-0">
            <TabsList className="h-18 grid w-full grid-cols-5 bg-[#27272A] px-2 py-2 text-foreground">
              <TabsTrigger value={"loading"} className="p-5">
                <Skeleton className="h-4 w-[120px]" />
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="px-0 xl:px-0 2xl:px-40">
          <TabsContent value={"loading"} className="px-10">
            <Card className="border-0 bg-background">
              <CardTitle className="pb-8 text-start font-helvetica text-lg font-normal text-primary">
                <span className="animate-pulse">
                  Looking for upcoming classes...
                </span>
              </CardTitle>
              <Skeleton className="h-[100px] w-full" />
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
