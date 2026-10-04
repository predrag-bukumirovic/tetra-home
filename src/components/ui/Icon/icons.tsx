import type { ReactNode } from "react";

interface IconDefinition {
  viewBox: string;
  strokeWidth: number;
  body: ReactNode;
}

const UI = { viewBox: "0 0 24 24", strokeWidth: 1.25 } as const;
const FEATURE = { viewBox: "0 0 64 64", strokeWidth: 1 } as const;

/** Sve ikonice sajta na jednom mestu — linijske, prate `currentColor`. */
export const icons = {
  "arrow-up-right": { ...UI, body: <path d="M7 17 17 7M8.5 7H17v8.5" /> },
  "arrow-left": { ...UI, body: <path d="M20 12H4m6-6-6 6 6 6" /> },
  "arrow-right": { ...UI, body: <path d="M4 12h16m-6-6 6 6-6 6" /> },
  "arrow-up": { ...UI, body: <path d="M12 20V4m-6 6 6-6 6 6" /> },
  menu: { ...UI, body: <path d="M3 9h18M3 15h18" /> },
  close: { ...UI, body: <path d="m5.5 5.5 13 13m0-13-13 13" /> },
  instagram: {
    ...UI,
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="0.7" fill="currentColor" stroke="none" />
      </>
    ),
  },

  // Ručna izrada — ukršteni čekić i dleto
  craft: {
    ...FEATURE,
    body: (
      <>
        <g transform="rotate(-40 32 32)">
          <rect x="30.25" y="18" width="3.5" height="40" rx="1.2" />
          <path d="M20 10h17.5l6 3.25v2.5l-6 3.25H20z" />
        </g>
        <g transform="rotate(40 32 32)">
          <rect x="29.5" y="39" width="5" height="19" rx="2" />
          <path d="M29.5 43h5M30.75 39V12h2.5v27" />
        </g>
      </>
    ),
  },

  // Funkcionalnost — zupčanici
  function: {
    ...FEATURE,
    body: (
      <>
        <path d="M38.5 38l3.39 1.92-.48 2.51-3.86.54-1.63 2.97 1.62 3.54-1.87 1.75-3.44-1.83-3.06 1.44-.77 3.82-2.55.32-1.7-3.51-3.32-.63-2.87 2.63-2.25-1.23.68-3.84-2.31-2.46-3.87.44-1.09-2.32 2.8-2.7-.42-3.36-3.39-1.92.48-2.51 3.86-.54 1.63-2.97-1.62-3.54 1.87-1.75 3.44 1.83 3.06-1.44.77-3.82 2.55-.32 1.7 3.51 3.32.63 2.87-2.63 2.25 1.23-.68 3.84 2.31 2.46 3.87-.44 1.09 2.32-2.8 2.7z" />
        <circle cx="25" cy="38" r="5.5" />
        <path d="M54.06 18.43l1.89 1.75-.75 1.62-2.56-.32-1.66 1.52.1 2.58-1.68.61-1.58-2.04-2.25-.09-1.75 1.89-1.62-.75.32-2.56-1.52-1.66-2.58.1-.61-1.68 2.04-1.58.09-2.25-1.89-1.75.75-1.62 2.56.32 1.66-1.52-.1-2.58 1.68-.61 1.58 2.04 2.25.09 1.75-1.89 1.62.75-.32 2.56 1.52 1.66 2.58-.1.61 1.68-2.04 1.58z" />
        <circle cx="47" cy="17" r="3" />
      </>
    ),
  },

  // Prirodni materijali — list
  nature: {
    ...FEATURE,
    body: (
      <>
        <path d="M15 49c-1.5-18 10-33.5 34.5-36 1.5 23-12 37.5-34.5 36z" />
        <path d="M15 49 40.5 22.5M15 49l-5 5" />
      </>
    ),
  },
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;
