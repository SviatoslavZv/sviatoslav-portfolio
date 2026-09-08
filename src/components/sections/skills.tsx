import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/constants/skills";

export function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-center text-3xl font-semibold tracking-tight">
                Skills &amp; Architecture
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {skillCategories.map(({ category, items }) => (
                    <div key={category}>
                        <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                            {category}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Badge key={item} variant="secondary">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}