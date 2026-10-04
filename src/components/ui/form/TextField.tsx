import type { ComponentPropsWithoutRef } from "react";
import { controlA11y, FieldShell, fieldId, withRequiredMark } from "./FieldShell";
import styles from "./Form.module.scss";

type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "id" | "name"> & {
  name: string;
  label: string;
  error?: string;
};

export function TextField({ name, label, error, required, placeholder, className, ...props }: TextFieldProps) {
  const id = fieldId(name);

  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <input
        name={name}
        required={required}
        placeholder={placeholder ?? withRequiredMark(label, required)}
        className={styles.control}
        {...controlA11y(id, error)}
        {...props}
      />
    </FieldShell>
  );
}
