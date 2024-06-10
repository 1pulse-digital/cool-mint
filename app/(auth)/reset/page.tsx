import { ResetPasswordForm } from "./components/form"

const Page = () => {
  return (
    <div className="grid place-content-center">
      <h1 className="py-4 text-center text-3xl font-bold text-foreground md:text-start">
        Reset Password
      </h1>
      <ResetPasswordForm />
    </div>
  )
}

export default Page
