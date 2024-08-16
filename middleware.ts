import { NextRequest, NextResponse } from "next/server";

export const protectedRoutes = ["/", "/course"];
export const authRoutes = ["/auth"];

const isprotectedRoutes = (path: string) => {
  if (path === "/") return true;
  if (path.includes("course")) return true;
  return false;
};

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value as string;
  console.log(req.nextUrl.pathname);
  if (token) {
    if (authRoutes.includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/", req.url));
  } else if (isprotectedRoutes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
};
