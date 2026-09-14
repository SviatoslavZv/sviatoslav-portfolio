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
  {
  slug: "calibrating-accessible-accent-color",
  title: "Calibrating an Accessible Accent Color",
  date: "2026-09-08",
  summary:
    "Picking an indigo accent that looks right isn't enough — it also has to pass WCAG AA contrast in both themes. Here's how I checked it, and what broke when I didn't.",
},
];