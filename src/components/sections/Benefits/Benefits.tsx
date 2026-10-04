import { ArrowLink, Container, Icon, SectionIntro } from "@/components/ui";
import type { BenefitsContent } from "@/types/content";
import styles from "./Benefits.module.scss";

export function Benefits({ id, title, intro, link, items }: BenefitsContent) {
  const titleId = `${id}-naslov`;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container>
        <SectionIntro title={title} indent={2.65} text={intro} titleId={titleId} stacked />

        <div className={styles.body}>
          <ArrowLink href={link.href} className={styles.link}>
            {link.label}
          </ArrowLink>

          <ul className={styles.cards}>
            {items.map((item) => (
              <li key={item.title} className={styles.card}>
                <Icon name={item.icon} size={72} className={styles.icon} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
