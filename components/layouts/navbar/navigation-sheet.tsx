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
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavAndLanguagesType } from "@/types/dictionary-types";
import { createNavbarConfig, iconMap } from "./config";
import { useEffect, useState } from "react";

export const NavigationSheet = ({ t }: { t: NavAndLanguagesType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const pathname = usePathname();
  const { navbarItems, megaMenuItems } = createNavbarConfig(t.Nav);

  useEffect(() => {
    setIsOpen(false);
    setIsBlogsOpen(false);
  }, [pathname]);

  // Funktion für Anchor-Links (wird nur client-seitig ausgeführt)
  const handleAnchorClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Warten bis Sheet geschlossen ist, dann URL aktualisieren und scrollen
    setTimeout(() => {
      // URL manuell aktualisieren
      if (href.startsWith("#")) {
        window.history.pushState(null, '', href);
        
        // Zu Section scrollen
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 335);
  };

  const toggleBlogsDropdown = () => {
    setIsBlogsOpen(!isBlogsOpen);
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
      
      <SheetContent className="w-full max-w-none sm:max-w-none px-6 py-6 flex flex-col" side="right">
        <SheetHeader className="sr-only">
          <SheetTitle>Main Navigation</SheetTitle>
          <SheetDescription>
            Navigation links and blog categories for mobile users
          </SheetDescription>
        </SheetHeader>

        {/* Main-navigation mobile */}
        <nav className="space-y-2 flex-shrink-0" aria-label="Mobile navigation">
          {navbarItems.map((item) => (
            <div key={item.href}>
              {item.href === "/" ? (
                // Home Link
                <Link 
                  href={item.href}
                  className="block font-semibold text-lg py-2.5 hover:text-primary transition-colors mt-7"
                  title={item.label}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : item.href.startsWith("#") ? (
                // Anchor Links
                <Link 
                  href={item.href}
                  className="block font-semibold text-lg py-2.5 hover:text-primary transition-colors"
                  title={item.label}
                  prefetch={false}
                  onClick={(e) => handleAnchorClick(item.href, e)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link 
                  href={item.href}
                  className="block font-semibold text-lg py-2.5 hover:text-primary transition-colors border-b border-border/50"
                  title={item.label}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Blogs Dropdown Trigger */}
          <button
            onClick={toggleBlogsDropdown}
            className="flex items-center justify-between w-full font-semibold text-lg pt-2.5 pb-3 hover:text-primary transition-colors border-b border-border/50"
            aria-expanded={isBlogsOpen}
            aria-controls="blogs-dropdown-content"
          >
            <span>{t?.Nav?.blogs ?? "Blogs"}</span>
            {isBlogsOpen ? (
              <ChevronUp className="h-5 w-5 transition-transform" />
            ) : (
              <ChevronDown className="h-5 w-5 transition-transform" />
            )}
          </button>
        </nav>

        {/* Blogs Dropdown Content */}
        <div 
          id="blogs-dropdown-content"
          className={`flex-1 overflow-hidden transition-all duration-300 ease-in-out ${
            isBlogsOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
          }`}
        >
          <div className="overflow-y-auto h-full pr-2">
            <ul className="space-y-3 pb-4">
              {megaMenuItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={item.key}>
                    <Link
                      href={"#"} 
                      className="flex items-center py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg group border border-transparent hover:border-border/50"
                      onClick={() => {
                        setIsOpen(false);
                        setIsBlogsOpen(false);
                      }}
                    >
                      <IconComponent 
                        className="h-6 w-6 mr-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                        aria-hidden="true" 
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{item.title}</span>
                        {item.description && (
                          <span className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};