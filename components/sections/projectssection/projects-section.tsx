import { ProjectsSectionType } from "@/types/dictionary-types";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMemo, memo } from "react";

import pizzaShopImage from "@/public/images/pizza-shop.png";
import vpnImage from "@/public/images/vpn-site.png";
import translateImage from "@/public/images/vue-translate.png";

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
  pizzaShop: pizzaShopImage,
  vpn: vpnImage,
  translate: translateImage,
} as const;

const STATIC_PROJECTS: Project[] = [
  {
    title: "Pizza Shop",
    description: "Modern and responsive Pizza Shop Website",
    category: "Frontend",
    technologies: ["PHP", "Laravel", "Alpine.js"],
    image: PROJECT_IMAGES.pizzaShop,
    demoUrl: "https://github.com/Hossaini1/fullstack-laravel-food-app",
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
];

const TECH_VARIANTS = {
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
  laravel: "laravel",
  php: "php",
  "alpine.js": "alpine",
  alpine: "alpine",
} as const;

const ProjectCard = memo(({ project }: { project: Project }) => {
  const getTechVariant = (tech: string) => {
    const normalizedTech = tech.toLowerCase();
    return TECH_VARIANTS[normalizedTech as keyof typeof TECH_VARIANTS] || "secondary";
  };

  return (
    <article 
      className="group flex flex-col w-full border border-border rounded-xl overflow-hidden transition-all duration-300 bg-background hover:translate-y-[-4px]"
      // ENTFERNT: itemscope - da kein vollständiges Schema verwendet wird
      aria-labelledby={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
      aria-describedby={`project-desc-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot des ${project.title} Projekts: ${project.description}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 border-b"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-5">
        <div className="flex-1">
          <h3 
            id={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-lg md:text-xl font-bold tracking-tight mb-2 text-foreground"
          >
            {project.title}
          </h3>
          <p 
            id={`project-desc-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label={`Verwendete Technologien für ${project.title}`}>
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
              className="text-sm md:text-base bg-muted dark:bg-background inline-flex items-center justify-center w-full py-2.5 px-4 font-medium text-primary transition-colors border border-primary/20 rounded-lg hover:bg-primary/5 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Live Demo oder Code ansehen für ${project.title} (öffnet in neuem Tab)`}
            >
              <span>Live Demo/Code</span>
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  const projects = useMemo((): Project[] => {
    return STATIC_PROJECTS.map((staticProject, index) => ({
      ...staticProject,
      description: t?.Projects?.[index]?.description || staticProject.description,
    }));
  }, [t?.Projects]);

  return (
    <section 
      className="flex items-center justify-center mt-17 md:mt-27 lg:mt-41 px-4" 
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="w-full max-w-7xl">
        <header className="text-center md:text-start mb-12 md:mb-14">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-semibold">
            {t?.title ?? "My Latest Projects"}
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mt-4 max-w-2xl md:mx-0">
            {t?.subtitle ?? "Discover a selection of my recent projects"}
          </p>
        </header>

        {/* ENTFERNT: role="list" und aria-label - nicht benötigt für div */}
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