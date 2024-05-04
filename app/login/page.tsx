import Link from "next/link";
import { MoveRight } from "lucide-react";
import { LoginForm } from "@/components/base/loginForm";
import { Button } from "@/components/ui/button"

const Login: React.FC = () => {

  return (
    <div className={"bg-background"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-screen w-full object-cover bg-[#767676]">
          </div>
        </div>
        <div className="grid place-content-center px-8 md:px-16 2xl:mx-52 2xl:px-0 sm:h-auto py-20">
        <div className="grid place-content-center">
      <h1 className="py-4 text-3xl font-bold text-secondary md:text-start">
        Login
      </h1>
      <div className="flex items-center gap-4 pb-4">
        <p className="text-[] text-secondary grow">
        Don&rsquo;t have an account?
        </p>
        <Link href="/register">
          <Button className="flex gap-2 text-[#fdbb10]" variant={"link"}>
            Create an account
          <MoveRight />
          </Button>
        </Link>
      </div>
      <div><LoginForm /></div>
    </div>
    </div>
  </div>
 </div>
  );
};

export default Login;
