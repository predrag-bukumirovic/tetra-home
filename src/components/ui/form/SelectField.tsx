import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { controlA11y, FieldShell, fieldId } from "./FieldShell";
import styles from "./Form.module.scss";

type SelectFieldProps = Omit<ComponentPropsWithoutRef<"select">, "id" | "name" | "children" | "defaultValue"> & {
  name: string;
  label: string;
  options: readonly string[];
  defaultValue?: string;
  error?: string;
};

/** Padajući meni; prva (prazna) opcija služi kao placeholder. */
export function SelectField({ name, label, options, error, defaultValue = "", className, ...props }: SelectFieldProps) {
  const id = fieldId(name);

  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <select
        // React ne primenjuje izmenjen defaultValue na <select> — `key` ga ponovo montira
        key={defaultValue}
        name={name}
        defaultValue={defaultValue}
        className={cn(styles.control, styles.select)}
        {...controlA11y(id, error)}
        {...props}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
