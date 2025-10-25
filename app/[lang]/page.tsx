import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "./dictionaries";

// ✅ LAZY LOADING für alle schweren Komponenten
const NavbarComponent = dynamic(() => import("@/components/navbar/navbar-component"), {
  loading: () => <div className="h-16 bg-background animate-pulse" />,
  ssr: true // ✅ TRUE für statische Sites
});

const HeroSection = dynamic(() => import("@/components/hero/hero-section"), {
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
      </div>
    </section>
  ),
  ssr: true
});

const IntegrationsSection = dynamic(() => import("@/components/integrations/integrations-section"), {
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
  ssr: true
});

const FeaturesSection = dynamic(() => import("@/components/features/features-section"), {
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
  ssr: true
});

const Contact02Page = dynamic(() => import("@/components/contact/contact-section"), {
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
  ssr: true
});

const FooterSection = dynamic(() => import("@/components/footer/footer-section"), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse" />,
  ssr: true
});

// ✅ OPTIMIERTES DICTIONARY LOADING mit Error Handling
async function getPageData(lang: "en" | "de" | "fa") {
  try {
    const dictionary = await getDictionary(lang);
    return { dictionary, error: null };
  } catch (error) {
    console.error("Dictionary loading failed:", error);
    // Fallback dictionary
    const fallbackDict = await getDictionary("en");
    return { dictionary: fallbackDict, error: "Failed to load language" };
  }
}

// ✅ HAUPTPAGE KOMPONENTE
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string}>;
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
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 text-center">
            Language loading issue: Showing English version
          </div>
        )}
        
        <Suspense fallback={<div>Loading hero...</div>}>
          <HeroSection t={t.Hero} />
        </Suspense>
        
        <Suspense fallback={<div>Loading integrations...</div>}>
          <IntegrationsSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading features...</div>}>
          <FeaturesSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading contact...</div>}>
          <Contact02Page />
        </Suspense>
      </main>
      
      <footer>
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <FooterSection />
        </Suspense>
      </footer>
    </>
  );
}

// ✅ STATISCHE GENERATION FÜR PERFORMANCE
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" }, 
    { lang: "fa" }
  ];
}

// ✅ ISR FÜR UPDATES
export const revalidate = 3600; // 1 Stunde