import type { MiddlewareConfig } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "~/i18n/routing";

const createIntlMiddleware = createMiddleware(routing);

export default clerkMiddleware((_auth, request) => {
  return createIntlMiddleware(request);
});

export const config: MiddlewareConfig = {
  matcher: [
    "/",
    "/(de-DE|en-US|es-ES|ms-MY|fr-FR|hi-IN|it-IT|pl-PL|tr-TR|uk-UA|zh-CN)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

// import {
//   defaultLocale,
//   localePrefix,
//   locales,
//   pathnames,
// } from "~/../reliverse.i18n";
// const intlMiddleware = createMiddleware({
//   defaultLocale,
//   localePrefix,
//   locales,
//   pathnames,
// });
// export const config = {
// Skip all paths that should not be internationalized
//   matcher: [
//     "/((?!api|_next|.*\\..*).*)",
//     Exclude files with an extension (.jpg, .js, .css), as these are usually static files.
//     Also exclude files in the _next directory, which are Next.js internal files.
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     Re-include any files in the api or trpc folders, even if they have an extension.
//     "/(api|trpc)(.*)",
//   ],
// };
