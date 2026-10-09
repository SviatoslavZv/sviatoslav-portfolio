export const siteConfig = {
  name: "Sviatoslav",
  url: "https://sviatoslav-portfolio.vercel.app",
  hero: {
    headlinePrefix: "Frontend Engineer who ships ",
    headlineHighlight: "production-ready",
    headlineSuffix: " products — on my own or with your team.",
    subheadline:
      "Real, live projects built end-to-end: typed, documented, and easy for other developers to pick up and extend.",
  },
  description:
    "Frontend Engineer building production-ready web products with Next.js and TypeScript. Live projects, built end-to-end with typed, documented code.",
  availabilityStatus: "Open to opportunities",
  navLinks: [
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: {
    github: "https://github.com/SviatoslavZv",
    telegram: "https://t.me/sviatoslav_frontend",
    email: "sviatoslav.frontend@gmail.com",
  },
} as const;