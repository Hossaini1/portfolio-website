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
import React, { ComponentProps, useMemo } from "react";
import { NavAndLanguagesType } from "@/types/dictionary-types";
import { createNavbarConfig, iconMap } from "./config";

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  t: NavAndLanguagesType["Nav"];
}

export const NavMenu = ({ t, ...props }: NavMenuProps) => {
  // Memoize navbar config to prevent unnecessary recalculations
  const { navbarItems, megaMenuItems } = useMemo(() => 
    createNavbarConfig(t), 
    [t]
  );

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 text-sm">
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Button 
              variant="ghost" 
              asChild 
              className="md:text-lg lg:text-xl"
            >
              <Link 
                className="py-5.5" 
                href={item.href} 
                prefetch={item.href === "/" ? true : false} 
              >
                {item.label}
              </Link>
            </Button>
          </NavigationMenuItem>
        ))}
         
        {/* Mega menu with lazy loading */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-5.5 md:text-lg lg:text-xl">
            {t?.blogs ?? "Blogs"}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-1 md:w-[650px] md:grid-cols-3 lg:w-[750px]">
              {megaMenuItems.map((menuItem) => {
                const IconComponent = iconMap[menuItem.icon];
                return (
                  <MemoizedListItem
                    key={menuItem.key}
                    title={menuItem.title}
                    icon={IconComponent}
                    linkUrl={"#"} 
                  >
                    {menuItem.description}
                  </MemoizedListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ListItemProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  linkUrl: string;
}

// ListItem with React.memo to prevent unnecessary re-renders
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  ListItemProps
>(({ className, title, children, icon: Icon, linkUrl, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={linkUrl}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // Better focus management
            className
          )}
          prefetch={false}
          {...props}
        >
          <Icon className="mb-4 size-6" aria-hidden="true" />
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

// Memoized version to prevent re-renders when parent component updates
const MemoizedListItem = React.memo(ListItem);