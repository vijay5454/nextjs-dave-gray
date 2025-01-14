import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center gap-6">
      <h1 className="text-2xl font-bold">Vijay's Repair shop</h1>
      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
};

export default Login;
