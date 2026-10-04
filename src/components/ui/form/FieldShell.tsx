import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Form.module.scss";

interface FieldShellProps {
  id: string;
  label: string;
  error?: string;
  /** Labela je podrazumevano skrivena — kao u dizajnu, ulogu natpisa ima placeholder. */
  showLabel?: boolean;
  className?: string;
  children: ReactNode;
}

export const fieldId = (name: string) => `field-${name}`;

const errorId = (id: string) => `${id}-error`;

/** ARIA atributi koji povezuju kontrolu sa porukom o grešci. */
export function controlA11y(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId(id) : undefined,
  };
}

/** Placeholder sa oznakom obaveznog polja: "Ime *". */
export const withRequiredMark = (label: string, required?: boolean) => (required ? `${label} *` : label);

/** Zajednički omotač polja forme: labela, kontrola i poruka o grešci. */
export function FieldShell({ id, label, error, showLabel = false, className, children }: FieldShellProps) {
  return (
    <div className={cn(styles.field, className)}>
      <label htmlFor={id} className={showLabel ? styles.label : "visually-hidden"}>
        {label}
      </label>
      {children}
      {error && (
        <p id={errorId(id)} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
