import { Container } from "@/components/ui";
import type { ProcessContent } from "@/types/content";
import styles from "./Process.module.scss";

export function Process({ id, eyebrow, statement, steps }: ProcessContent) {
  const titleId = `${id}-naslov`;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={titleId} className={styles.statement}>
            {statement}
          </h2>
        </div>

        <div className={styles.body}>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.label}>{step.label}</p>
                <p className={styles.text}>{step.text}</p>
                <p className={styles.duration}>{step.duration}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
