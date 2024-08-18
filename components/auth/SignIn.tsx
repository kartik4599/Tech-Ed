import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { cn, SignInForm, signInFormResolver } from "@/lib/utils";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginAccount } from "@/lib/services";

const SignIn = ({ setisSignUp }: { setisSignUp: () => void }) => {
  const { handleSubmit, formState, register } = useForm<SignInForm>({
    resolver: signInFormResolver,
  });

  const router = useRouter();
  const { errors } = formState as unknown as {
    errors: { [key: string]: string };
  };
  const [loading, setloading] = useState(false);

  const loginHandler = async (payload: SignInForm) => {
    try {
      setloading(true);
      const { token } = await loginAccount(payload);
      localStorage.setItem("token", token);
      toast.success("Logged In Succefully");
      router.push("/");
    } catch (e) {
      toast.error("Error Occured");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-muted p-8 lg:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your email and password to access your account.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(loginHandler)}>
          <div className="space-y-1">
            <Label
              htmlFor="email"
              className={cn(errors.email && "text-red-500")}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
            />
            <span className="text-red-500 text-sm">{errors?.email}</span>
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="password"
              className={cn(errors.email && "text-red-500")}>
              Password
            </Label>
            <Input
              type="password"
              placeholder="*********"
              {...register("password")}
            />
            <span className="text-red-500 text-sm">{errors?.password}</span>
          </div>
          <Button type="submit" className="w-full">
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-xl mx-2" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <p
          className="text-center text-sm text-muted-foreground"
          onClick={setisSignUp}>
          Don't have an account?
          <span className="underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
