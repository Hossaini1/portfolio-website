import type { Metadata } from "next";
import "../globals.css";
import { fontLora, fontMontserrat } from "@/lib/fonts/google-fonts";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ThemeProvider } from "next-themes";

// Lazy load components for better performance
const ScrollNavigation = dynamic(
  () => import('@/components/ui/scroll-navigation.tsx').then(mod => mod.ScrollNavigation),
  { 
    loading: () => <div className="h-16 bg-transparent" />
  }
);


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Home | Portfolio",
    de: "Startseite | Portfolio",
    fa: "صفحه اصلی",
  };

  const descriptions = {
    en: "Full Stack Developer Portfolio - Modern web applications cutting-edge technologies",
    de: "Full Stack Developer Portfolio - Moderne Webanwendungen mit innovativen Technologien",
    fa: "وبسایت شخصی نمونه کارهای توسعه دهنده فول استک - برنامه های وب مدرن",
  };

  return {
    title: {
      default: titles[lang as keyof typeof titles] || titles.en,
      template: `%s | ${titles[lang as keyof typeof titles] || titles.en}`,
    },
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    keywords: ["nextjs", "portfolio", "fullstack", "developer"],
    authors: [{ name: "Ali Hossaini" }],
    creator: "Ali Hossaini",
    metadataBase: new URL("https://alihossaini.de"),
    alternates: {
      languages: {
        en: "/en",
        de: "/de",
        fa: "/fa",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: 'Ali Hossaini Portfolio',
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
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} ${fontLora.variable} font-sans antialiased`}
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <Suspense fallback={<>{children}</>}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <ScrollNavigation />
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}