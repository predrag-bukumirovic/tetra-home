import { Container, ImageBanner } from "@/components/ui";
import type { FeaturedProjectContent } from "@/types/content";
import styles from "./FeaturedProject.module.scss";

export function FeaturedProject({ captions, title, text, link, image }: FeaturedProjectContent) {
  return (
    <section>
      <Container className={styles.captions}>
        {captions.map((caption) => (
          <p key={caption}>{caption}</p>
        ))}
      </Container>
      <ImageBanner image={image} title={title} text={text} link={link} variant="full" />
    </section>
  );
}
