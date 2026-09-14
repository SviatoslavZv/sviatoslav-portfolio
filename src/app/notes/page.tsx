import Link from "next/link";
import type { Metadata } from "next";
import { notes } from "@/constants/notes";

export const metadata: Metadata = {
    title: "Engineering Notes — Sviatoslav",
    description:
        "Short write-ups on specific technical decisions and debugging sessions from building this site.",
};

export default function NotesPage() {
    return (
        <div className="flex-1 mx-auto max-w-2xl px-6 py-24">
            <h1 className="text-4xl font-semibold tracking-tight">Engineering Notes</h1>
            <p className="mt-4 text-muted-foreground">
                Short write-ups on specific technical decisions and debugging sessions
                from building this site.
            </p>
            <div className="mt-10 space-y-8">
                {notes.map((note) => (
                    <Link key={note.slug} href={`/notes/${note.slug}`} className="group block">
                        <p className="text-sm text-muted-foreground">{note.date}</p>
                        <h2 className="mt-1 text-xl font-semibold group-hover:text-primary">
                            {note.title}
                        </h2>
                        <p className="mt-2 text-muted-foreground">{note.summary}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}