import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </main>
  );
}