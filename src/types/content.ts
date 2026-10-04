import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui";

// ---------------------------------------------------------------------------
// Opšti tipovi
// ---------------------------------------------------------------------------

export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: StaticImageData;
  alt: string;
  /** Fokus tačka kada se slika seče (CSS object-position), npr. "50% 75%". */
  position?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  instagram: {
    handle: string;
    url: string;
  };
  /** Prazna polja se ne prikazuju na sajtu. */
  contact: {
    phone?: string;
    email?: string;
    location?: string;
  };
  nav: LinkItem[];
}

// ---------------------------------------------------------------------------
// Sekcije početne strane
// ---------------------------------------------------------------------------

/** Naslov u više redova; svaki naredni red se uvlači (kao u dizajnu). */
export type HeadingLines = string[];

export interface HeroContent {
  badge: string;
  eyebrow: string;
  title: HeadingLines;
  lead: string;
  scroll: LinkItem;
  image: ImageAsset;
}

export interface Benefit {
  icon: IconName;
  title: string;
  text: string;
}

export interface BenefitsContent {
  id: string;
  title: HeadingLines;
  intro: string;
  link: LinkItem;
  items: Benefit[];
}

export interface ProcessStep {
  title: string;
  label: string;
  text: string;
  duration: string;
}

export interface ProcessContent {
  id: string;
  eyebrow: string;
  statement: string;
  steps: ProcessStep[];
}

export interface FeaturedProjectContent {
  captions: [string, string];
  title: string;
  text: string;
  link: LinkItem;
  image: ImageAsset;
}

export interface Project {
  title: string;
  category: string;
  material: string;
  href: string;
  image: ImageAsset;
}

export interface ProjectsContent {
  id: string;
  title: HeadingLines;
  intro: string;
  link: LinkItem;
  items: Project[];
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string;
}

export interface TestimonialsContent {
  id: string;
  title: HeadingLines;
  intro: string;
  items: Testimonial[];
}

export interface ChoiceField {
  legend: string;
  options: string[];
}

export interface InquiryFormContent {
  heading: string;
  labels: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    phoneCode: string;
    projectType: string;
    location: string;
    message: string;
  };
  messagePlaceholder: string;
  phoneCodes: string[];
  projectTypes: string[];
  budget: ChoiceField;
  timeline: ChoiceField;
  submitLabel: string;
  pendingLabel: string;
}

export interface ContactContent {
  id: string;
  title: HeadingLines;
  text: string;
  note: string;
  form: InquiryFormContent;
}

export interface CtaContent {
  title: string;
  text: string;
  link: LinkItem;
  image: ImageAsset;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export interface FooterColumn {
  title: string;
  /** Stavka bez `href` prikazuje se kao običan tekst. */
  items: { label: string; href?: string }[];
}

export interface FooterContent {
  statement: string;
  link: LinkItem;
  columns: FooterColumn[];
  rights: string;
  backToTop: string;
}
