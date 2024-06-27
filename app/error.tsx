"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [message, setMessage] = useState<string | undefined>()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    setMessage(error.message)
  }, [error])

  return (
    <div className="grid w-full place-content-center">
      <div className={"flex flex-col justify-center gap-8"}>
        <h2 className={"text-center text-2xl"}>Ooops, something went wrong</h2>
        {message && (
          <span className={"text-center font-mono text-muted-foreground"}>
            {message}
          </span>
        )}
        <div className={"flex justify-center"}>
          <Button
            size={"sm"}
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            <RefreshCw className={"mr-2 h-4 w-4"} />
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}
