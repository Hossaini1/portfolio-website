
import { Separator } from "@/components/ui/separator";
import { FooterType } from "@/types/dictionary-types";
import {
  FacebookIcon,
  GithubIcon,
  Instagram,
  Linkedin,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";



const FooterSection = ({t}:{t:FooterType}) => {

  const footerLinks = [
 {
    title: t?.links?.imprint ?? "Imprint" ,
    href: "/imprint",
  },
{
      title: t?.links?.privacy?? "Privacy", 
      href: "/privacy",
    },
    {
      title: t?.links?.contact?? "Contact", 
      href: "/contact",
    },
];

  return (
    <div className="flex flex-col bg-muted mt-17 md:mt-27 lg:mt-34">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col-reverse sm:flex-row items-center md:items-start justify-between gap-x-8 gap-y-8 px-6 xl:px-0">
            {/* Links Section - zentriert auf Mobile, links ab md */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <ul className="mt-6 flex items-center gap-4 flex-wrap justify-center md:justify-start">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground text-base"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section - zentriert auf Mobile, rechts ab md */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h5 className="font-medium text-lg md:text-xl">{t?.socialMedia ?? "Social Medien"}</h5>
              <div className="flex items-center gap-5 text-muted-foreground mt-6 justify-center md:justify-start">
                <Link href="#" target="_blank">
                  <Linkedin className="h-5 w-5  hover:scale-[1.07] " />
                </Link>
                <Link href="#" target="_blank">
                  <FacebookIcon className="h-5 w-5  hover:scale-[1.07] " />
                </Link>
                <Link href="#" target="_blank">
                  <YoutubeIcon className="h-5 w-5  hover:scale-[1.07] " />
                </Link>
                <Link href="#" target="_blank">
                  <Instagram className="h-5 w-5  hover:scale-[1.07] " />
                </Link>
                <Link href="#" target="_blank">
                  <GithubIcon className="h-5 w-5  hover:scale-[1.07] " />
                </Link>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Copyright - zentriert auf Mobile, links ab md */}
          <div className="py-8 text-center md:text-start">
            <span className="text-muted-foreground text-base px-6">
              &copy; {new Date().getFullYear()}{" "}
              {t?.copyright ?? " All rights reserved."}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
