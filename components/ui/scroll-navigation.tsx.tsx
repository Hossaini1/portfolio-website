
'use client';

import { Button } from '@/components/ui/button';
import { DotIcon } from '../icons/Icons';
import { useScrollNavigation } from '@/hooks/use-scroll-navigation';
import { cn } from '@/lib/utils';

export function ScrollNavigation() {
  const { isVisible, scrollToTop, scrollToSection, scrollToBottom } = useScrollNavigation();

  return (
    <div className={cn(
      "fixed right-1 md:right-4 lg:right-5 xl:right-6 z-50 transition-all duration-500 ease-in-out flex flex-col gap-10 md:gap-16",
      "top-1/2 transform -translate-y-1/2",
      isVisible 
        ? "opacity-100 translate-x-0 scale-100" 
        : "opacity-0 translate-x-10 scale-50 pointer-events-none"
    )}>

      <Button
        onClick={scrollToTop}
        className={cn(
          "h-auto w-auto rounded-full p-0 shadow-none bg-transparent hover:bg-transparent",
          "text-gray-900 dark:text-gray-400 dark:hover:text-white",
          "group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-120 dark:text-slate-400 "
        )}
        aria-label="Scroll to top"
        size="icon"
        variant="ghost"
      >
        <DotIcon />
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Top
          </div>
        </div>
      </Button>


      <Button
        onClick={() => scrollToSection('about')}
        className={cn(
          "h-auto w-auto rounded-full p-0 shadow-none bg-transparent hover:bg-transparent",
          "text-gray-900  dark:text-gray-300 dark:hover:text-white", 
          "group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-120 dark:text-slate-400 "
        )}
        aria-label="Scroll to middle"
        size="icon"
        variant="ghost"
      >
        <DotIcon />
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Middle
          </div>
        </div>
      </Button>


      <Button
        onClick={scrollToBottom}
        className={cn(
          "h-auto w-auto rounded-full p-0 shadow-none bg-transparent hover:bg-transparent",
          "text-gray-900  dark:text-gray-400 dark:hover:text-white",
          "group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-120 dark:text-slate-400 "
        )}
        aria-label="Scroll to bottom"
        size="icon"
        variant="ghost"
      >
        <DotIcon />

        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Bottom
          </div>
        </div>
      </Button>
    </div>
  );
}