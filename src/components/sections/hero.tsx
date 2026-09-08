import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
            <Badge variant="outline" className="mb-6 gap-2 py-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {siteConfig.availabilityStatus}
            </Badge>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {siteConfig.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {siteConfig.description}
            </p>

            <div className="mt-8">
                <Link href="#projects" className={buttonVariants({ size: "lg" })}>
                    View Projects
                </Link>
            </div>
        </section>
    );
}