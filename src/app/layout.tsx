import type { Metadata, Viewport } from "next";
import { Footer, Header } from "@/components/layout";
import { siteConfig } from "@/content/site";
import { bodyFont, headingFont } from "@/lib/fonts";
import "@/styles/globals.scss";

const title = `${siteConfig.name} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nameštaj po meri",
    "kuhinje po meri",
    "plakari po meri",
    "nameštaj od punog drveta",
    "klub sto",
    "stolarija",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a href="#sadrzaj" className="skip-link">
          Preskoči na sadržaj
        </a>
        <Header />
        <main id="sadrzaj">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
