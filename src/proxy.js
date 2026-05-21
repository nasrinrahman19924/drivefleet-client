import { NextResponse } from "next/server";

export function proxy(request) {

  const token = request.cookies.get("token")?.value;

  const protectedRoutes = [
    "/add-car",
    "/my-cars",
    "/my-bookings"
  ];

  const isProtected = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  
  if (isProtected && !token) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-car/:path*",
    "/my-cars/:path*",
    "/my-bookings/:path*",
  ],
};