// import { NextResponse } from "next/server";
// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// const locales = ["en", "de", "fa"];
// const defaultLocale = "en";

// const getLocale = (request: Request): string => {
//   const headers = Object.fromEntries(request.headers.entries());
//   const languages = new Negotiator({ headers }).languages();
//   return match(languages, locales, defaultLocale);
// };

// export function middleware(request: Request) {
//   const { pathname } = new URL(request.url);

//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return NextResponse.next();

//   const locale = getLocale(request);
//   const newUrl = new URL(`/${locale}${pathname}`, request.url);

//   return NextResponse.redirect(newUrl);
// }

// export const config = {
//   matcher: ["/((?!_next|api).*)"],
// };



import { NextResponse, NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'de', 'fa'] as const;
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Prüfe ob aktuelle URL bereits eine Locale hat
  const currentLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Wenn bereits eine Locale in der URL ist, nichts tun
  if (currentLocale) {
    return NextResponse.next();
  }

  // Prüfe Referer Header für vorherige Sprache
  const referer = request.headers.get('referer');
  if (referer) {
    const refererUrl = new URL(referer);
    const refererLocale = locales.find(
      (locale) => refererUrl.pathname.startsWith(`/${locale}/`) || refererUrl.pathname === `/${locale}`
    );
    
    // Wenn Referer eine Sprache hatte, diese beibehalten
    if (refererLocale) {
      request.nextUrl.pathname = `/${refererLocale}${pathname}`;
      return NextResponse.redirect(request.nextUrl);
    }
  }

  // Fallback: Neue Sprache bestimmen
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};