import type { CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Heading.module.scss";

export type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

interface HeadingProps {
  /** Svaki red naslova posebno — kao u dizajnu. */
  lines: readonly string[];
  as?: "h1" | "h2" | "h3" | "p";
  size?: HeadingSize;
  /** Uvlačenje redova posle prvog, u em (npr. 2.5). */
  indent?: number;
  id?: string;
  className?: string;
}

/** Naslov velikim slovima, u jednom ili više redova sa uvlačenjem. */
export function Heading({ lines, as: Tag = "h2", size = "xl", indent, id, className }: HeadingProps) {
  const style = indent ? ({ "--indent": `${indent}em` } as CSSProperties) : undefined;

  return (
    <Tag id={id} className={cn(styles.heading, styles[size], className)} style={style}>
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
