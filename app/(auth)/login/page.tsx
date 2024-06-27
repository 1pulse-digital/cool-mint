import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import { LoginForm } from "./components/form"

const Page = () => {
  return (
    <div className="grid place-content-center">
      <h1 className="pb-4 text-center text-3xl font-bold text-foreground md:text-start">
        Login
      </h1>
      <div className="flex min-w-[360px] items-center gap-4">
        <p className="grow text-sm text-muted-foreground">
          Don&rsquo;t have an account?
        </p>
        <Link href="/register">
          <Button className="flex gap-2" variant={"link"}>
            Create an account
            <MoveRight />
          </Button>
        </Link>
      </div>
      <LoginForm />
    </div>
  )
}

export default Page
