import type { ImageAsset, LinkItem } from "@/types/content";
import { cn } from "@/lib/utils/cn";
import { ArrowLink } from "../ArrowLink/ArrowLink";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";
import styles from "./ImageBanner.module.scss";

interface ImageBannerProps {
  image: ImageAsset;
  title: string;
  text: string;
  link: LinkItem;
  /** `full` — od ivice do ivice ekrana; `inset` — unutar kontejnera. */
  variant?: "full" | "inset";
  className?: string;
}

const SIZES = {
  full: "100vw",
  inset: "(min-width: 1760px) 1700px, 100vw",
} as const;

/** Fotografija sa centriranim naslovom, tekstom i linkom. */
export function ImageBanner({ image, title, text, link, variant = "full", className }: ImageBannerProps) {
  return (
    <div className={cn(styles.banner, styles[variant], className)}>
      <BackgroundImage image={image} sizes={SIZES[variant]} overlay="strong" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ArrowLink href={link.href} tone="light" className={styles.link}>
          {link.label}
        </ArrowLink>
      </div>
    </div>
  );
}
