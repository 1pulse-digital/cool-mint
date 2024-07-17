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
  className?: string
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

export function Breadcrumbs({ crumbs, className }: BreadcrumbsProps) {
  return (
    <Breadcrumb className={cn("grid justify-center mt-8",className)}>
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
