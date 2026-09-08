import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}