import { ArrowLink, Container, Icon, SmartLink } from "@/components/ui";
import { footerContent } from "@/content/footer";
import { siteConfig } from "@/content/site";
import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { statement, link, columns, rights, backToTop } = footerContent;

  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.intro}>
          <p className={styles.statement}>{statement}</p>
          <ArrowLink href={link.href}>{link.label}</ArrowLink>
        </div>

        <div className={styles.columns}>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <SmartLink href={item.href} className={styles.link}>
                        {item.label}
                      </SmartLink>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className={styles.wordmarkFrame}>
        <p className={styles.wordmark} aria-hidden="true">
          {siteConfig.name}
        </p>
      </Container>

      <div className={styles.bottom}>
        <Container className={styles.bottomInner}>
          <p>
            © {currentYear} {siteConfig.name}. {rights}
          </p>
          <a href="#top" className={styles.link}>
            {backToTop}
            <Icon name="arrow-up" size={12} className={styles.toTopIcon} />
          </a>
        </Container>
      </div>
    </footer>
  );
}
