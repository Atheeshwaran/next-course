import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookies } from "lib/cookie";

const protectedRoutes = ["/dashboard", "/"];
const failedRedirect = new URL(`https://quantman-staging.in`);

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const token = getCookies("token")(req);

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(failedRedirect);
    }
    try {
      const verifyRes = await fetch(`${req.nextUrl.origin}/api/auth/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (verifyRes.ok) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(failedRedirect);
      }
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(failedRedirect);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
