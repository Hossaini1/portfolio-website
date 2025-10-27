import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang={lang} suppressHydrationWarning >
      <body
        className={`antialiased ${montserrat.variable} ${poppins.variable} font-sans`} 
        dir={lang === "fa" ? "rtl" : "ltr"} 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
