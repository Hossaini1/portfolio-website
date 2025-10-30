"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavAndLanguagesType } from "@/types/dictionary-types";
import { createNavbarConfig, iconMap } from "./config";
import { useEffect, useState } from "react";

export const NavigationSheet = ({ t }: { t: NavAndLanguagesType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { navbarItems, megaMenuItems } = createNavbarConfig(t.Nav);

  // Sheet schließen wenn Route sich ändert
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Funktion für Anchor-Link Navigation
  const handleAnchorClick = (href: string) => {
    if (href.startsWith("#")) {
      // Sheet sofort schließen
      setIsOpen(false);
      
      // Warten bis das Sheet komplett geschlossen ist, dann navigieren
      setTimeout(() => {
        if (href === "#") {
          // Zurück zum Anfang der Seite
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Zu Section scrollen
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            
            window.location.hash = href;
          }
        }
      }, 300); 
    }
  };

  // Funktion for Home Link
  const handleHomeClick = () => {
    setIsOpen(false);
    
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          aria-label="Open mobile navigation menu"
          className="touch-manipulation"
        >
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      
      <SheetContent className="px-6 py-3 w-full max-w-sm" side="right">
        <SheetHeader className="sr-only">
          <SheetTitle>Main Navigation</SheetTitle>
          <SheetDescription>
            Navigation links and blog categories for mobile users
          </SheetDescription>
        </SheetHeader>

        <nav className="pt-8 text-base space-y-1" aria-label="Mobile navigation">
          {navbarItems.map((item) => (
            <div key={item.href}>
              {item.href === "/" ? (
                // Home Link 
                <Link 
                  href={item.href}
                  className="block font-semibold text-md py-2 hover:text-primary transition-colors"
                  title={item.label}
                  prefetch={false}
                  onClick={handleHomeClick}
                >
                  {item.label}
                </Link>
              ) : (
                // Anchor Links
                <button
                  className="block font-semibold text-md py-2 hover:text-primary transition-colors w-full text-left"
                  title={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          
          <hr className="my-4" aria-hidden="true" />
          
          <section aria-labelledby="blog-categories-heading">
            <h2 id="blog-categories-heading" className="font-bold text-md mb-3">
              {t?.Nav?.blogs ?? "Blogs"}
            </h2>
            <ul className="space-y-3 ml-1 pl-4 border-l text-sm">
              {megaMenuItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={item.key}>
                    <button
                      className="flex items-center gap-2 py-1 hover:text-primary transition-colors group w-full text-left"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                      }}
                    >
                      <IconComponent 
                        className="h-5 w-5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" 
                        aria-hidden="true" 
                      />
                      <span>{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </nav>
      </SheetContent>
    </Sheet>
  );
};