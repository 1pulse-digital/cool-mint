import { Button } from "@/components/ui/button"
import Link from "next/link"

function notFound() {
  return (
    <div className={"flex flex-col h-full justify-center"}>
      <span className={"text-center text-xl font-light text-primary"}>404</span>
      <h1 className={"py-4 text-center text-4xl font-bold"}>Page not found</h1>
      <span className={"text-center text-xl font-light text-muted-foreground"}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </span>
      <div className="py-8 text-center ">
        <Link href="/">
          <Button variant={"link"} color="primary">
            Continue browsing
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default notFound
