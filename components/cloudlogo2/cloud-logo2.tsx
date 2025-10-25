import { InfiniteSlider } from "./infinite-slider2";
import { ProgressiveBlur } from "./progressive-blur2";
import {

  LaravelIcon,
  MongodbIcon,
  MysqlIcon,
  NodejsIcon,
  PhpIcon,

} from "../icons/Icons";

interface CloudLogoTypes {
  name: string;
  link: React.FC<{ className?: string }>;
}

export default function LogoCloud2() {
  const cloudLogos: CloudLogoTypes[] = [
    {
      name: "PHP icon",
      link: PhpIcon,
    },
    {
      name: "Laravel icon",
      link: LaravelIcon,
    },
    {
      name: "Nodejs icon",
      link: NodejsIcon,
    },
    {
      name: "MongoDB icon",
      link: MongodbIcon,
    },
    {
      name: "MySQL icon",
      link: MysqlIcon,
    },

  ];

 


  return (
    <section className="bg-background overflow-hidden">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm"><strong>Backend</strong> Technologies <span className="block align-center w-full">I use: </span></p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {cloudLogos.map((logo) => {
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

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
