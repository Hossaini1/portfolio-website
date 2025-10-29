import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../../shared/togglemode/toggleMode";
import SelectLang from "../../shared/selectlang/selectLang";
import AvatarComponent from "../../shared/avatar/avatar-component";
import { NavAndLanguagesType } from "@/types/dictionary-types";

const NavbarComponent = ({ t }: { t: NavAndLanguagesType }) => {
  return (
    <nav className="h-20 md:h-22 lg:h-24 bg-background border-b ">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        <AvatarComponent />

        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <NavMenu t={t.Nav} className="hidden md:block" />
        </div>

        <div className="flex items-center gap-2">
          <SelectLang t={t.Languages} />
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet t={t} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
