import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
  
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();

  // TODO: This middleware does not update the browser URL when redirecting (presumably due to a Next.js bug)
  // so we can't use it for now.
  //   if (request.nextUrl.pathname.startsWith("/admin")) {
  //     if (!token) {
  //       console.log("redirecting to login from", request.nextUrl.pathname)
  //       return NextResponse.redirect(new URL("/login", request.url))
  //     }
  //   }
  return NextResponse.next()
}

export const config = {
  matcher: '/app/cart/:path*',
}
