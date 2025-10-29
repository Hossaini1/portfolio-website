import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../../shared/togglemode/toggleMode";
import SelectLang from "../../shared/selectlang/selectLang";
import Avatar from "../../shared/avatar/avatar-component";
import { NavAndLanguagesType } from "@/types/dictionary-types";

const NavbarComponent = ({ t }: { t: NavAndLanguagesType }) => {
  return (
    <nav 
      className="h-20 md:h-22 lg:h-24 bg-background border-b sticky top-0 z-50"
      role="navigation" 
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Avatar */}
        <div itemScope itemType="https://schema.org/Person">
          <Avatar />
        </div>

        {/* Desktop navigation*/}
        <div className="flex items-center gap-8" role="menubar" aria-label="Main menu">
          <NavMenu 
            t={t.Nav} 
            className="hidden md:block" 
            aria-label="Desktop navigation menu"
          />
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2" role="toolbar" aria-label="Site preferences">
          {/* Language selector */}
          <SelectLang 
            t={t.Languages} 
            aria-label="Select language"
          />
          
          {/* Theme toggle */}
          <ModeToggle 
            aria-label="Toggle between dark and light mode"
          />

          {/* Mobile menu */}
          <div className="md:hidden" aria-label="Mobile navigation controls">
            <NavigationSheet t={t} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;