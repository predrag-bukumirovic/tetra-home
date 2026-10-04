import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { controlA11y, FieldShell, fieldId } from "./FieldShell";
import styles from "./Form.module.scss";

type TextAreaFieldProps = Omit<ComponentPropsWithoutRef<"textarea">, "id" | "name"> & {
  name: string;
  /** Vidljiva labela iznad polja. */
  label: string;
  error?: string;
};

export function TextAreaField({ name, label, error, rows = 4, className, ...props }: TextAreaFieldProps) {
  const id = fieldId(name);

  return (
    <FieldShell id={id} label={label} error={error} showLabel className={className}>
      <textarea
        name={name}
        rows={rows}
        className={cn(styles.control, styles.textarea)}
        {...controlA11y(id, error)}
        {...props}
      />
    </FieldShell>
  );
}
