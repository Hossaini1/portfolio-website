import dynamic from "next/dynamic";


export const megaMenuItems = [
  {
    title: "HTML | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.ChevronsLeftRightEllipsis)),
    description: "Website structure",
  },
  {
    title: "CSS | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Palette)),
    description: "Website styling",
  },
  {
    title: "Javascript | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.FileJson2)),
    description: "Dynamic content",

  },
  {
    title: "Git & Github | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.GitBranch)),
    description: "Version control",
  },
  {

    title: "React | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Atom)),
    description: "UI components",
  },
  {
    title: "Nextjs | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Braces)),
    description: "Fullstack framework",
  },
  {
    title: "TailwindCSS | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Wind)),
    description: "Utility styles",
  },
  {
    title: "Bootstrap | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Boxes)),
    description: "UI framework",
  },
  {
    title: "Sass | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Layers)),
    description: "CSS preprocessor",
  },
  {
    title: "NodeJs | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Server)),
    description: "Backend runtime",
  },
  {
    title: "MongoDB | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Database)),
    description: "NoSQL database",
  },
  {
    title: "PHP | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Code)),
    description: "Server scripting",
  },
  {
    title: "Laravel | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.TerminalSquare)),
    description: "PHP framework",
  },
  {
    title: "SQL & MySQL | Coming soon...",
    icon: dynamic(() => import("lucide-react").then((m) => m.Table)),
    description: "Relational data",
  },
];
