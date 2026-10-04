import { cn } from "@/lib/utils/cn";
import styles from "./Heading.module.scss";

export type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

interface HeadingProps {
  /** Svaki red naslova posebno — prelom redova je deo dizajna. */
  lines: readonly string[];
  as?: "h1" | "h2" | "h3" | "p";
  size?: HeadingSize;
  id?: string;
  className?: string;
}

/** Naslov velikim slovima, u jednom ili više redova, poravnat levo. */
export function Heading({ lines, as: Tag = "h2", size = "xl", id, className }: HeadingProps) {
  return (
    <Tag id={id} className={cn(styles.heading, styles[size], className)}>
      {lines.map((line, index) => (
        <span key={line} className={styles.line}>
          {/* razmak čuva ispravan tekst za čitače ekrana i pretraživače */}
          {index > 0 && " "}
          {line}
        </span>
      ))}
    </Tag>
  );
}
