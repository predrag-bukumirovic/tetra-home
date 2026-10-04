# Tetra Home — sajt

Početna strana za Tetra Home, nameštaj po meri. Next.js 16 (App Router), React 19, TypeScript i SCSS moduli.

## Pokretanje

```bash
npm install
npm run dev     # razvoj — http://localhost:3000
npm run build   # produkcijski build
npm run start   # pokreće produkcijski build
npm run lint
```

## Struktura

```
src/
├── app/                 # layout, početna strana, metapodaci, favicon i OG slika
├── assets/images/       # fotografije (sa Instagrama @tetra_home)
├── components/
│   ├── layout/          # Header (+ mobilni meni) i Footer
│   ├── sections/        # sekcije početne strane: Hero, Benefits, Process, …
│   └── ui/              # gradivni blokovi: Heading, ArrowLink, Button, ImageBanner, form/, …
├── content/             # sav tekst sajta: site.ts, home.ts, footer.ts
├── hooks/               # useScrolled, useBodyScrollLock
├── lib/                 # fontovi, server akcija za upit, pomoćne funkcije
├── styles/
│   ├── abstracts/       # tokeni i mixini (ne generišu CSS)
│   ├── base/            # :root promenljive, reset, globalni stilovi
│   └── globals.scss
└── types/               # TypeScript tipovi sadržaja
```

## Izmena sadržaja

Komponente ne sadrže tekst — sve stiže iz `src/content`:

- `site.ts` — naziv, navigacija, Instagram i kontakt podaci
- `home.ts` — tekstovi, slike i linkovi svih sekcija početne strane
- `footer.ts` — footer

## Stilovi

- Svaka komponenta ima svoj `*.module.scss`.
- Na vrhu modula: `@use "abstracts" as *;` — daje mixine (`mq`, `heading`, `label`, `caption`, `text`, `grid`, `reveal`, …) i Sass tokene. Putanja radi zahvaljujući `sassOptions.loadPaths` u `next.config.ts`.
- Boje i razmaci su CSS promenljive u `styles/base/_root.scss`.

## Pre objavljivanja

- [ ] Upisati telefon, email i lokaciju u `src/content/site.ts` — prikazuju se automatski kada se popune.
- [ ] Utisci klijenata su **primer** — zameniti stvarnim (`testimonialsContent` u `src/content/home.ts`).
- [ ] Forma za upit trenutno samo beleži upit u log servera — povezati slanje emaila u `src/lib/inquiry/actions.ts`.
- [ ] Proveriti okvirna trajanja faza procesa (`processContent`).
- [ ] Postaviti `NEXT_PUBLIC_SITE_URL` (npr. `https://tetrahome.rs`) zbog linkova u Open Graph pregledu.
