import { ProjectsSectionType } from "@/types/dictionary-types";


interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
}


const ProjectsSection = ({t}:{t:ProjectsSectionType}) => {

const projects = t?.Projects || [
    {
      id: 1,
      title: "Identify Opportunities",
      description: "Find untapped areas to explore effortlessly",
      category: "Web Development", 
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Build Authority",
      description: "Craft content that resonates and inspires trust",
      category: "Content Strategy",
      technologies: ["Next.js", "CMS", "SEO"]
    },
    {
      id: 3,
      title: "Instant Insights", 
      description: "Get actionable insights instantly at a glance",
      category: "Data Analytics",
      technologies: ["Data Visualization", "API", "Dashboard"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {t?.title ?? "Few my latest works"}
        </h2>
        <h3 className="text-2xl" >{t?.subtitle ?? "Discover a selection of my recent projects"}</h3>
        <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {projects.map((project: Project) => (
            <div
              key={project.title}
              className="flex flex-col text-start w-full"
            >
              <div className="mb-5 sm:mb-6 w-full aspect-4/5 bg-muted rounded-xl" />
              <span className="text-2xl font-semibold tracking-tight">
                {project.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
