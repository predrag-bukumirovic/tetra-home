import { Container, ImageBanner } from "@/components/ui";
import type { CtaContent } from "@/types/content";

export function InstagramCta({ title, text, link, image }: CtaContent) {
  return (
    <section>
      <Container>
        <ImageBanner image={image} title={title} text={text} link={link} variant="inset" />
      </Container>
    </section>
  );
}
