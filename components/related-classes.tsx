import { getRelatedClasses } from "@/app/classes/actions"
import { RelatedClassCard } from "./related-class-card"

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
          <RelatedClassCard key={course.name} course={course} />
        ))}
      </div>
    </>
  )
}
