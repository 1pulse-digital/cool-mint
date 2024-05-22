import Link from "next/link"
import { LoginForm } from "./components/form"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

const Page = () => {
  return (
    <div className="grid place-content-center">
      <h1 className="py-4 text-center text-3xl font-bold text-foreground md:text-start">
        Login
      </h1>
      <div className="flex items-center gap-4 min-w-[360px]">
        <p className="text-sm text-muted-foreground grow">
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
