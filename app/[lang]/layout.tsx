import type { Metadata } from "next";
import "../globals.css";
import { fontLora, fontMontserrat } from "@/lib/fonts/google-fonts";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';


// Lazy load components for better performance
const ScrollNavigation = dynamic(
  () =>
    import("@/components/ui/scroll-navigation.tsx").then(
      (mod) => mod.ScrollNavigation
    ),
  {
    loading: () => <div className="h-16 bg-transparent" aria-hidden="true" />,
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Ali Hossaini - Home Page",
    de: "Ali Hossaini - Startseite",
    fa: "علی حسینی - صفحه اصلی",
  };

  const descriptions = {
    en: "Full Stack Developer specializing in modern web applications with React, Next.js, and cutting-edge technologies. Browse my projects and get in touch.",
    de: "Full Stack Developer spezialisiert auf moderne Webanwendungen mit React, Next.js und innovativen Technologien. Entdecken Sie meine Projekte und kontaktieren Sie mich.",
    fa: "توسعه دهنده فول استک متخصص در برنامه های وب مدرن با ری اکت، نکست جی اس و تکنولوژی های پیشرفته. مشاهده پروژه ها و تماس با من.",
  };

  return {
    title: {
      default: titles[lang as keyof typeof titles] || titles.en,
      template: `%s | ${titles[lang as keyof typeof titles] || titles.en}`,
    },
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.en,
    keywords: [
      "full stack developer",
      "web development",
      "react",
      "nextjs",
      "portfolio",
      "frontend developer",
      "backend developer",
      "modern web applications",
    ],
    authors: [{ name: "Ali Hossaini" }],
    creator: "Ali Hossaini",
    publisher: "Ali Hossaini",
    metadataBase: new URL("https://alihossaini.de"),
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
      siteName: "Ali Hossaini Portfolio",
      title: titles[lang as keyof typeof titles] || titles.en,
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions.en,
      locale: lang === "fa" ? "fa_IR" : lang === "de" ? "de_DE" : "en_US",
      alternateLocale: ["en_US", "de_DE", "fa_IR"],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang as keyof typeof titles] || titles.en,
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions.en,
      creator: "@alihossaini",
    },
    verification: {
      // Add Google Search Console verification here
      // google: 'your-verification-code',
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
            <ScrollNavigation />
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
