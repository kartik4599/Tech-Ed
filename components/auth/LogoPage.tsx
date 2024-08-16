import { cn } from "@/lib/utils";
import { IoIosPhonePortrait } from "react-icons/io";

export default function LogoPage({ isSignIn }: { isSignIn: boolean }) {
  return (
    <div
      className={cn(
        "hidden lg:flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
        {
          "bg-background": !isSignIn,
          "bg-primary": isSignIn,
        }
      )}>
      <div className="mx-auto max-w-md text-center space-y-2">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-background p-4 text-6xl text-primary-foreground",
            !isSignIn && "bg-primary"
          )}>
          <IoIosPhonePortrait
            className={cn(
              "h-14 w-14 text-primary",
              !isSignIn && "text-background"
            )}
          />
        </div>
        <h1
          className={cn(
            "text-3xl font-semibold",
            isSignIn && "text-primary-foreground"
          )}>
          Tech-Ed
        </h1>
        <p
          className={cn(
            "text-sm text-muted-foreground",
            isSignIn && "text-muted-foreground"
          )}>
          Become a mobile repair expert with our comprehensive app. Learn from
          industry professionals and gain hands-on skills to kickstart your
          career.
        </p>
      </div>
    </div>
  );
}
