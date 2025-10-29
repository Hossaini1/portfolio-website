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
    >
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Avatar*/}
        <Avatar/>

        {/* Desktop navigation */}
        <div className="flex items-center gap-8">
          <NavMenu 
            t={t.Nav} 
            className="hidden md:block" 
            aria-label="Desktop navigation menu"
          />
        </div>

        {/* Action controls*/}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <SelectLang 
            t={t.Languages} 
            aria-label="Language selection"
          />
          
          {/* Theme toggle */}
          <ModeToggle 
            aria-label="Toggle dark mode"
          />

          {/* Mobile menu*/}
          <div className="md:hidden" aria-label="Mobile navigation menu">
            <NavigationSheet t={t} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;