"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Icon, SmartLink } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.scss";

const MENU_ID = "mobilni-meni";
const DESKTOP_QUERY = "(min-width: 1024px)";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  // Zatvaranje menija na Escape i pri prelasku na desktop širinu
  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const close = () => setMenuOpen(false);
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close();
    const onBreakpoint = () => desktop.matches && close();

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  // Prozirno zaglavlje samo preko hero fotografije na početnoj strani
  const overImage = pathname === "/" && !scrolled && !menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn(styles.header, overImage ? styles.overImage : styles.solid)}>
      <Container className={styles.bar}>
        <a href="#top" className={styles.logo} onClick={closeMenu}>
          {siteConfig.name}
        </a>

        <nav className={styles.nav} aria-label="Glavna navigacija">
          <ul className={styles.navList}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <SmartLink href={item.href} className={styles.navLink}>
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <SmartLink
            href={siteConfig.instagram.url}
            className={styles.iconButton}
            aria-label={`Instagram ${siteConfig.instagram.handle}`}
          >
            <Icon name="instagram" size={20} />
          </SmartLink>

          <button
            type="button"
            className={cn(styles.iconButton, styles.menuToggle)}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{menuOpen ? "Zatvori meni" : "Otvori meni"}</span>
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </Container>

      <MobileMenu id={MENU_ID} open={menuOpen} onNavigate={closeMenu} />
    </header>
  );
}
