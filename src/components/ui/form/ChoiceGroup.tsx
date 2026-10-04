import { cn } from "@/lib/utils/cn";
import styles from "./Form.module.scss";

interface ChoiceGroupProps {
  name: string;
  legend: string;
  options: readonly string[];
  /** Podrazumevano je izabrana prva opcija (kao u dizajnu). */
  defaultValue?: string;
  className?: string;
}

/** Grupa radio dugmića sa kvadratnim oznakama. */
export function ChoiceGroup({ name, legend, options, defaultValue = options[0], className }: ChoiceGroupProps) {
  return (
    <fieldset className={cn(styles.group, className)}>
      <legend className={styles.label}>{legend}</legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option} className={styles.option}>
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              className={styles.radio}
            />
            <span className={styles.box} aria-hidden="true" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
