import {
  Benefits,
  Contact,
  FeaturedProject,
  Hero,
  InstagramCta,
  Process,
  Projects,
  Testimonials,
} from "@/components/sections";
import {
  benefitsContent,
  contactContent,
  ctaContent,
  featuredContent,
  heroContent,
  processContent,
  projectsContent,
  testimonialsContent,
} from "@/content/home";

// Komponente su samo prikaz — sav tekst i slike stižu iz src/content/home.ts
export default function HomePage() {
  return (
    <>
      <Hero {...heroContent} />
      <Benefits {...benefitsContent} />
      <Process {...processContent} />
      <FeaturedProject {...featuredContent} />
      <Projects {...projectsContent} />
      <Testimonials {...testimonialsContent} />
      <Contact {...contactContent} />
      <InstagramCta {...ctaContent} />
    </>
  );
}
