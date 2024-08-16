import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
// import { createAccount } from "@/lib/services";
import { useForm } from "react-hook-form";
import { cn, SignUpForm, signUpFormResolver } from "@/lib/utils";
// import userStore from "@/hooks/user-store";
import { toast } from "sonner";
import { createAccount } from "@/lib/services";

const SignUp = ({ setisSignIn }: { setisSignIn: () => void }) => {
  const { register, handleSubmit, formState } = useForm<SignUpForm>({
    resolver: signUpFormResolver,
  });
  const { errors } = formState as unknown as {
    errors: { [key: string]: string };
  };
  const [loading, setloading] = useState(false);

  const createUser = async (payload: SignUpForm) => {
    try {
      setloading(true);
      const data = await createAccount(payload);
      toast.success("Account Created");
      setisSignIn();
    } catch (e: any) {
      console.log(e?.response?.data);
      toast.error(e?.response?.data || "Error Occured");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-primary p-8 lg:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground">
            Sign Up
          </h1>
          <p className="text-primary-foreground/80">
            Create an account to start learning.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(createUser)}>
          <div className="space-y-1">
            <Label
              htmlFor="name"
              className={cn(
                "text-primary-foreground",
                errors.name && "text-red-500"
              )}>
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className={cn(
                "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground",
                errors.name && " focus:ring-red-500"
              )}
              {...register("name")}
            />
            <span className="text-red-500 text-sm">{errors?.name}</span>
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="email"
              className={cn(
                "text-primary-foreground",
                errors.email && "text-red-500"
              )}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              className={cn(
                "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground",
                errors.email && " focus:ring-red-500"
              )}
            />
            <span className="text-red-500 text-sm">{errors?.email}</span>
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="password"
              className={cn(
                "text-primary-foreground",
                errors.password && "text-red-500"
              )}>
              Password
            </Label>
            <Input
              placeholder="*********"
              type="password"
              {...register("password")}
              className={cn(
                "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground",
                errors.password && " focus:ring-red-500"
              )}
            />
            <span className="text-red-500 text-sm">{errors?.password}</span>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground">
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-xl mx-2" />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <p className="text-center text-sm text-primary-foreground/80">
          Already have an account?{" "}
          <span className="underline cursor-pointer" onClick={setisSignIn}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
