import { memo, useMemo } from "react";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";
import { CloudLogoType, logoLibrary } from "./logo-library";

interface CloudLogoProps {
  direction?: "left" | "right";
  title?: string;
  subtitle?: string;
  logos: readonly CloudLogoType[]; 
}

const CloudLogo = memo(function CloudLogo({ 
  direction = "right", 
  title = "Technologies",
  subtitle = "I use:",
  logos
}: CloudLogoProps) {
  
  // Memoize logo elements to prevent unnecessary re-renders
  const logoElements = useMemo(() => 
    logos.map((logo) => {
      const IconComponent = logo.link;
      return (
        <div
          key={logo.name}
          className="flex items-center justify-center h-full"
          role="img" 
          aria-label={logo.name}
          title={logo.name} 
        >
          <IconComponent 
            className="mx-auto h-5 w-fit dark:invert" 
            aria-hidden="true" 
          />
        </div>
      );
    }), 
    [logos]
  );

  return (
    <div 
      className="bg-background overflow-hidden"
      aria-labelledby="cloud-logo-title"
      role="region" 
    >
      <div className="group relative m-auto max-w-6xl px-6 mt-17 md:mt-26 lg:mt-30">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <h3 id="cloud-logo-title" className="text-center text-md mb-4"> 
              <strong>{title}</strong> 
              <span className="block font-normal">{subtitle}</span>
            </h3>
          </div>
          
          {/* Logo slider section */}
          <div className="relative pt-0 md:w-[calc(100%-11rem)]">
            <InfiniteSlider 
              speedOnHover={20} 
              speed={40} 
              gap={112} 
              reverse={direction === "left"}
              className="max-md:speed-60"
              aria-live="polite" 
            >
              {logoElements}
            </InfiniteSlider>

            {/* Progressive blur effects */}
            <div className="max-md:hidden" aria-hidden="true">
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
      </div>
    </div>
  );
});

CloudLogo.displayName = "CloudLogo";

export default CloudLogo;
export { logoLibrary };