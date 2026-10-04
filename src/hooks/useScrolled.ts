import { useSyncExternalStore } from "react";

function subscribe(onScroll: () => void) {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

/** `true` kada je stranica skrolovana više od `threshold` piksela. */
export function useScrolled(threshold = 0): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
