import { NextResponse, type NextRequest } from "next/server";

/**
 * Azerbaijani (default) has no URL prefix, Russian lives under /ru.
 * - /ru, /ru/...   → served as is (app/[lang] with lang = "ru")
 * - /az, /az/...   → 308 to the un-prefixed URL (one canonical address)
 * - everything else → internally rewritten to /az/...
 */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (pathname === "/ru" || pathname.startsWith("/ru/")) return NextResponse.next();

  if (pathname === "/az" || pathname.startsWith("/az/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = req.nextUrl.clone();
  url.pathname = `/az${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API and any file with an extension (photos, video, icons, robots.txt…).
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
