import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/playlists", "/library"];

export default function middleware(req: NextRequest) {
  if (protectedRoutes.find((route) => route === req.nextUrl.pathname)) {
    const token = req.cookies.fullstack_access_token;

    if (!token) return NextResponse.rewrite(new URL("/signin", req.url));
  }
}
