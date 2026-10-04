"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import type { Testimonial } from "@/types/content";
import styles from "./TestimonialSlider.module.scss";

interface TestimonialSliderProps {
  items: readonly Testimonial[];
  className?: string;
}

export function TestimonialSlider({ items, className }: TestimonialSliderProps) {
  const [active, setActive] = useState(0);
  const count = items.length;
  const { quote, author, project } = items[active];

  const show = (step: number) => setActive((current) => (current + step + count) % count);

  return (
    <div className={cn(styles.slider, className)}>
      <span className={styles.mark} aria-hidden="true">
        “
      </span>

      <div aria-live="polite">
        {/* `key` ponovo pokreće animaciju pri promeni utiska */}
        <figure key={active} className={styles.slide}>
          <blockquote className={styles.quote}>
            <p>„{quote}“</p>
          </blockquote>
          <figcaption className={styles.author}>
            — {author}, {project}
          </figcaption>
        </figure>
      </div>

      {count > 1 && (
        <div className={styles.controls}>
          <button type="button" className={styles.button} onClick={() => show(-1)}>
            <span className="visually-hidden">Prethodni utisak</span>
            <Icon name="arrow-left" size={22} />
          </button>
          <button type="button" className={styles.button} onClick={() => show(1)}>
            <span className="visually-hidden">Sledeći utisak</span>
            <Icon name="arrow-right" size={22} />
          </button>
        </div>
      )}
    </div>
  );
}
