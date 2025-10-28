// components/navbar/navigation-sheet.tsx
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
import { NavAndLanguagesType } from "@/types/dictionary-types";
import { createNavbarConfig, iconMap } from "./config";

export const NavigationSheet = ({t}:{t: NavAndLanguagesType}) => {
  const { navbarItems, megaMenuItems } = createNavbarConfig(t.Nav);

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 min-w-screen">
        <SheetHeader>
          <SheetTitle className="sr-only">Main Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation links for mobile users.
          </SheetDescription>
        </SheetHeader>

        <div className="pt-4 text-base space-y-4">
          {navbarItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="block font-semibold text-md"
              title={item.label}
            >
              {item.label}
            </Link>
          ))}
<hr />
          <div>
            <div className="font-bold text-md">{t?.Nav?.blogs ?? "Blogs"}</div>
            <ul className="pt-2 space-y-3 ml-1 pl-4 border-l text-sm">
              {megaMenuItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={item.key}>
                    <Link href="#" className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 mr-2 text-muted-foreground" />
                      {item.title}
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