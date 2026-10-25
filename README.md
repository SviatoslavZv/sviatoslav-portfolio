# Sviatoslav Zvonyk — Portfolio

My developer portfolio: live projects presented as case studies, plus short engineering notes about real problems I solved along the way.

**Live:** [sviatoslav-portfolio.vercel.app](https://sviatoslav-portfolio.vercel.app)

## What's inside

- **Projects:** each project is a case study in a problem / solution / result format, with links to the live site and the source code
- **Engineering notes:** short write-ups about real bugs and decisions, such as calibrating an accessible accent color or a hydration mismatch with `next-themes`
- **Skills** grouped by area, with brand icons
- **Contact form** with client-side validation
- **Resume** as a downloadable PDF
- **Light and dark themes** with a theme toggle

## Engineering highlights

- **Single source of truth.** Projects, notes, skills and site settings are typed constants in `src/constants/`. Adding a project is one object in `projects.ts`; every card, link and metadata entry updates from it.
- **Notes in MDX.** Each note is an MDX file in the repository, rendered as a static page with its own metadata — no CMS needed for a small, curated set.
- **Validated forms.** The contact form uses React Hook Form with a Zod schema; the TypeScript type is inferred from the schema, so validation and types never drift apart.
- **Accessible by default.** The accent color is checked for WCAG AA contrast in both themes, and animations respect `prefers-reduced-motion`.
- **SEO built in.** Dynamic metadata, a generated Open Graph image and icon, a sitemap and `robots.txt`.

## Tech stack

Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui on Base UI, Motion, MDX, React Hook Form, Zod, next-themes, Web3Forms, Vercel with Analytics and Speed Insights.

## Project structure

```text
src/
├── app/            # home page, notes routes, metadata, sitemap, robots, OG image
├── components/
│   ├── sections/   # hero, featured projects, skills, contact
│   ├── shared/     # header, footer, project card, contact form, theme toggle
│   └── ui/         # shadcn/ui primitives
├── constants/      # site config, projects, notes, skills
├── content/notes/  # engineering notes in MDX
├── lib/            # Zod schemas and utilities
└── types/          # shared TypeScript types
```

## Getting started

```bash
git clone https://github.com/SviatoslavZv/sviatoslav-portfolio.git
cd sviatoslav-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To make the contact form send messages, create `.env.local` with a free [Web3Forms](https://web3forms.com) access key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

## Contact

[sviatoslav.frontend@gmail.com](mailto:sviatoslav.frontend@gmail.com) · [Telegram](https://t.me/sviatoslav_frontend) · [GitHub](https://github.com/SviatoslavZv)
