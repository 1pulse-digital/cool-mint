import Link from "next/link"
import { RegisterForm } from "./components/form"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

const Page = () => {
  return (
    <div className="grid place-content-center">
      <h1 className="py-4 text-center text-3xl font-bold text-foreground md:text-start">
        Register
      </h1>
      <div className="flex items-center gap-4 min-w-[360px]">
        <p className="text-sm text-muted-foreground grow">
          Already have an account?
        </p>
        <Link href="/login">
          <Button className="flex gap-2" variant={"link"}>
            Login
            <MoveRight />
          </Button>
        </Link>
      </div>
      <RegisterForm />
    </div>
  )
}

export default Page
