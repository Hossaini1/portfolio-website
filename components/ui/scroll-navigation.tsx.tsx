'use client';

import { Button } from '@/components/ui/button';
import { DotIcon } from '../icons/Icons';
import { useScrollNavigation } from '@/hooks/use-scroll-navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ScrollNavigation() {
  const [mounted, setMounted] = useState(false);
  const { isVisible, scrollToTop, scrollToSection, scrollToBottom } = useScrollNavigation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'fixed right-1 md:right-4 lg:right-5 xl:right-6 z-50 transition-all duration-500 ease-in-out flex flex-col gap-10 md:gap-16 ',
        'top-1/2 transform -translate-y-1/2 ',
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-10 scale-50 pointer-events-none'
      )}
    >
      <Button
        onClick={scrollToTop}
        className={cn(
          'h-auto w-auto rounded-full p-0 shadow-none bg-transparent',
          'text-slate-900 dark:text-neutral-300 dark:hover:text-white',
          'group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-112.5 '
        )}
        aria-label="Scroll to top"
        size="icon"
        variant="ghost"
      >
        <DotIcon />
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden md:group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Top
          </div>
        </div>
      </Button>

      <Button
        onClick={() => scrollToSection('about')}
        className={cn(
          'h-auto w-auto rounded-full p-0 shadow-none bg-transparent ',
          'text-slate-900 dark:text-neutral-300 dark:hover:text-white',
          'group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-112.5'
        )}
        aria-label="Scroll to middle"
        size="icon"
        variant="ghost"
      >
        <DotIcon />
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden md:group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Middle
          </div>
        </div>
      </Button>

      <Button
        onClick={scrollToBottom}
        className={cn(
          'h-auto w-auto rounded-full p-0 shadow-none bg-transparent',
          'text-slate-900 dark:text-neutral-300 dark:hover:text-white',
          'group relative transition-all duration-300 scale-90 md:scale-110 hover:scale-112.5'
        )}
        aria-label="Scroll to bottom"
        size="icon"
        variant="ghost"
      >
        <DotIcon />
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden md:group-hover:block">
          <div className="bg-black text-white text-xs md:text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            To Bottom
          </div>
        </div>
      </Button>
    </div>
  );
}
