import { BackgroundImage, Container, Heading } from "@/components/ui";
import type { HeroContent } from "@/types/content";
import styles from "./Hero.module.scss";

export function Hero({ badge, eyebrow, title, lead, scroll, image }: HeroContent) {
  return (
    <section className={styles.hero}>
      <BackgroundImage image={image} preload overlay="strong" />

      <Container className={styles.inner}>
        <p className={styles.badge}>{badge}</p>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <Heading as="h1" size="display" lines={title} className={styles.title} />
          <p className={styles.lead}>{lead}</p>
        </div>

        <a href={scroll.href} className={styles.scroll}>
          ( {scroll.label} )
        </a>
      </Container>
    </section>
  );
}
