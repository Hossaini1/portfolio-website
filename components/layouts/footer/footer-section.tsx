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
    linkDestination: "https://www.linkedin.com/in/hossaini/",
    linkLabel: "Visit our LinkedIn",
    uniqueId: "linkedin"
  },
  { 
    Icon: FacebookIcon, 
    linkDestination: "https://www.facebook.com/profile.php?id=61583266311562",
    linkLabel: "Visit our Facebook",
    uniqueId: "facebook"
  },
  { 
    Icon: YoutubeIcon, 
    linkDestination: "https://www.youtube.com/@AliNaghiHossaini",
    linkLabel: "Visit our YouTube", 
    uniqueId: "youtube"
  },
  { 
    Icon: Instagram, 
    linkDestination: "https://www.instagram.com/alinaghihossaini/",
    linkLabel: "Visit our Instagram",
    uniqueId: "instagram"
  },
  { 
    Icon: GithubIcon, 
    linkDestination: "https://github.com/Hossaini1",
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
      linkTitle: t?.links?.contact ?? "help", 
      linkPath: "/#ask-questions",
    },
  ];

  // Current year computed once per render
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="flex flex-col bg-muted mt-17 md:mt-27 lg:mt-34"
      role="contentinfo"
      aria-label="Site footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="grow bg-muted" />
      <div className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col-reverse sm:flex-row items-center md:items-start justify-between gap-x-8 gap-y-8 px-6 xl:px-0">
            {/* Links Section */}
            <nav 
              className="flex flex-col items-center md:items-start text-center md:text-left"
              aria-label="Footer navigation"
            >
              <ul 
                className="mt-6 flex items-center gap-4 flex-wrap justify-center md:justify-start"
                role="list"
              >
                {footerLinks.map(({ linkTitle, linkPath }) => (
                  <li key={linkPath} role="none">
                    <Link
                      href={linkPath}
                      className="text-muted-foreground hover:text-foreground text-base transition-colors duration-200 focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                      prefetch={false}
                      role="menuitem"
                    >
                      {linkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Media Section */}
            <div 
              className="flex flex-col items-center md:items-start text-center md:text-left"
              itemScope
             
            >
              <h4 className="font-medium text-lg md:text-xl sr-only">
                {t?.socialMedia ?? "Social Media"}
              </h4>
              <p 
                className="font-medium text-lg md:text-xl"
                aria-hidden="true"
              >
                {t?.socialMedia ?? "Social Media"}
              </p>
              <div 
                className="flex items-center gap-5 text-muted-foreground mt-6 justify-center md:justify-start"
                role="list"
                aria-label="Social media links"
              >
                {SOCIAL_LINKS.map(({ Icon, linkDestination, linkLabel, uniqueId }) => (
                  <Link 
                    key={uniqueId}
                    href={linkDestination} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm p-1"
                    aria-label={linkLabel}
                    role="listitem"
                    itemProp="sameAs"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Separator aria-hidden="true" />
          
          {/* Copyright Section */}
          <div className="py-8 text-center md:text-start">
            <span 
              className="text-muted-foreground text-base px-0 md:px-6 lg:px-0"
              itemProp="copyrightYear"
            >
              &copy; {currentYear}{" "}
              <span itemProp="copyrightHolder">
                {t?.copyright ?? "All rights reserved."}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;