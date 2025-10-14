import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="px-12 md:px-4 sm:px-2">
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.codeLink} project={project} />
        ))}
      </div>
    </div>
  );
}
