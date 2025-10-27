import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import Link from "next/link";
import StatsSection from "../states/stats";
import { HeroType } from "@/types/dictionary-types";

const HeroSection = ({t}:{t:HeroType}) => {
  return (
    <>
      <div className=" mt-24 flex items-center justify-center h-full">
        <BackgroundPattern  />
        <div className="relative z-10 text-center max-w-3xl">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="https://en.wikipedia.org/wiki/Web3" target="_blank" >
              Web 3.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter p-[1px] ">
            {t?.name ?? "Ali Naghi Hossaini"}
            
            <span className="block text-gray-400 mt-6">{t?.title ?? "Full Stack Developer"}</span>
          </h1>
          <p className="mt-7 md:text-lg text-gray-400">
            {t?.description ?? "Passionate about creating modern web applications with cutting-edge technologies. Ready to bring your ideas to life with clean code and innovative solutions."}
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 ">
            <Button size="lg" className="rounded-full text-base py-6 ">
              <Link href="https://github.com/Hossaini1" className="flex justify-center items-center gap-4 px-5" target="_blank">{t?.btn?? "View My Works"}<ArrowUpRight className="h-5! w-5!" /></Link>
            </Button>
          </div>
        </div>
      </div>

      <StatsSection t={t} />
    </>
  );
};

export default HeroSection;
