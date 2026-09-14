export interface Note {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export const notes: Note[] = [
  {
    slug: "base-ui-vs-radix",
    title: "Why shadcn/ui Switched to Base UI (and Why I Went With It)",
    date: "2026-09-06",
    summary:
      "A quick look at why shadcn/ui now defaults to Base UI over Radix Primitives, and why I stuck with the default instead of the more familiar option.",
  },
];