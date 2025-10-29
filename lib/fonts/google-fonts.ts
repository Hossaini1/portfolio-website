import { Lora, Montserrat } from "next/font/google";

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const fontMontserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// const fontGeist = Geist({
//   variable: "--font-geist",
//   subsets: ["latin"],
//   display: "swap",
// });

// const fontVazirmatn = Vazirmatn({
//   variable: "--font-vazirmatn",
//   subsets: ["arabic", "latin"],
//   display: "swap",
// });

// const fontPoppins = Poppins({
//   variable: "--font-Poppins",
//   subsets: ["latin"],
//   display: "swap",
//   weight: "600",
// });

export {  fontLora, fontMontserrat};
