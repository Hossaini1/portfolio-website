"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentProps } from "react";
import { NavAndLanguagesType } from "@/types/dictionary-types";
import dynamic from "next/dynamic";

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  t: NavAndLanguagesType["Nav"] ;
}

const ChevronsLeftRightEllipsis = dynamic(() => 
  import("lucide-react").then((mod) => mod.ChevronsLeftRightEllipsis)
);
const Palette = dynamic(() => 
  import("lucide-react").then((mod) => mod.Palette)
);
const FileJson2 = dynamic(() => 
  import("lucide-react").then((mod) => mod.FileJson2)
);
const GitBranch = dynamic(() => 
  import("lucide-react").then((mod) => mod.GitBranch)
);
const Atom = dynamic(() => 
  import("lucide-react").then((mod) => mod.Atom)
);
const Braces = dynamic(() => 
  import("lucide-react").then((mod) => mod.Braces)
);
const Wind = dynamic(() => 
  import("lucide-react").then((mod) => mod.Wind)
);
const Boxes = dynamic(() => 
  import("lucide-react").then((mod) => mod.Boxes)
);
const Layers = dynamic(() => 
  import("lucide-react").then((mod) => mod.Layers)
);
const Server = dynamic(() => 
  import("lucide-react").then((mod) => mod.Server)
);
const Database = dynamic(() => 
  import("lucide-react").then((mod) => mod.Database)
);
const Code = dynamic(() => 
  import("lucide-react").then((mod) => mod.Code)
);
const TerminalSquare = dynamic(() => 
  import("lucide-react").then((mod) => mod.TerminalSquare)
);
const Table = dynamic(() => 
  import("lucide-react").then((mod) => mod.Table)
);

export const NavMenu = ({ t, ...props }: NavMenuProps) => {
  const navbarItems = [
    { label: t.home ?? "Home", href: "/" },
    { label: t.about ?? "About", href: "/about" },
    { label: t.projects ?? "Projects", href: "/projects" },
    { label: t.contact ?? "Contact", href: "/contact" },
  ];

   const megaMenuItems = [
    {
      key: "html",
      title: t.MegaMenu?.html ?? "HTML | Coming soon...",
      icon: ChevronsLeftRightEllipsis,
      description: t.MegaMenu?.Descriptions?.html ?? "Website structure",
    },
    {
      key: "css",
      title: t.MegaMenu?.css ?? "CSS | Coming soon...",
      icon: Palette,
      description: t.MegaMenu?.Descriptions?.css ?? "Website styling",
    },
    {
      key: "javascript",
      title: t.MegaMenu?.javascript ?? "Javascript | Coming soon...",
      icon: FileJson2,
      description: t.MegaMenu?.Descriptions?.javascript ?? "Dynamic content",
    },
    {
      key: "git",
      title: t.MegaMenu?.git ?? "Git & Github | Coming soon...",
      icon: GitBranch,
      description: t.MegaMenu?.Descriptions?.git ?? "Version control",
    },
    {
      key: "react",
      title: t.MegaMenu?.react ?? "React | Coming soon...",
      icon: Atom,
      description: t.MegaMenu?.Descriptions?.react ?? "UI components",
    },
    {
      key: "nextjs",
      title: t.MegaMenu?.nextjs ?? "Nextjs | Coming soon...",
      icon: Braces,
      description: t.MegaMenu?.Descriptions?.nextjs ?? "Fullstack framework",
    },
    {
      key: "tailwind",
      title: t.MegaMenu?.tailwind ?? "TailwindCSS | Coming soon...",
      icon: Wind,
      description: t.MegaMenu?.Descriptions?.tailwind ?? "Utility styles",
    },
    {
      key: "bootstrap",
      title: t.MegaMenu?.bootstrap ?? "Bootstrap | Coming soon...",
      icon: Boxes,
      description: t.MegaMenu?.Descriptions?.bootstrap ?? "UI framework",
    },
    {
      key: "sass",
      title: t.MegaMenu?.sass ?? "Sass | Coming soon...",
      icon: Layers,
      description: t.MegaMenu?.Descriptions?.sass ?? "CSS preprocessor",
    },
    {
      key: "nodejs",
      title: t.MegaMenu?.nodejs ?? "NodeJs | Coming soon...",
      icon: Server,
      description: t.MegaMenu?.Descriptions?.nodejs ?? "Backend runtime",
    },
    {
      key: "mongodb",
      title: t.MegaMenu?.mongodb ?? "MongoDB | Coming soon...",
      icon: Database,
      description: t.MegaMenu?.Descriptions?.mongodb ?? "NoSQL database",
    },
    {
      key: "php",
      title: t.MegaMenu?.php ?? "PHP | Coming soon...",
      icon: Code,
      description: t.MegaMenu?.Descriptions?.php ?? "Server scripting",
    },
    {
      key: "laravel",
      title: t.MegaMenu?.laravel ?? "Laravel | Coming soon...",
      icon: TerminalSquare,
      description: t.MegaMenu?.Descriptions?.laravel ?? "PHP framework",
    },
    {
      key: "sql",
      title: t.MegaMenu?.sql ?? "SQL & MySQL | Coming soon...",
      icon: Table,
      description: t.MegaMenu?.Descriptions?.sql ?? "Relational data",
    },
  ];

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 text-sm">
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Button variant="ghost" asChild className="text-xl">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">
            {t.blogs ?? "Blogs"}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {megaMenuItems.map((menuItem) => (
                <ListItem
                  key={menuItem.title}
                  title={menuItem.title}
                  icon={menuItem.icon}
                  href="#"
                >
                  {menuItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};


interface ListItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  ListItemProps
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <Icon className="mb-4 size-6" />
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
