import { ArrowLink } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils/cn";
import { formatIndex } from "@/lib/utils/format";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onNavigate: () => void;
}

/** Meni preko celog ekrana za telefone i tablete. */
export function MobileMenu({ id, open, onNavigate }: MobileMenuProps) {
  return (
    <div id={id} className={cn(styles.menu, open && styles.open)} inert={!open}>
      <nav aria-label="Mobilna navigacija">
        <ul className={styles.list}>
          {siteConfig.nav.map((item, index) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link} onClick={onNavigate}>
                <span className={styles.index}>{formatIndex(index + 1)}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ArrowLink href={siteConfig.instagram.url}>{siteConfig.instagram.handle}</ArrowLink>
    </div>
  );
}
