import {
  AngularIcon,
  BootstrapIcon,
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  PhpIcon,
  LaravelIcon,
  NodejsIcon,
  MongodbIcon,
  MysqlIcon,
} from "../icons/Icons";

export interface CloudLogoType {
  name: string;
  link: React.FC<{ className?: string }>;
}

// Vordefinierte Logo-Sets als const für beste Performance
export const logoLibrary = {
  frontend: [
    { name: "HTML icon", link: HTMLIcon },
    { name: "CSS icon", link: CSSIcon },
    { name: "Javascript icon", link: JavaScriptIcon },
    { name: "React icon", link: ReactIcon },
    { name: "Nextjs icon", link: NextJSIcon },
    { name: "Typescript icon", link: TypeScriptIcon },
    { name: "Angular icon", link: AngularIcon },
    { name: "Tailwindcss icon", link: TailwindcssIcon },
    { name: "Bootstrap icon", link: BootstrapIcon },
  ] as const,
  backend: [
    { name: "PHP icon", link: PhpIcon },
    { name: "Laravel icon", link: LaravelIcon },
    { name: "Nodejs icon", link: NodejsIcon },
    { name: "MongoDB icon", link: MongodbIcon },
    { name: "MySQL icon", link: MysqlIcon },
  ] as const
} as const;