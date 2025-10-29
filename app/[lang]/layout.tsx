import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { ScrollNavigation } from "@/components/ui/scroll-navigation.tsx";
import { fontLora, fontMontserrat } from "@/lib/fonts/google-fonts";


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
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.en,
    keywords: ["nextjs", "portfolio"],
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
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "fa" }];
}

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
      </body>
    </html>
  );
}
