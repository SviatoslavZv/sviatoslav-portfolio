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
{
  slug: "hydration-mismatch-with-next-themes",
  title: "A Hydration Mismatch, in Three Parts",
  date: "2026-09-10",
  summary:
    "A theme toggle that looked correct broke on first paint — a classic SSR/CSR mismatch, a documented fix, and a brand-new ESLint rule that flagged the fix itself as wrong.",
},
{
  slug: "the-shadow-that-wasnt-there",
  title: "The Shadow That Wasn't There",
  date: "2026-09-12",
  summary:
    "A hover glow effect that refused to appear, tangled up with two separate problems at once — a real compilation bug, and an optical illusion that looked exactly like one.",
},
{
  slug: "same-page-links-in-app-router",
  title: "Same-Page Links, Three Layers Deep",
  date: "2026-09-13",
  summary:
    "A header that sometimes wouldn't scroll to the right section — and why the fix wasn't simply choosing between <a> and next/link, but knowing when to use each.",
},
];