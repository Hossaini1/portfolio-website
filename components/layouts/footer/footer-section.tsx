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
    linkLabel: "LinkedIn Profil besuchen",
    uniqueId: "linkedin"
  },
  { 
    Icon: FacebookIcon, 
    linkDestination: "https://www.facebook.com/profile.php?id=61583266311562",
    linkLabel: "Facebook Profil besuchen",
    uniqueId: "facebook"
  },
  { 
    Icon: YoutubeIcon, 
    linkDestination: "https://www.youtube.com/@AliNaghiHossaini",
    linkLabel: "YouTube Kanal besuchen", 
    uniqueId: "youtube"
  },
  { 
    Icon: Instagram, 
    linkDestination: "https://www.instagram.com/alinaghihossaini/",
    linkLabel: "Instagram Profil besuchen",
    uniqueId: "instagram"
  },
  { 
    Icon: GithubIcon, 
    linkDestination: "https://github.com/Hossaini1",
    linkLabel: "GitHub Profil besuchen",
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
      linkTitle: t?.links?.contact ?? "Help", 
      linkPath: "/#ask-questions",
    },
  ];

  // Current year computed once per render
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="flex flex-col bg-muted dark:bg-gray-900 mt-17 md:mt-27 lg:mt-34"
      role="contentinfo"
      aria-label="Website Fußzeile"
    >
      <div className="grow bg-muted dark:bg-gray-900" />
      <div className="border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col-reverse sm:flex-row items-center md:items-start justify-between gap-x-8 gap-y-8 px-6 xl:px-0">
            {/* Links Section */}
            <nav 
              className="flex flex-col items-center md:items-start text-center md:text-left"
              aria-label="Rechtliche Links"
            >
              <ul 
                className="mt-6 flex items-center gap-4 flex-wrap justify-center md:justify-start"
              >
                {footerLinks.map(({ linkTitle, linkPath }) => (
                  <li key={linkPath}>
                    <Link
                      href={linkPath}
                      className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white text-base transition-colors duration-200 focus:text-black dark:focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm px-2 py-1 font-medium"
                      prefetch={false}
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
            >
              <h4 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white">
                {t?.socialMedia ?? "Social Media"}
              </h4>
              <div 
                className="flex items-center gap-5 mt-6 justify-center md:justify-start"
                aria-label="Social Media Links"
              >
                {SOCIAL_LINKS.map(({ Icon, linkDestination, linkLabel, uniqueId }) => (
                  <Link 
                    key={uniqueId}
                    href={linkDestination} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm p-1"
                    aria-label={linkLabel}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Separator aria-hidden="true" className="bg-gray-300 dark:bg-gray-700" />
          
          {/* Copyright Section */}
          <div className="py-8 text-center md:text-start">
            <span 
              className="text-gray-700 dark:text-gray-300 text-base px-0 md:px-6 lg:px-0 font-medium"
            >
              &copy; {currentYear}{" "}
              <span className="text-gray-900 dark:text-white">
                {t?.copyright ?? "Alle Rechte vorbehalten."}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;