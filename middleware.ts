import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  (req: NextRequest) => {
    const res = NextResponse.next();

    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/movies", req.url));
    }

    return res;
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (token === null) {
          return false;
        }

        return true;
      },
    },
    pages: {
      signIn: "/sign-in",
    },
  }
);

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
