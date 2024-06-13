import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Slash } from "lucide-react"
import { cn } from "@/lib/utils"

type Crumb = {
  name: string
  href: string
}

interface BreadcrumbsProps {
  crumbs: Crumb[]
}

function CrumbItem({
  crumb,
  noSeparator,
}: {
  crumb: Crumb
  noSeparator: boolean
}) {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink key={crumb.href} asChild>
          <Link
            className={cn({ "text-primary": noSeparator })}
            href={crumb.href}
          >
            {crumb.name}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {noSeparator ? null : (
        <BreadcrumbSeparator>
          <span>|</span>
        </BreadcrumbSeparator>
      )}
    </>
  )
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <Breadcrumb className={"grid justify-center"}>
      <BreadcrumbList className="text-xs text-foreground">
        {crumbs.map((crumb, index) => (
          <CrumbItem
            key={`crumb-${index}`}
            crumb={crumb}
            noSeparator={index === crumbs.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
