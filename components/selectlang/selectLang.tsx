"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Languages, Check } from "lucide-react";
import { Button } from "../ui/button";
import {  NavAndLanguagesType } from "@/types/dictionary-types"

export default function SelectLang({ t }: { t: NavAndLanguagesType["Languages"] }) {
  const router = useRouter();
  const pathname = usePathname();

  const validLocales = ["en", "de", "fa"] as const;
  type Locale = (typeof validLocales)[number];

  const extractedLocale = pathname.split("/")[1];

  const currentLocale: Locale =
    validLocales.find((locale) => locale === extractedLocale) || "en";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languageOptions = [
    { code: "en", name: t.en || "English" },
    { code: "de", name: t.de || "Deutsch" },
    { code: "fa", name: t.fa || "Farsi" },
  ] as const;

  const handleLanguageChange = (newLocale: "en" | "de" | "fa") => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      // Root path, just add locale
      router.push(`/${newLocale}`);
    } else {
      // Replace first segment (current locale) with new locale
      segments[0] = newLocale;
      router.push("/" + segments.join("/"));
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button
        size="lg"
        onClick={toggleMenu}
        className=" flex items-center gap-2 px-4 py-2.5 rounded-l-full bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-black/20 bg-muted"
        aria-label="Change language"
      >
        <Languages className="w-5 h-5 text-foreground" />
        <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
          {currentLocale}
        </span>
      </Button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          <ul
            className="absolute right- mt-2 w-44 bg-popover border border-border rounded-lg shadow-lg dark:shadow-2xl dark:shadow-black/40 overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 z-20"
            role="menu"
            aria-label="Language selection"
          >
            {languageOptions.map(({ code, name }) => (
              <li
                key={code}
                className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-all duration-150 ${
                  code === currentLocale
                    ? "bg-accent text-accent-foreground font-semibold dark:bg-accent/90"
                    : "text-popover-foreground hover:bg-accent/50 hover:text-accent-foreground dark:hover:bg-accent/30"
                }`}
                onClick={() => handleLanguageChange(code)}
                role="menuitem"
              >
                <span className="flex-1">{name}</span>
                {code === currentLocale && (
                  <Check className="w-4 h-4 ml-2 text-accent-foreground flex-shrink-0" />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
