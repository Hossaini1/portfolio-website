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
    demoUrl: "https://your-portfolio.com",
  },
  {
    title: "Vuejs App Translate",
    description: "Translation website with real-time feature",
    category: "Web Development",
    technologies: ["Vue.js", "TypeScript", "Multilanguages Markdown"],
    image: PROJECT_IMAGES.translate,
    demoUrl: "https://translate-app.com",
  },
  {
    title: "VPN Site",
    description: "Modern landing page for VPN service",
    category: "Frontend",
    technologies: ["React.js", "Sass", "Vite"],
    image: PROJECT_IMAGES.vpn,
    demoUrl: "https://vpn-landing.com",
  },
] as const;

const TECH_MAP: Readonly<Record<string, string>> = {
  html: "html",
  css: "css",
  javascript: "javascript",
  "vue.js": "vue",
  typescript: "typescript",
  "react.js": "react",
  react: "react",
  sass: "css",
  vite: "default",
  "multilanguages markdown": "multilanguage",
} as const;

const ProjectCard = memo(({ project }: { project: Project }) => {
  const getTechVariant = (tech: string): string => {
    const normalizedTech = tech.toLowerCase();
    return TECH_MAP[normalizedTech] || "secondary";
  };

  return (
    <article className="group flex flex-col w-full border border-border rounded-xl overflow-hidden  transition-all duration-300 bg-background hover:translate-y-[-4px]">
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 border-b"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight mb-4 text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge
              key={`${project.title}-${tech}`}
              variant={getTechVariant(tech) as any}
              className="text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Live Demo Link */}
        {project.demoUrl && (
          <div className="pt-4 border-t border-border">
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/20 rounded-lg hover:bg-primary/5 hover:border-primary/30"
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
    <section className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <header className="text-center md:text-start mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold ">
            {t?.title ?? "My Latest Projects"}
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl  md:mx-0">
            {t?.subtitle ?? "Discover a selection of my recent projects"}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSection);
