import heroImage from "@/assets/images/hero-klub-sto-orah.jpg";
import shelvesImage from "@/assets/images/police-hrast.jpg";
import sideTableImage from "@/assets/images/pomocni-sto-puno-drvo.jpg";
import coffeeTableOakImage from "@/assets/images/projects/klub-sto-hrast.jpg";
import coffeeTableWalnutAshImage from "@/assets/images/projects/klub-sto-orah-jasen.jpg";
import caneSideboardImage from "@/assets/images/projects/komoda-spanska-trska.jpg";
import bunkBedImage from "@/assets/images/projects/krevet-na-sprat.jpg";
import kitchenImage from "@/assets/images/projects/kuhinja-po-meri.jpg";
import wardrobeImage from "@/assets/images/projects/ugradni-plakar.jpg";
import type {
  BenefitsContent,
  ContactContent,
  CtaContent,
  FeaturedProjectContent,
  HeroContent,
  ProcessContent,
  ProjectsContent,
  TestimonialsContent,
} from "@/types/content";
import { sectionIds, siteConfig } from "./site";

const instagramPost = (code: string) => `https://www.instagram.com/p/${code}/`;

export const heroContent: HeroContent = {
  badge: "Po meri",
  eyebrow: "Prostor oblikovan s pažnjom",
  title: ["Nameštaj po meri", "vašeg prostora"],
  lead: "Izrađujemo nameštaj od punog drveta i pločastih materijala — jednostavan, trajan i skrojen baš za vaš dom.",
  scroll: { label: "Skrolujte nadole", href: `#${sectionIds.about}` },
  image: {
    src: heroImage,
    alt: "Klub sto od punog oraha sa donjom policom, ispred sive sofe",
  },
};

export const benefitsContent: BenefitsContent = {
  id: sectionIds.about,
  title: ["Zašto nameštaj", "po meri?"],
  intro:
    "Kada nameštaj nastaje po meri, sami biramo materijale, određujemo proporcije i rešavamo svaki funkcionalni detalj — tako da se svaki komad savršeno uklopi u prostor i služi vam godinama.",
  link: { label: "Pogledajte radove", href: `#${sectionIds.projects}` },
  items: [
    {
      icon: "craft",
      title: "Ručna izrada",
      text: "Spajamo stolarski zanat i kvalitetne materijale kako bismo izradili nameštaj koji traje i lepo stari.",
    },
    {
      icon: "function",
      title: "Funkcionalnost",
      text: "Svaki centimetar je promišljen — rešenja su prilagođena vašem prostoru, navikama i svakodnevnom životu.",
    },
    {
      icon: "nature",
      title: "Prirodni materijali",
      text: "Radimo sa punim drvetom hrasta, oraha, jasena i bukve, zaštićenim uljem Rubio Monocoat na biljnoj bazi.",
    },
  ],
};

export const processContent: ProcessContent = {
  id: sectionIds.process,
  eyebrow: "Od ideje do montaže",
  statement:
    "Verujemo da svaki prostor krije potencijal. S pažnjom i preciznošću oblikujemo ga u nešto što ima svrhu i traje.",
  // TODO: trajanja su okvirna — uskladiti sa stvarnim rokovima
  steps: [
    {
      title: "Konsultacije i merenje",
      label: "Prvi korak",
      text: "Razgovaramo o vašim željama i potrebama, dolazimo na lice mesta i uzimamo precizne mere prostora.",
      duration: "Do 7 dana",
    },
    {
      title: "Idejno rešenje i ponuda",
      label: "Dizajn",
      text: "Predlažemo rešenje, materijale, okove i završnu obradu, uz jasnu ponudu pre početka izrade.",
      duration: "1–2 nedelje",
    },
    {
      title: "Izrada u radionici",
      label: "Zanat",
      text: "Svaki element izrađujemo u našoj radionici — precizno, od proverenih materijala i s pažnjom prema svakom spoju.",
      duration: "3–6 nedelja",
    },
    {
      title: "Montaža i primopredaja",
      label: "Završni korak",
      text: "Dostavljamo i montiramo nameštaj, proveravamo svaki detalj i predajemo vam prostor spreman za život.",
      duration: "1–2 dana",
    },
  ],
};

export const featuredContent: FeaturedProjectContent = {
  captions: ["Izdvojeni projekat", "Puno drvo · Rubio Monocoat"],
  title: "Toplina punog drveta",
  text: "Pomoćni stočić izrađen po meri i u vrsti drveta koja odgovara dnevnom boravku — jednostavna forma, prirodna šara i završna obrada uljem.",
  link: { label: "Pogledajte projekat", href: instagramPost("DdM0T1yCMVL") },
  image: {
    src: sideTableImage,
    alt: "Okrugli pomoćni stočić od punog drveta uz sofu u dnevnom boravku",
    position: "50% 75%",
  },
};

export const projectsContent: ProjectsContent = {
  id: sectionIds.projects,
  title: ["Izdvojeni", "radovi"],
  intro:
    "Svaki projekat počinje razgovorom i merenjem, a završava se komadom koji pripada baš tom prostoru. Ovo je deo onoga što smo izradili.",
  link: { label: "Svi radovi na Instagramu", href: siteConfig.instagram.url },
  items: [
    {
      title: "Kuhinja sa hrastovim detaljima",
      category: "Kuhinje",
      material: "Pločasti materijal i puno drvo",
      href: instagramPost("DWMo-LHiD3g"),
      image: {
        src: kitchenImage,
        alt: "Bela kuhinja po meri sa hrastovom radnom pločom, policama i šankom",
      },
    },
    {
      title: "Ugradni plakar do plafona",
      category: "Plakari",
      material: "Pločasti materijal",
      href: instagramPost("Da0PJzqCAHW"),
      image: {
        src: wardrobeImage,
        alt: "Beli ugradni plakar od poda do plafona u hodniku",
      },
    },
    {
      title: "Krevet na sprat sa stepenicama",
      category: "Dečje sobe",
      material: "Puno drvo",
      href: instagramPost("DQRNf4dCGQQ"),
      image: {
        src: bunkBedImage,
        alt: "Dečji krevet na sprat od punog drveta sa stepenicama i fiokama",
      },
    },
    {
      title: "Komoda sa španskom trskom",
      category: "Dnevna soba",
      material: "Bela boja i španska trska",
      href: instagramPost("DYfUXL5odw8"),
      image: {
        src: caneSideboardImage,
        alt: "Bela TV komoda sa vratima od španske trske",
      },
    },
    {
      title: "Okrugli klub sto od hrasta",
      category: "Stolovi",
      material: "Hrast, prečnik 70 cm",
      href: instagramPost("DQaFAsEiMEN"),
      image: {
        src: coffeeTableOakImage,
        alt: "Okrugli klub sto od punog hrasta sa ukrštenim nogama",
      },
    },
    {
      title: "Klub sto od oraha i jasena",
      category: "Stolovi",
      material: "Orah i jasen",
      href: instagramPost("C4vFxG0sDw_"),
      image: {
        src: coffeeTableWalnutAshImage,
        alt: "Okrugla ploča klub stola od naizmeničnih traka oraha i jasena",
      },
    },
  ],
};

// TODO: PRIMER SADRŽAJA — zameniti stvarnim utiscima klijenata pre objavljivanja sajta
export const testimonialsContent: TestimonialsContent = {
  id: sectionIds.testimonials,
  title: ["Reči koje govore", "o našem radu"],
  intro:
    "Naš rad najbolje opisuju ljudi za koje smo ga radili. Njihove reči govore o rezultatu, ali i o poverenju i saradnji — od prvog merenja do montaže.",
  items: [
    {
      quote:
        "Kuhinja je ispala tačno onako kako smo je zamislili. Svaki centimetar je iskorišćen, a hrastovi detalji daju toplinu celom stanu.",
      author: "Jelena i Marko",
      project: "kuhinja po meri",
    },
    {
      quote:
        "Klub sto od oraha je prvo što gosti primete kada uđu. Vidi se da je rađen s ljubavlju i da se o svakom detalju razmišljalo.",
      author: "Ana P.",
      project: "klub sto od oraha",
    },
    {
      quote:
        "Krevet na sprat je čvrst, bezbedan i prelep — deca ga obožavaju. Hvala na strpljenju oko svih naših izmena.",
      author: "Milica S.",
      project: "dečja soba",
    },
  ],
};

export const contactContent: ContactContent = {
  id: sectionIds.contact,
  title: ["Započnite svoj", "projekat po meri"],
  text: "Ukratko nam opišite prostor, šta vam je potrebno i kada biste želeli da počnemo.",
  note: "Porudžbine po meri primamo i putem poruka na Instagramu.",
  form: {
    heading: "Spremni da započnemo?",
    labels: {
      firstName: "Ime",
      lastName: "Prezime",
      email: "Email adresa",
      phone: "Broj telefona",
      phoneCode: "Pozivni broj",
      projectType: "Vrsta nameštaja",
      location: "Mesto (grad, opština)",
      message: "Opišite nam prostor iz snova",
    },
    messagePlaceholder: "Dimenzije, materijali, ideje ili reference koje imate…",
    phoneCodes: ["+381", "+382", "+385", "+387", "+389", "+386", "+43", "+49", "+41"],
    projectTypes: [
      "Kuhinja",
      "Plakar / garderober",
      "Dnevna soba",
      "Spavaća soba",
      "Dečja soba",
      "Sto ili klub sto",
      "Nešto drugo",
    ],
    budget: {
      legend: "Koji budžet vam odgovara?",
      options: ["Do 500 €", "500 – 2.000 €", "2.000 – 5.000 €", "Preko 5.000 €"],
    },
    timeline: {
      legend: "Kada biste želeli da počnemo?",
      options: ["Što pre", "Za 1–3 meseca", "Za 3–6 meseci", "Kasnije"],
    },
    submitLabel: "Pošaljite upit",
    pendingLabel: "Slanje upita…",
  },
};

export const ctaContent: CtaContent = {
  title: "Pratite naš rad",
  text: "Nove projekte, detalje iz radionice i inspiraciju za vaš dom delimo na Instagramu.",
  link: { label: siteConfig.instagram.handle, href: siteConfig.instagram.url },
  image: {
    src: shelvesImage,
    alt: "Lebdeće police od punog hrasta i bela komoda u dnevnom boravku",
  },
};
