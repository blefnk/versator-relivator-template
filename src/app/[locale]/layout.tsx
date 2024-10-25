import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

// import { UnifiedBleverseFooter } from "#/layout/bleverse/unified-bleverse-footer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hideTailwindIndicator } from "~/../reliverse.config";
import type { Locale } from "~/../reliverse.i18n";
import { defaultLocale, locales } from "~/../reliverse.i18n";
import { getTranslations } from "next-intl/server";
import { extractRouterConfig } from "uploadthing/server";

import { config as reliverse } from "@reliverse/core";
import { siteConfig } from "~/app";
import { LoglibAnalytics } from "~/components/Common/loglib-analytics";
import { TailwindScreens } from "~/components/Common/tailwind-indicator";
import { SiteFooter } from "~/components/Navigation/SiteFooter";
import { SiteHeader } from "~/components/Navigation/SiteHeader";
import { AuthProvider } from "~/components/Providers/AuthProvider";
import { ThemeProvider } from "~/components/Providers/ThemeProvider";
// import { UnifiedBleverseHeader } from "#/layout/bleverse/unified-bleverse-header";
import { Toaster } from "~/components/ui/toaster";
import { env } from "~/env";
import { ourFileRouter } from "~/server/helpers/uploadthing-core";
// import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/utils/cn";

// import { headers } from "next/headers";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";

const baseMetadataURL = env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

type RootLocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// @see https://github.com/blefnk/relivator
export async function generateMetadata({
  params,
}: Omit<RootLocaleLayoutProps, "children">) {
  const { locale } = await params;

  // We only need the getTranslations on async components
  // useTranslations works both on the server and the client side.
  const t = await getTranslations({ locale, namespace: "RootLocaleLayout" });

  // Each page in the app will have the following metadata - you can override
  // them by defining the metadata in the page.tsx or in children layout.tsx.
  const metadata: Metadata = {
    alternates: {
      canonical: new URL(baseMetadataURL),
    },
    applicationName: siteConfig.name,
    authors: [
      {
        name: siteConfig.author.handle,
        url: reliverse.social.github,
      },
    ],
    creator: siteConfig.author.handle,
    description: t("metadata.description"),
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    keywords: siteConfig.keywords,
    openGraph: {
      alternateLocale: locales.filter((locale) => locale !== defaultLocale),
      description: t("metadata.description"),
      images: [`${baseMetadataURL}/og.png`],
      locale: defaultLocale,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${t("titleDetails")}`,
      type: "website",
      url: baseMetadataURL,
    },
    other: {
      "darkreader-lock": "meta",
    },
    publisher: siteConfig.appPublisher,
    robots: {
      follow: true,
      index: true,
    },
    title: {
      default: siteConfig.name,
      template: `%s – ${siteConfig.appNameDesc}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.author.handleAt,
      description: t("metadata.description"),
      images: [`${baseMetadataURL}/og.png`],
      site: siteConfig.author.handleAt,
      title: siteConfig.name,
    },
  };

  return metadata;
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { color: "white", media: "(prefers-color-scheme: light)" },
    { color: "black", media: "(prefers-color-scheme: dark)" },
  ],
};

const fontSans = localFont({
  display: "swap",
  src: "../../styles/fonts/FiraSans-Regular.ttf",
  variable: "--font-sans",
  weight: "400",
});

// import { Inter as FontSans } from "next/font/google";
// const fontSansInter = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans"
// });

// const fontHeading = localFont({
//   src: "../../fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading"
// });

const fontMono = localFont({
  src: "../../styles/fonts/GeistMonoVF.woff",
  variable: "--font-mono",
});

// Chromium browsers flags emojis fix
const fontFlag = localFont({
  display: "auto",
  src: "../../styles/fonts/Twemoji-Flags.woff2",
  variable: "--font-twemoji",
});

// This is the "root" layout. It checks for valid locales,
// sets up the fonts, themes, analytics, providers, & more.
// This file serves as the primary entry point for the app.
export default async function RootLocaleLayout({
  children,
  params,
}: RootLocaleLayoutProps) {
  const { locale } = await params;

  // TODO: fix Next.js 15 Error: Route "/[locale]" used `headers().get('X-NEXT-INTL-LOCALE')`. `headers()` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  // const { locale: paramsLocale } = await params;
  // Await the headers to get the 'X-NEXT-INTL-LOCALE' value
  // const headerList = await headers();
  // const localeHeader = headerList.get("X-NEXT-INTL-LOCALE") || paramsLocale;
  // Fallback to params locale if the header doesn't exist
  // const locale = locales.includes(localeHeader as Locale)
  // ? localeHeader
  // : defaultLocale;

  // Check if the locale is valid, otherwise return a 404
  // if (!locales.includes(locale as Locale)) {
  // return notFound();
  // }

  // Providing all messages to the client side
  // const messages = await getMessages();

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <AuthProvider locale={locale}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,

            // fontHeading.variable,
            fontMono.variable,
            fontFlag.variable,
          )}
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {/* <TRPCReactProvider> */}
          <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
              <SiteHeader />
              {/* <UnifiedBleverseHeader /> */}
              {children}
              {/* <UnifiedBleverseFooter /> */}
              <SiteFooter />
              {/* <Reliverse /> */}
              {hideTailwindIndicator === false && <TailwindScreens />}
            </NextIntlClientProvider>
          </ThemeProvider>
          {/* </TRPCReactProvider> */}
          <Toaster />
          <LoglibAnalytics />
          <VercelAnalytics />
          <SpeedInsights />
        </body>
      </AuthProvider>
    </html>
  );
}
