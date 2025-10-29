// import { InfiniteSlider } from "./infinite-slider";
// import { ProgressiveBlur } from "./progressive-blur";
// import { CloudLogoType, logoLibrary } from "./logo-library";

// interface CloudLogoProps {
//   direction?: "left" | "right";
//   title?: string;
//   subtitle?: string;
//   logos: readonly CloudLogoType[]; 
// }

// export default function CloudLogo({ 
//   direction = "right", 
//   title = "Technologies",
//   subtitle = "I use:",
//   logos
// }: CloudLogoProps) {
  
//   return (
//     <section className="bg-background overflow-hidden ">
//       <div className="group relative m-auto max-w-6xl px-6 mt-17 md:mt-26 lg:mt-30">
//         <div className="flex flex-col items-center md:flex-row ">
//           <div className="md:max-w-44 md:border-r md:pr-6">
//             <p className="text-center text-md mb-4">
//               <strong>{title}</strong> <span className="block">{subtitle}</span>
//             </p>
//           </div>
//           <div className="relative pt-0 md:w-[calc(100%-11rem)]">
//             <InfiniteSlider 
//               speedOnHover={20} 
//               speed={40} 
//               gap={112} 
//               reverse={direction === "left"}
//             >
//               {logos.map((logo) => {
//                 const IconComponent = logo.link;
//                 return (
//                   <div
//                     key={logo.name}
//                     className="flex items-center justify-center h-full"
//                     title={logo.name}
//                   >
//                     <IconComponent className="mx-auto h-5 w-fit dark:invert" />
//                   </div>
//                 );
//               })}
//             </InfiniteSlider>

//             <ProgressiveBlur
//               className="pointer-events-none absolute left-0 top-0 h-full w-20"
//               direction="left"
//               blurIntensity={1}
//             />
//             <ProgressiveBlur
//               className="pointer-events-none absolute right-0 top-0 h-full w-20"
//               direction="right"
//               blurIntensity={1}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export { logoLibrary };

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

// Memoized component to prevent unnecessary re-renders
const CloudLogo = memo(function CloudLogo({ 
  direction = "right", 
  title = "Technologies",
  subtitle = "I use:",
  logos
}: CloudLogoProps) {
  
  // Memoize the logo mapping to prevent recalculation on every render
  const logoElements = useMemo(() => 
    logos.map((logo) => {
      const IconComponent = logo.link;
      return (
        <div
          key={logo.name}
          className="flex items-center justify-center h-full"
          title={logo.name}
          aria-label={logo.name} // Better accessibility for screen readers
        >
          <IconComponent 
            className="mx-auto h-5 w-fit dark:invert" 
            aria-hidden="true" // Icons are decorative
          />
        </div>
      );
    }), 
    [logos] // Only recalculate when logos array changes
  );

  return (
    <section 
      className="bg-background overflow-hidden"
      aria-labelledby="cloud-logo-title"
    >
      <div className="group relative m-auto max-w-6xl px-6 mt-17 md:mt-26 lg:mt-30">
        <div className="flex flex-col items-center md:flex-row">
          {/* Title section - semantic HTML for better SEO */}
          <div className="md:max-w-44 md:border-r md:pr-6">
            <h3 id="cloud-logo-title" className="text-center text-md mb-4 sr-only">
              {title} - {subtitle}
            </h3>
            <p className="text-center text-md mb-4" aria-hidden="true">
              <strong>{title}</strong> <span className="block">{subtitle}</span>
            </p>
          </div>
          
          {/* Logo slider section - performance optimized */}
          <div className="relative pt-0 md:w-[calc(100%-11rem)]">
            <InfiniteSlider 
              speedOnHover={20} 
              speed={40} 
              gap={112} 
              reverse={direction === "left"}
              // Consider reducing speed on mobile for better performance
              className="max-md:speed-60" // Hypothetical - adjust based on your InfiniteSlider implementation
            >
              {logoElements}
            </InfiniteSlider>

            {/* Progressive blur effects - consider conditional rendering for mobile */}
            <div className="max-md:hidden"> {/* Hide on mobile to save resources */}
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
    </section>
  );
});

// Display name for better debugging
CloudLogo.displayName = "CloudLogo";

export default CloudLogo;
export { logoLibrary };