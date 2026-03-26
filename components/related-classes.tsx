import { getRelatedClasses } from "@/app/classes/actions"
import { moneyFormatter } from "@/lib/util/money-formatter"
import { SignalHigh } from "lucide-react"
import Image from "next/image"

interface RelatedClassesProps {
  masterClassName: string
  limit: number
  title: string
}

export async function RelatedClasses({
  masterClassName,
  limit,
  title,
}: RelatedClassesProps) {
  const response = await getRelatedClasses({
    name: masterClassName,
    limit,
  })

  if (!response.masterClasses?.length) {
    return null
  }

  return (
    <>
      <div>
        <h2 className="pt-6 font-helvetica text-lg font-bold text-muted-foreground">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg py-10 sm:grid-cols-2 lg:grid-cols-4">
        {response.masterClasses.map((course) => (
          <a
            key={course.name}
            href={`/classes/${course.name.replace("masterClasses/", "")}`}
          >
            <div className="group cursor-pointer rounded-b-lg border-primary/10 bg-[#262626]">
              <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                <Image
                  src={course.gallery.thumbnail.url}
                  alt={course.displayName}
                  className="object-cover transition-transform group-hover:scale-105"
                  fill
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="mt-3 font-helvetica font-semibold text-foreground">
                  {course.displayName}
                </h3>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {course.duration} Minutes
                  </span>
                  <span className="font-semibold text-primary">
                    {moneyFormatter.format(course.standardPrice / 100n)}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <SignalHigh className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-helvetica font-medium normal-case text-foreground">
                      {course.difficulty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
