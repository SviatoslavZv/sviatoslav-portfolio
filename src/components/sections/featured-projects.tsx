import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/shared/project-card";

export function FeaturedProjects() {
    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-center text-3xl font-semibold tracking-tight">
                Featured Projects
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}