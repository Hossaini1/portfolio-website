"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavAndLanguagesType } from "@/types/dictionary-types";
import { createNavbarConfig, iconMap } from "./config";

export const NavigationSheet = ({ t }: { t: NavAndLanguagesType }) => {
  const { navbarItems, megaMenuItems } = createNavbarConfig(t.Nav);

  return (
    <Sheet>
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
            <SheetClose asChild key={item.href}>
              <Link 
                href={item.href} 
                className="block font-semibold text-md py-2 hover:text-primary transition-colors"
                title={item.label}
                prefetch={false}
              >
                {item.label}
              </Link>
            </SheetClose>
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
                    <SheetClose asChild>
                      <Link 
                        href="#" 
                        className="flex items-center gap-2 py-1 hover:text-primary transition-colors group"
                        prefetch={false}
                      >
                        <IconComponent 
                          className="h-5 w-5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" 
                          aria-hidden="true" 
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SheetClose>
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