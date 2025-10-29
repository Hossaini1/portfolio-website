import {
  Gemini,
  MediaWiki,
  GooglePaLM,
} from "@/components/sections/about/logos";
import { LogoIcon } from "@/components/sections/about/logos/logo";
import { cn } from "@/lib/utils";
import { logoLibrary } from "../cloudlogo/cloud-logo";
import ChatGPT from "./logos/ChatGPT";
import DeepSeek from "./logos/Deepseek";
import Perplexity from "./logos/Perplexity";
import CloudLogo from "../cloudlogo/cloud-logo";
import { AboutType } from "@/types/dictionary-types";

export default function AboutSection({ t }: { t: AboutType }) {
  return (
    <section id="about">
      <div className="  dark:bg-background mt-17 md:mt-27 lg:mt-41 ">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start sm:grid-cols-2 gap-16 sm:gap-10 md:gap-30 lg:gap-34 items-center">
            
            <div className="dark:bg-background relative mx-auto w-fit order-2 sm:order-1">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold pb-5 text-center sm:text-start">
                {t?.title ?? "About Me"}
              </h2>
              <p className="text-accent-foreground text-center text-base md:text-lg lg:text-xl leading-7 md:leading-9 text-justify">
                {t?.description??
                  "Hi, I'm a Full Stack Web Developer\nPassionate about modern web technologies in developing user-friendly frontend applications and backend solutions. Always striving to write clean and efficient code and learn new technologies.\n\nWith an eye for detail and the ability to combine both technical and design aspects, I create digital experiences that not only function but also inspire. Every project is an opportunity for me to grow and innovate."}
              </p>
            </div>

            <div className="col-span-1 dark:bg-muted/50 relative mx-auto w-fit order-1 sm:order-2 self-center justify-self-center ">
              <div
                aria-hidden
                className="bg-radial to-background dark:to-background absolute inset-0 z-10 from-transparent to-75% "
              />
              <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <Perplexity />
                </IntegrationCard>
                <IntegrationCard>
                  <DeepSeek/>
                </IntegrationCard>
              </div>
              <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <Gemini />
                </IntegrationCard>
                <IntegrationCard
                  borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                  className="dark:bg-white/10"
                >
                  <LogoIcon />
                </IntegrationCard>
                <IntegrationCard>
                  <ChatGPT />
                </IntegrationCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-2">
                <IntegrationCard>
                  <MediaWiki />
                </IntegrationCard>

                <IntegrationCard>
                  <GooglePaLM />
                </IntegrationCard>
              </div>
            </div>
          </div>
        </div>
      </div>

<CloudLogo 
  direction="right" 
  title={t?.frontend?.title ?? "Frontend"}
  subtitle={t?.frontend?.subtitle ?? "Technologies I use:"} 
  logos={logoLibrary.frontend}
/>
<CloudLogo 
  direction="left" 
  title={t?.backend?.title ?? "Backend"} 
  subtitle={t?.backend?.subtitle ?? "Technologies I use:"}
  logos={logoLibrary.backend}
/>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};
