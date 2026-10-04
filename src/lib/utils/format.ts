/** Redni broj sa vodećom nulom: 1 → "01" (koraci procesa, projekti, slajder). */
export function formatIndex(index: number): string {
  return String(index).padStart(2, "0");
}
