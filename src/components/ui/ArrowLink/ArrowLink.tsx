import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Icon } from "../Icon/Icon";
import { SmartLink } from "../SmartLink/SmartLink";
import styles from "./ArrowLink.module.scss";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  /** `light` za tekst preko fotografija. */
  tone?: "dark" | "light";
  className?: string;
}

/** Podvučeni link velikim slovima sa strelicom ↗ (npr. „Pogledajte radove"). */
export function ArrowLink({ href, children, tone = "dark", className }: ArrowLinkProps) {
  return (
    <SmartLink href={href} className={cn(styles.link, styles[tone], className)}>
      {children}
      <Icon name="arrow-up-right" size={14} className={styles.icon} />
    </SmartLink>
  );
}
