import { Container, Heading, SmartLink } from "@/components/ui";
import { contactLinks, siteConfig } from "@/content/site";
import type { ContactContent } from "@/types/content";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.scss";

export function Contact({ id, title, text, note, form }: ContactContent) {
  const titleId = `${id}-naslov`;
  const { location } = siteConfig.contact;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container className={styles.inner}>
        <div className={styles.info}>
          <Heading lines={title} id={titleId} className={styles.title} />
          <p className={styles.text}>{text}</p>

          <address className={styles.details}>
            {location && <p className={styles.location}>{location}</p>}
            {contactLinks.map((item) => (
              <SmartLink key={item.href} href={item.href} className={styles.detailLink}>
                {item.label}
              </SmartLink>
            ))}
          </address>
          <p className={styles.note}>{note}</p>
        </div>

        <ContactForm content={form} className={styles.form} />
      </Container>
    </section>
  );
}
