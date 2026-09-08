import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "biostack",
    slug: "biostack",
    title: "BioStack",
    problem:
      "Planning a personal supplement stack usually means guesswork — overlapping ingredients, unclear compatibility, and no easy way to see total cost or course duration before buying.",
    solution:
      "A free, interactive supplement stack builder built with Next.js 16 and TypeScript. A custom SmartAlerts system flags ingredient incompatibilities and synergies based on a subType field, while an EfficiencyAudit module scores the stack's overall effectiveness. The interface adapts fully between a sticky sidebar on desktop and a three-tab bottom navigation on mobile, with a unified sharing system — native Web Share API on mobile, a custom popover on desktop.",
    result:
      "Live and fully functional with over 190 products across the catalog and 10 ready-made presets by category. SSR/SSG for SEO is intentionally deferred until traffic growth justifies it — a deliberate prioritization decision, not an oversight.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Lucide React", "Vercel"],
    liveUrl: "https://mybiostack.vercel.app",
    githubUrl: "https://github.com/SviatoslavZv/biostack-app",
    imageUrl: "/images/projects/biostack-cover.webp",
    featured: true,
  },
  {
    id: "couponcreek",
    slug: "couponcreek",
    title: "CouponCreek",
    problem:
      "Coupon sites in the fashion/apparel space are often cluttered with expired or unverified codes, hurting both user trust and affiliate network compliance.",
    solution:
      "A coupon aggregator built with Next.js App Router, React 19, and TypeScript, backed by Supabase with Server Actions for CRUD operations. A custom affiliate-link architecture supports a store-level fallback link plus an optional, more precise coupon-level link with redirect priority. Expired coupons are automatically separated and removed after 60 days via a pg_cron job — a fully automated content lifecycle. Full SEO infrastructure includes dynamic metadata, JSON-LD structured data, a sitemap with real lastModified timestamps, and per-page OG images.",
    result:
      "100% accessibility score on Lighthouse across all audited pages, with active affiliate partnerships through CJ Affiliate and Rakuten Advertising. The project is young with modest traffic so far — the focus here is on engineering quality and architecture, not scale.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4", "Supabase", "Vercel"],
    liveUrl: "https://www.couponcreek.com",
    imageUrl: "/images/projects/couponcreek-cover.webp",
    featured: true,
  },
];