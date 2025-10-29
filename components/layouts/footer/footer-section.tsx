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

// Static social links data
const SOCIAL_LINKS = [
  { 
    Icon: Linkedin, 
    linkDestination: "#",
    linkLabel: "Visit our LinkedIn",
    uniqueId: "linkedin"
  },
  { 
    Icon: FacebookIcon, 
    linkDestination: "#",
    linkLabel: "Visit our Facebook",
    uniqueId: "facebook"
  },
  { 
    Icon: YoutubeIcon, 
    linkDestination: "#",
    linkLabel: "Visit our YouTube", 
    uniqueId: "youtube"
  },
  { 
    Icon: Instagram, 
    linkDestination: "#",
    linkLabel: "Visit our Instagram",
    uniqueId: "instagram"
  },
  { 
    Icon: GithubIcon, 
    linkDestination: "#",
    linkLabel: "Visit our GitHub",
    uniqueId: "github"
  },
] as const;

const FooterSection = ({ t }: { t: FooterType }) => {
  // Memoized footer links with proper fallbacks
  const footerLinks = [
    {
      linkTitle: t?.links?.imprint ?? "Imprint",
      linkPath: "/imprint",
    },
    {
      linkTitle: t?.links?.privacy ?? "Privacy", 
      linkPath: "/privacy",
    },
    {
      linkTitle: t?.links?.contact ?? "Contact", 
      linkPath: "/#contact",
    },
  ];

  // Current year computed once per render
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col bg-muted mt-17 md:mt-27 lg:mt-34">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col-reverse sm:flex-row items-center md:items-start justify-between gap-x-8 gap-y-8 px-6 xl:px-0">
            {/* Links Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <ul className="mt-6 flex items-center gap-4 flex-wrap justify-center md:justify-start">
                {footerLinks.map(({ linkTitle, linkPath }) => (
                  <li key={linkPath}>
                    <Link
                      href={linkPath}
                      className="text-muted-foreground hover:text-foreground text-base transition-colors duration-200 hover:scale-105"
                      prefetch={false}
                    >
                      {linkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h5 className="font-medium text-lg md:text-xl">
                {t?.socialMedia ?? "Social Media"}
              </h5>
              <div className="flex items-center gap-5 text-muted-foreground mt-6 justify-center md:justify-start">
                {SOCIAL_LINKS.map(({ Icon, linkDestination, linkLabel, uniqueId }) => (
                  <Link 
                    key={uniqueId}
                    href={linkDestination} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200 focus:scale-110 focus:outline-none rounded-sm"
                    aria-label={linkLabel}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Copyright Section */}
          <div className="py-8 text-center md:text-start">
            <span className="text-muted-foreground text-base px-0 md:px-6 lg:px-0">
              &copy; {currentYear}{" "}
              {t?.copyright ?? "All rights reserved."}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;