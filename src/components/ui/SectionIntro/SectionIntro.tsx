import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Heading } from "../Heading/Heading";
import styles from "./SectionIntro.module.scss";

interface SectionIntroProps {
  title: readonly string[];
  /** Uvlačenje drugog reda naslova, u em. */
  indent?: number;
  text: string;
  titleId?: string;
  /** Tekst ispod naslova umesto pored njega. */
  stacked?: boolean;
  /** Dodatni sadržaj ispod teksta (npr. link). */
  children?: ReactNode;
  className?: string;
}

/** Uvod sekcije: veliki naslov levo i kratak opis desno. */
export function SectionIntro({ title, indent, text, titleId, stacked = false, children, className }: SectionIntroProps) {
  return (
    <div className={cn(styles.intro, stacked && styles.stacked, className)}>
      <Heading lines={title} indent={indent} id={titleId} className={styles.title} />
      <div className={styles.aside}>
        <p className={styles.text}>{text}</p>
        {children}
      </div>
    </div>
  );
}
