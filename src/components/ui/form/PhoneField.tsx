import { cn } from "@/lib/utils/cn";
import { controlA11y, FieldShell, fieldId } from "./FieldShell";
import styles from "./Form.module.scss";

interface PhoneFieldProps {
  name: string;
  label: string;
  /** Polje sa pozivnim brojem države. */
  codeName: string;
  codeLabel: string;
  codes: readonly string[];
  defaultCode?: string;
  defaultValue?: string;
  error?: string;
  className?: string;
}

/** Broj telefona sa izborom pozivnog broja. */
export function PhoneField({
  name,
  label,
  codeName,
  codeLabel,
  codes,
  defaultCode = codes[0],
  defaultValue,
  error,
  className,
}: PhoneFieldProps) {
  const id = fieldId(name);

  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <div className={styles.phone}>
        <select
          // React ne primenjuje izmenjen defaultValue na <select> — `key` ga ponovo montira
          key={defaultCode}
          name={codeName}
          aria-label={codeLabel}
          defaultValue={defaultCode}
          className={cn(styles.control, styles.select)}
        >
          {codes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <input
          name={name}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={label}
          defaultValue={defaultValue}
          className={styles.control}
          {...controlA11y(id, error)}
        />
      </div>
    </FieldShell>
  );
}
