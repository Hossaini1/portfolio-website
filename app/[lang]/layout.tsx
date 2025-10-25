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

// ✅ STATIC METADATA - Keine dynamischen Berechnungen
// export const metadata: Metadata = {
//   title: {
//     default: "Ali Naghi Hossaini | Full Stack Developer",
//     template: "%s | Ali Naghi Hossaini"
//   },
//   description: "Full Stack Developer specializing in React, Next.js, TypeScript",
//   metadataBase: new URL('https://yourdomain.com'),

// };

// dir={lang === "fa" ? "rtl" : "ltr"}

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
    en: "Full Stack Developer Portfolio - Modern web applications with React, Next.js and cutting-edge technologies",
    de: "Full Stack Developer Portfolio - Moderne Webanwendungen mit React, Next.js und innovativen Technologien",
    fa: "نمونه کارهای توسعه دهنده فول استک - برنامه های وب مدرن با React, Next.js و تکنولوژی های پیشرفته",
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
        className={`antialiased ${montserrat.variable} ${poppins.variable} antialiased`}
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
