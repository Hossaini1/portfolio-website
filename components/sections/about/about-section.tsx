import { lazy, Suspense } from "react";
import { cn } from "@/lib/utils";
import { logoLibrary } from "../cloudlogo/cloud-logo";
import { AboutType } from "@/types/dictionary-types";

// Lazy load logo components for better performance
const Gemini = lazy(() => import("./logos/Gemini"));
const MediaWiki = lazy(() => import("./logos/MediaWiki"));
const GooglePaLM = lazy(() => import("./logos/GooglePaLM"));
const ChatGPT = lazy(() => import("./logos/ChatGPT"));
const DeepSeek = lazy(() => import("./logos/Deepseek"));
const Perplexity = lazy(() => import("./logos/Perplexity"));
const LogoIcon = lazy(() => import("./logos/logo").then(mod => ({ default: mod.LogoIcon })));
const CloudLogo = lazy(() => import("../cloudlogo/cloud-logo"));

// Loading fallback for lazy components
const LogoFallback = () => (
  <div className="size-8 bg-muted rounded animate-pulse" aria-hidden="true" />
);

export default function AboutSection({ t }: { t: AboutType }) {
  return (
    <section 
      id="about" 
      className="dark:bg-background mt-17 md:mt-27 lg:mt-41"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start sm:grid-cols-2 gap-16 sm:gap-10 md:gap-30 lg:gap-34 items-center">
          
          {/* Text content - semantic structure for better SEO */}
          <div className="dark:bg-background relative mx-auto w-fit order-2 sm:order-1">
            <h1 
              id="about-heading"
              className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold pb-5 text-center sm:text-start"
            >
              {t?.title ?? "About Me"}
            </h1>
            <p className="text-accent-foreground text-center text-base md:text-lg lg:text-xl leading-7 md:leading-9 text-justify whitespace-pre-line">
              {t?.description ?? "Hi, I'm a Full Stack Web Developer\nPassionate about modern web technologies in developing user-friendly frontend applications and backend solutions. Always striving to write clean and efficient code and learn new technologies.\n With an eye for detail and the ability to combine both technical and design aspects, I create digital experiences that not only function but also inspire. Every project is an opportunity for me to grow and innovate."}
            </p>
          </div>

          {/* Logo grid - decorative section marked appropriately */}
          <div 
            className="col-span-1 dark:bg-muted/50 relative mx-auto w-fit order-1 sm:order-2 self-center justify-self-center"
            aria-label="Technology tools and platforms I work with"
          >
            <div
              aria-hidden="true"
              className="bg-radial to-background dark:to-background absolute inset-0 z-10 from-transparent to-75%"
            />
            
            {/* First row of logos */}
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <IntegrationCard name="Perplexity">
                <Suspense fallback={<LogoFallback />}>
                  <Perplexity />
                </Suspense>
              </IntegrationCard>
              <IntegrationCard name="DeepSeek">
                <Suspense fallback={<LogoFallback />}>
                  <DeepSeek />
                </Suspense>
              </IntegrationCard>
            </div>
            
            {/* Second row of logos - center logo has emphasis */}
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <IntegrationCard name="Gemini">
                <Suspense fallback={<LogoFallback />}>
                  <Gemini />
                </Suspense>
              </IntegrationCard>
              <IntegrationCard
                name="Logo"
                borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                className="dark:bg-white/10"
                isMain
              >
                <Suspense fallback={<LogoFallback />}>
                  <LogoIcon />
                </Suspense>
              </IntegrationCard>
              <IntegrationCard name="ChatGPT">
                <Suspense fallback={<LogoFallback />}>
                  <ChatGPT />
                </Suspense>
              </IntegrationCard>
            </div>

            {/* Third row of logos */}
            <div className="mx-auto flex w-fit justify-center gap-2">
              <IntegrationCard name="MediaWiki">
                <Suspense fallback={<LogoFallback />}>
                  <MediaWiki />
                </Suspense>
              </IntegrationCard>
              <IntegrationCard name="Google PaLM">
                <Suspense fallback={<LogoFallback />}>
                  <GooglePaLM />
                </Suspense>
              </IntegrationCard>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy load CloudLogo components with proper loading states */}
      <Suspense fallback={
        <div 
          className="h-40 bg-muted/20 animate-pulse my-8" 
          aria-label="Loading frontend technologies"
          role="progressbar"
        />
      }>
        <CloudLogo 
          direction="right" 
          title={t?.frontend?.title ?? "Frontend"}
          subtitle={t?.frontend?.subtitle ?? "Technologies I use:"} 
          logos={logoLibrary.frontend}
        />
      </Suspense>
      
      <Suspense fallback={
        <div 
          className="h-40 bg-muted/20 animate-pulse my-8" 
          aria-label="Loading backend technologies"
          role="progressbar"
        />
      }>
        <CloudLogo 
          direction="left" 
          title={t?.backend?.title ?? "Backend"} 
          subtitle={t?.backend?.subtitle ?? "Technologies I use:"}
          logos={logoLibrary.backend}
        />
      </Suspense>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
  name,
  isMain = false
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  name?: string;
  isMain?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent",
        isMain && "ring-1 ring-primary ring-offset-1", 
        className
      )}
      role="img"
      aria-label={name ? `${name} logo` : "Technology logo"}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};