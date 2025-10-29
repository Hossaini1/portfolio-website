import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "../../lib/i18n/dictionaries";
import FAQ from "@/components/sections/faq/faq";

// Lazy load heavy components with optimized loading states
const NavbarComponent = dynamic(() => import("@/components/layouts/navbar/navbar-component"), {
  loading: () => <div className="h-16 bg-background animate-pulse" />,
});

const HeroSection = dynamic(() => import("@/components/sections/hero/hero-section"), {
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
      </div>
    </section>
  ),
});

const AboutSection = dynamic(() => import("@/components/sections/about/about-section"), {
  loading: () => (
    <section className="py-20">
      <div className="h-8 bg-gray-200 rounded w-48 mb-8 mx-auto animate-pulse"></div>
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </section>
  ),
});

const ProjectsSection = dynamic(() => import("@/components/sections/projectssection/projects-section"), {
  loading: () => (
    <section className="py-20">
      <div className="h-8 bg-gray-200 rounded w-48 mb-12 mx-auto animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="text-center">
            <div className="h-12 w-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-2 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  ),
});

const ContactSection = dynamic(() => import("@/components/sections/contact/contact-section"), {
  loading: () => (
    <section className="py-20">
      <div className="h-8 bg-gray-200 rounded w-48 mb-8 mx-auto animate-pulse"></div>
      <div className="max-w-md mx-auto">
        <div className="h-12 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </section>
  ),
});

const FooterSection = dynamic(() => import("@/components/layouts/footer/footer-section"), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse" />,
});

// Cache dictionary data for better performance
async function getPageData(lang: "en" | "de" | "fa") {
  try {
    const dictionary = await getDictionary(lang);
    return { dictionary, error: null };
  } catch (error) {
    console.error("Dictionary loading failed:", error);
    // Fallback to English for better UX
    const fallbackDict = await getDictionary("en");
    return { dictionary: fallbackDict, error: "Failed to load language" };
  }
}

// Optimized loading component for better UX
function LoadingFallback({ componentName }: { componentName: string }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="text-sm text-gray-500">Loading {componentName}...</div>
    </div>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { dictionary: t, error } = await getPageData(lang as "en" | "de" | "fa");

  return (
    <>
      <header>
        <Suspense fallback={<div className="h-16 bg-background animate-pulse" />}>
          <NavbarComponent t={t} />
        </Suspense>
      </header>
      
      <main>
        {/* Language loading error banner */}
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 text-center text-sm">
            Language loading issue: Showing English version
          </div>
        )}
        
        {/* Hero section - critical, keep above the fold */}
        <Suspense fallback={<LoadingFallback componentName="hero section" />}>
          <HeroSection t={t.Hero} />
        </Suspense>
        
        {/* About section */}
        <Suspense fallback={<LoadingFallback componentName="about section" />}>
          <AboutSection t={t.About} />
        </Suspense>
        
        {/* Projects section */}
        <Suspense fallback={<LoadingFallback componentName="projects" />}>
          <ProjectsSection t={t.ProjectsSection} />
        </Suspense>

        {/* FAQ - already optimized, no lazy loading needed if small */}
        <FAQ t={t.faq} />
        
        {/* Contact section */}
        <Suspense fallback={<LoadingFallback componentName="contact form" />}>
          <ContactSection t={t.Contact} />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
        <FooterSection t={t.Footer} />
      </Suspense>
    </>
  );
}

// Static generation for all languages
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" }, 
    { lang: "fa" }
  ];
}

// ISR: Regenerate page every hour for fresh content
export const revalidate = 3600;