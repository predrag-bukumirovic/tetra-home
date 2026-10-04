import { useEffect } from "react";

/** Zaključava skrolovanje stranice dok je `locked` true (npr. otvoren mobilni meni). */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { style } = document.documentElement;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previousOverflow;
    };
  }, [locked]);
}
