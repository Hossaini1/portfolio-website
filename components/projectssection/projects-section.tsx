import { ProjectsSectionType } from "@/types/dictionary-types";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMemo, memo } from "react";

import portfolioImage from "@/public/uploads/portfolio.png";
import vpnImage from "@/public//uploads/vpn-site.png";
import translateImage from "@/public//uploads/vue-translate.png";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: StaticImageData | string;
  demoUrl?: string;
}

interface ProjectsSectionProps {
  t: ProjectsSectionType;
}

const PROJECT_IMAGES = {
  portfolio: portfolioImage,
  vpn: vpnImage,
  translate: translateImage,
} as const;

const STATIC_PROJECTS: ReadonlyArray<Project> = [
  {
    title: "Portfolio",
    description: "Modern and responsive presentation website",
    category: "Frontend",
    technologies: ["HTML", "CSS", "Javascript"],
    image: PROJECT_IMAGES.portfolio,
    demoUrl: "https://hossaini1.github.io/portfolio/",
  },
  {
    title: "Vuejs App Translate",
    description: "Translation website with real-time feature",
    category: "Web Development",
    technologies: ["Vue.js", "TypeScript", "Multilanguages Markdown"],
    image: PROJECT_IMAGES.translate,
    demoUrl: "https://github.com/Hossaini1/docs-de",
  },
  {
    title: "VPN Site",
    description: "Modern landing page for VPN service",
    category: "Frontend",
    technologies: ["React.js", "Sass", "Vite"],
    image: PROJECT_IMAGES.vpn,
    demoUrl: "https://react-vpn-site.vercel.app/",
  },
] as const;

type TechnologyVariant = 
  | "html" 
  | "css" 
  | "javascript" 
  | "typescript" 
  | "react" 
  | "vue" 
  | "multilanguage" 
  | "sass"    
  | "vite"   
  | "secondary";

const TECH_VARIANTS: Readonly<Record<string, TechnologyVariant>> = {
  html: "html",
  css: "css",
  javascript: "javascript",
  "vue.js": "vue",
  vue: "vue",
  typescript: "typescript",
  "react.js": "react",
  react: "react",
  sass: "sass",
  vite: "vite",
  "multilanguages markdown": "multilanguage",
} as const;

const ProjectCard = memo(({ project }: { project: Project }) => {
  const getTechVariant = (tech: string): TechnologyVariant => {
    const normalizedTech = tech.toLowerCase();
    return TECH_VARIANTS[normalizedTech] || "secondary";
  };

  return (
    <article className="group flex flex-col w-full border border-border rounded-xl overflow-hidden transition-all duration-300 bg-background hover:translate-y-[-4px]">
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-6">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge
              key={`${project.title}-${tech}`}
              variant={getTechVariant(tech)}
              className="text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {project.demoUrl && (
          <div className="pt-4 border-t border-border">
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted dark:bg-background inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/20 rounded-lg hover:bg-primary/5 hover:border-primary/30 mt-5"
            >
              <span>Live Demo/Code</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  const projects = useMemo((): ReadonlyArray<Project> => {
    return STATIC_PROJECTS.map((staticProject, index) => {
      const dynamicDescription = t?.Projects?.[index]?.description;

      return {
        ...staticProject,
        description: dynamicDescription || staticProject.description,
      };
    });
  }, [t?.Projects]);

  return (
    <section className="flex items-center justify-center mt-17 md:mt-27 lg:mt-41 px-4">
      <div className="w-full max-w-7xl">
        <header className="text-center md:text-start mb-12 md:mb-14">
          <h3 className="text-4xl md:text-5xl font-semibold">
            {t?.title ?? "My Latest Projects"}
          </h3>
          <p className="text-base md:text-xl text-muted-foreground mt-4 max-w-2xl md:mx-0">
            {t?.subtitle ?? "Discover a selection of my recent projects"}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSection);