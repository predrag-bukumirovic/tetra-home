import { Instrument_Sans, Inter_Tight } from "next/font/google";

// latin-ext pokriva č, ć, đ, š i ž

/** Naslovi, navigacija i oznake (velika slova). */
export const headingFont = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

/** Pasusi, citati i forme. */
export const bodyFont = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
