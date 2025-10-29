import { NavAndLanguagesType } from "@/types/dictionary-types"

import {
  ChevronsLeftRightEllipsis,
  Palette,
  FileJson2,
  GitBranch,
  Atom,
  Braces,
  Wind,
  Boxes,
  Layers,
  Server,
  Database,
  Code,
  TerminalSquare,
  Table,
} from "lucide-react"

export const createNavbarConfig = (t: NavAndLanguagesType["Nav"]) => {
  const navbarItems = [
    { label: t?.home ?? "Home", href: "/" },
    { label: t?.about ?? "About", href: "#about" },
    { label: t?.projects ?? "Projects", href: "#projects" },
    { label: t?.contact ?? "Contact", href: "#contact" },
  ];

  const megaMenuItems = [
    {
      key: "html",
      title: t?.MegaMenu?.html ?? "HTML | Coming soon...",
      icon: "ChevronsLeftRightEllipsis",
      description: t?.MegaMenu?.Descriptions?.html ?? "Website structure",
    },
    {
      key: "css",
      title: t?.MegaMenu?.css ?? "CSS | Coming soon...",
      icon: "Palette",
      description: t?.MegaMenu?.Descriptions?.css ?? "Website styling",
    },
    {
      key: "javascript",
      title: t?.MegaMenu?.javascript ?? "Javascript | Coming soon...",
      icon: "FileJson2",
      description: t?.MegaMenu?.Descriptions?.javascript ?? "Dynamic content",
    },
    {
      key: "git",
      title: t?.MegaMenu?.git ?? "Git & Github | Coming soon...",
      icon: "GitBranch",
      description: t?.MegaMenu?.Descriptions?.git ?? "Version control",
    },
    {
      key: "react",
      title: t?.MegaMenu?.react ?? "React | Coming soon...",
      icon: "Atom",
      description: t?.MegaMenu?.Descriptions?.react ?? "UI components",
    },
    {
      key: "nextjs",
      title: t?.MegaMenu?.nextjs ?? "Nextjs | Coming soon...",
      icon: "Braces",
      description: t?.MegaMenu?.Descriptions?.nextjs ?? "Fullstack framework",
    },
    {
      key: "tailwind",
      title: t?.MegaMenu?.tailwind ?? "TailwindCSS | Coming soon...",
      icon: "Wind",
      description: t?.MegaMenu?.Descriptions?.tailwind ?? "Utility styles",
    },
    {
      key: "bootstrap",
      title: t?.MegaMenu?.bootstrap ?? "Bootstrap | Coming soon...",
      icon: "Boxes",
      description: t?.MegaMenu?.Descriptions?.bootstrap ?? "UI framework",
    },
    {
      key: "sass",
      title: t?.MegaMenu?.sass ?? "Sass | Coming soon...",
      icon: "Layers",
      description: t?.MegaMenu?.Descriptions?.sass ?? "CSS preprocessor",
    },
    {
      key: "nodejs",
      title: t?.MegaMenu?.nodejs ?? "NodeJs | Coming soon...",
      icon: "Server",
      description: t?.MegaMenu?.Descriptions?.nodejs ?? "Backend runtime",
    },
    {
      key: "mongodb",
      title: t?.MegaMenu?.mongodb ?? "MongoDB | Coming soon...",
      icon: "Database",
      description: t?.MegaMenu?.Descriptions?.mongodb ?? "NoSQL database",
    },
    {
      key: "php",
      title: t?.MegaMenu?.php ?? "PHP | Coming soon...",
      icon: "Code",
      description: t?.MegaMenu?.Descriptions?.php ?? "Server scripting",
    },
    {
      key: "laravel",
      title: t?.MegaMenu?.laravel ?? "Laravel | Coming soon...",
      icon: "TerminalSquare",
      description: t?.MegaMenu?.Descriptions?.laravel ?? "PHP framework",
    },
    {
      key: "sql",
      title: t?.MegaMenu?.sql ?? "SQL & MySQL | Coming soon...",
      icon: "Table",
      description: t?.MegaMenu?.Descriptions?.sql ?? "Relational data",
    },
  ]

  return { navbarItems, megaMenuItems }
}

// ✅ Alle Icons direkt zugeordnet (keine dynamische Imports mehr)
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChevronsLeftRightEllipsis,
  Palette,
  FileJson2,
  GitBranch,
  Atom,
  Braces,
  Wind,
  Boxes,
  Layers,
  Server,
  Database,
  Code,
  TerminalSquare,
  Table,
}
