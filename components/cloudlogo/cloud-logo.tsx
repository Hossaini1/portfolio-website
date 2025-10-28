import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";
import { CloudLogoType, logoLibrary } from "./logo-library";

interface CloudLogoProps {
  direction?: "left" | "right";
  title?: string;
  subtitle?: string;
  logos: readonly CloudLogoType[]; 
}

export default function CloudLogo({ 
  direction = "right", 
  title = "Technologies",
  subtitle = "I use:",
  logos
}: CloudLogoProps) {
  
  return (
    <section className="bg-background overflow-hidden ">
      <div className="group relative m-auto max-w-6xl px-6 mt-17 md:mt-26 lg:mt-30">
        <div className="flex flex-col items-center md:flex-row ">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-center text-md mb-4">
              <strong>{title}</strong> <span className="block">{subtitle}</span>
            </p>
          </div>
          <div className="relative pt-0 md:w-[calc(100%-11rem)]">
            <InfiniteSlider 
              speedOnHover={20} 
              speed={40} 
              gap={112} 
              reverse={direction === "left"}
            >
              {logos.map((logo) => {
                const IconComponent = logo.link;
                return (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center h-full"
                    title={logo.name}
                  >
                    <IconComponent className="mx-auto h-5 w-fit dark:invert" />
                  </div>
                );
              })}
            </InfiniteSlider>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { logoLibrary };