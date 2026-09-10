import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 text-center">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
            />

            <div className="flex flex-col items-center -mt-20 sm:-mt-24">
                <Badge variant="outline" className="mb-6 gap-2 py-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    {siteConfig.availabilityStatus}
                </Badge>

                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    {siteConfig.hero.headlinePrefix}
                    <span className="text-primary">{siteConfig.hero.headlineHighlight}</span>
                    {siteConfig.hero.headlineSuffix}
                </h1>

                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                    {siteConfig.description}
                </p>

                <div className="mt-8">
                    <Link
                        href="#projects"
                        className={buttonVariants({ size: "lg", className: "shadow-md shadow-primary/20 transition-shadow hover:shadow-md hover:shadow-primary/25" })}
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}