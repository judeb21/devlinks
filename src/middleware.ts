import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;


  console.log("current path", currentPath);

  // if (currentPath.startsWith("/dashboard") && user.ok === false) {
  //   return NextResponse.redirect(new URL("/signin", request.url));
  // }

  return NextResponse.next();
}