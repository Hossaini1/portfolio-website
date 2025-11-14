import type { Metadata } from "next";
import "../globals.css";
import { fontLora, fontMontserrat } from "@/lib/fonts/google-fonts";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Ali Naghi Hossaini | Full Stack Developer Portfolio (Next.js, React)",
    de: "Ali Naghi Hossaini | Full Stack Entwickler Portfolio (Next.js, React)",
    fa: "علی نقی حسینی | نمونه کار توسعه دهنده فول استک (Next.js, React)",
  };

  const descriptions = {
    en: "Full Stack Developer Ali Naghi Hossaini: Expert in Next.js, React, and clean code. Explore 50+ modern web projects, from responsive frontends to robust backend solutions.",
    de: "Full Stack Entwickler Ali Naghi Hossaini: Experte für Next.js, React & sauberen Code. Entdecken Sie 50+ moderne Webprojekte, von responsiven Frontends bis zu robusten Backend-Lösungen.",
    fa: "علی نقی حسینی، توسعه دهنده فول استک: متخصص در Next.js، ری اکت و کدنویسی تمیز. بیش از ۵۰ پروژه وب مدرن، از فرانت‌اند واکنش‌گرا تا راه حل‌های بک‌اند قوی را مشاهده کنید.",
  };

  // Hilfsfunktion zur sicheren Abfrage der Sprache
  const currentLang = (lang as keyof typeof titles) || "en";

  return {
    title: {
      default: titles[currentLang],
      // Fügt den individuellen Seitentitel hinzu, z.B. "Projekte | Ali Naghi Hossaini..."
      template: `%s | ${titles[currentLang]}`, 
    },
    description: descriptions[currentLang],
    keywords: [
      "Full Stack Developer",
      "Webentwickler",
      "Next.js Portfolio",
      "React Developer",
      "TypeScript",
      "Laravel",
      "Frontend Developer",
      "Backend Developer",
      "Web Development",
      "Ali Naghi Hossaini",
      "moderne Webanwendungen",
      "Web Developer",
    ],
    authors: [{ name: "Ali Naghi Hossaini" }],
    creator: "Ali Naghi Hossaini",
    publisher: "Ali Naghi Hossaini",
    metadataBase: new URL("https://www.alihossaini.de"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        de: "/de",
        fa: "/fa",
        "x-default": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Ali Naghi Hossaini | Full Stack Developer Portfolio",
      title: titles[currentLang],
      description: descriptions[currentLang],
      locale: lang === "fa" ? "fa_IR" : lang === "de" ? "de_DE" : "en_US",
      alternateLocale: ["en_US", "de_DE", "fa_IR"],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[currentLang],
      description: descriptions[currentLang],
      creator: "@alihossaini",
    },
    verification: {
      // Füge hier die Google Search Console Verifizierung hinzu
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "fa" }];
}

export const revalidate = 86400;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <body
        className={`${fontMontserrat.variable} ${fontLora.variable} font-sans antialiased`}
        dir={lang === "fa" ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/Person"
        itemID="https://alihossaini.de"
      >
        <Suspense fallback={<>{children}</>}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            {/* Skip to main content link for accessibility */}
            <Link
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
            >
              Skip to main content
            </Link>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
