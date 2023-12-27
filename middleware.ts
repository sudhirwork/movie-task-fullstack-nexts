import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const res = NextResponse.next();
  console.log("middleware", req.nextUrl.pathname);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/movies", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
