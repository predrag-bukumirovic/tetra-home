type ClassValue = string | false | null | undefined;

/** Spaja CSS klase i preskače prazne vrednosti: cn(styles.a, active && styles.b). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
