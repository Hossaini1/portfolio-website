import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../togglemode/toggleMode";
import SelectLang from "../selectlang/selectLang";
import AvatarComponent from "../avatar/avatar-component";
import { NavAndLanguagesType } from "@/types/dictionary-types";

const NavbarComponent = ({ t }: { t: NavAndLanguagesType }) => {
  return (
    <nav className="border md:border-b rounded-full md:rounded-none md:mt-0 md:shadow-none h-16 md:h-25 bg-background md:border-b fixed right-8 left-8 top-1 z-40 md:right-0 md:left-0 md:top-0 ">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        <AvatarComponent />

        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <NavMenu t={t.Nav} className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <SelectLang t={t.Languages} />
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet t={t}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
