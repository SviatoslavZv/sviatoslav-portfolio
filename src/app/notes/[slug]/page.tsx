import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notes } from "@/constants/notes";


const noteContent: Record<string, () => Promise<{ default: ComponentType }>> = {
    "base-ui-vs-radix": () => import("@/content/notes/base-ui-vs-radix.mdx"),
};

export function generateStaticParams() {
    return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
    params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
    const { slug } = await params;
    const note = notes.find((n) => n.slug === slug);
    return note ? { title: `${note.title} — Sviatoslav`, description: note.summary } : {};
}

export default async function NotePage({ params }: PageProps<"/notes/[slug]">) {
    const { slug } = await params;
    const note = notes.find((n) => n.slug === slug);
    const loadContent = noteContent[slug];

    if (!note || !loadContent) {
        notFound();
    }

    const { default: Content } = await loadContent();

    return (
        <article className="flex-1 mx-auto max-w-2xl px-6 py-24">
            <p className="text-sm text-muted-foreground">{note.date}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{note.title}</h1>
            <div className="mt-8">
                <Content />
            </div>

            <div className="mt-12 border-t border-border pt-6">
                <Link
                    href="/notes"
                    className="text-sm text-muted-foreground hover:text-foreground"
                >
                    ← Back to Engineering Notes
                </Link>
            </div>

        </article>
    );
}