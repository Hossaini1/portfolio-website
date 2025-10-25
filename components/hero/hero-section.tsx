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
      <div className="mt-[15vh] flex items-center justify-center h-full">
        <BackgroundPattern  />
        <div className="relative z-10 text-center max-w-3xl">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Web development 0.3 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            {t.name}
            
            <span className="block text-gray-400">{t.title}</span>
          </h1>
          <p className="mt-6 md:text-lg text-gray-400">
            {t.description}
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 ">
            <Button size="lg" className="rounded-full text-base py-6 ">
              <span className="flex justify-center items-center gap-4 px-5">{t.btn}<ArrowUpRight className="h-5! w-5!" /></span>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button> */}
          </div>
        </div>
      </div>

      <StatsSection t={t} />
    </>
  );
};

export default HeroSection;
