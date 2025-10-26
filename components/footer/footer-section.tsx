
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
    <div className=" flex flex-col bg-muted">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col-reverse sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-xs w-full">
              <h6 className="font-medium">{t?.socialMedia?? "Social Medien"}</h6>
                <div className="flex items-center gap-5 text-muted-foreground mt-6">
              <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <YoutubeIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>

            </div>
          </div>
          <Separator />
          <div className="py-8 ">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              {t?.copyright?? " All rights reserved."}
            </span>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
