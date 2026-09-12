import Image from "next/image";
import Link from "next/link";
import { siGithub } from "simple-icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BrandIcon } from "@/components/shared/brand-icon";
import type { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
    priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
    return (
        <article className="card-hover-glow group flex h-full flex-col rounded-xl border border-border bg-card shadow-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-accent">
            <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted">

                <Image
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    fill
                    priority={priority}
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <div className="mt-4 space-y-3 text-sm">
                    <p>
                        <span className="font-medium text-foreground">Problem: </span>
                        <span className="text-muted-foreground">{project.problem}</span>
                    </p>
                    <p>
                        <span className="font-medium text-foreground">Solution: </span>
                        <span className="text-muted-foreground">{project.solution}</span>
                    </p>
                    <p>
                        <span className="font-medium text-foreground">Result: </span>
                        <span className="text-muted-foreground">{project.result}</span>
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="mt-auto flex gap-3 pt-6">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ size: "sm" })}
                    >
                        Live Demo
                    </Link>
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ variant: "outline", size: "sm" })}
                        >
                            <BrandIcon icon={siGithub} className="h-4 w-4" />
                            Code
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}