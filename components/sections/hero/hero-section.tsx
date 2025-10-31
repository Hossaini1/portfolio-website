import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import Link from "next/link";
import StatsSection from "../states/stats";
import { HeroType } from "@/types/dictionary-types";

const HeroSection = ({ t }: { t: HeroType }) => {
  return (
    <section id="hero" aria-labelledby="hero-section">
      <div className="mt-17 md:mt-27 lg:mt-37 flex items-center justify-center h-full">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-3xl">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link 
              href="https://en.wikipedia.org/wiki/Web3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[.7rem] md:text-sm"
            >
              Web 3.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          
          <h1 className="p-1 mt-6 text-[2.55rem] md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            {t?.name ?? "Ali Naghi Hossaini"}
            <span className="block text-slate-500 mt-4 text-[2.4rem] md:text-5xl lg:text-6xl">
              {t?.title ?? "Full Stack Developer"}
            </span>
          </h1>
          
          <p className="max-w-xl md:max-w-full mt-7 text-slate-400 text-[.94rem] md:text-lg lg:text-xl px-1">
            {t?.description ?? "Passionate about creating modern web applications with cutting-edge technologies. Ready to bring your ideas to life with clean code and innovative solutions."}
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full  px-4 md:py-5.5 md:px-12">
              <Link 
                href="https://github.com/Hossaini1" 
                className="flex justify-center items-center gap-2 text-[0.68rem] md:text-base" 
                target="_blank"
                rel="noopener noreferrer"
              >
                {t?.btn ?? "View My Works"}
                <ArrowUpRight className="h-3.5! w-3.5! md:h-5! md:w-5!" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <StatsSection t={t} />
    </section>
  );
};

export default HeroSection;