import type { FooterContent } from "@/types/content";
import { contactLinks, sectionIds, siteConfig } from "./site";

export const footerContent: FooterContent = {
  statement: "Unosimo toplinu punog drveta i bezvremenski dizajn u vaš dom i radni prostor.",
  link: { label: "Pošaljite upit", href: `#${sectionIds.contact}` },
  columns: [
    {
      title: "Usluge",
      items: [
        { label: "Kuhinje po meri" },
        { label: "Plakari i garderoberi" },
        { label: "Stolovi i klub stolovi" },
        { label: "Police i komode" },
        { label: "Dečje sobe" },
      ],
    },
    { title: "Studio", items: siteConfig.nav },
    { title: "Kontakt", items: contactLinks },
  ],
  rights: "Sva prava zadržana.",
  backToTop: "Nazad na vrh",
};
