import { Container, SectionIntro } from "@/components/ui";
import type { TestimonialsContent } from "@/types/content";
import { TestimonialSlider } from "./TestimonialSlider";
import styles from "./Testimonials.module.scss";

export function Testimonials({ id, title, intro, items }: TestimonialsContent) {
  const titleId = `${id}-naslov`;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container>
        <SectionIntro title={title} indent={3.8} text={intro} titleId={titleId} />

        <div className={styles.body}>
          <TestimonialSlider items={items} className={styles.slider} />
        </div>
      </Container>
    </section>
  );
}
