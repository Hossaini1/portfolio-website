import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { megaMenuItems } from "./config";



export const NavigationSheet = () => {
  return (
<Sheet>
        <SheetTrigger asChild  >
          <Button variant="outline" size="icon" className="" >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="px-6 py-3 min-w-screen">
          {/* title and description*/}
          <SheetHeader>
            <SheetTitle className="sr-only">Main Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation links for mobile users.
            </SheetDescription>
          </SheetHeader>
          
         {/* <div className="flex items-center gap-2">

          <SelectLang dict={{
          en: "",
          de: "",
          fa: ""
        }} />
        <ModeToggle />

        <AvatarComponent/>
         </div> */}

          <div className="mt-12 text-base space-y-4 ">
            <Link href="#" className=" block font-semibold" title="home">
              Home
            </Link>
            <Link href="#" className="block font-semibold" title="about">
              About
            </Link>
            <Link href="#" className="block font-semibold" title="projects">
              Projects
            </Link>

            <div>

              <div className="font-bold">Blogs</div>

            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">

              {megaMenuItems.map((item) => (

                <li key={item.title}>

                  <Link href="#" className="flex items-center gap-2">

                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />

                    {item.title}

                  </Link>

                </li>

              ))}

            </ul>

          </div>
          </div>
        </SheetContent>
      </Sheet>

  );
};
