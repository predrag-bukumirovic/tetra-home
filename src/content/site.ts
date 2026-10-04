import type { LinkItem, SiteConfig } from "@/types/content";

/** ID-jevi sekcija — koriste ih navigacija i linkovi unutar stranice. */
export const sectionIds = {
  about: "o-nama",
  process: "proces",
  projects: "radovi",
  testimonials: "utisci",
  contact: "kontakt",
} as const;

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig: SiteConfig = {
  name: "Tetra Home",
  tagline: "Nameštaj po meri",
  description:
    "Nameštaj po meri od punog drveta i pločastih materijala — kuhinje, plakari, stolovi, police i dečje sobe, izrađeni s pažnjom u našoj radionici.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (productionUrl ? `https://${productionUrl}` : "http://localhost:3000"),
  instagram: {
    handle: "@tetra_home",
    url: "https://www.instagram.com/tetra_home/",
  },
  // TODO: upisati stvarne podatke — popunjena polja se automatski prikazuju u kontakt sekciji i footeru.
  contact: {
    phone: "",
    email: "",
    location: "",
  },
  nav: [
    { label: "O nama", href: `#${sectionIds.about}` },
    { label: "Proces", href: `#${sectionIds.process}` },
    { label: "Radovi", href: `#${sectionIds.projects}` },
    { label: "Kontakt", href: `#${sectionIds.contact}` },
  ],
};

const { contact, instagram } = siteConfig;

/** Kontakt linkovi koji postoje (telefon, email, Instagram). */
export const contactLinks: LinkItem[] = [
  ...(contact.phone ? [{ label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` }] : []),
  ...(contact.email ? [{ label: contact.email, href: `mailto:${contact.email}` }] : []),
  { label: `Instagram ${instagram.handle}`, href: instagram.url },
];
