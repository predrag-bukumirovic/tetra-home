import { icons, type IconName } from "./icons";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/** Dekorativna SVG ikonica (aria-hidden) — tekstualni opis daje roditeljski element. */
export function Icon({ name, size = 16, className }: IconProps) {
  const { viewBox, strokeWidth, body } = icons[name];

  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {body}
    </svg>
  );
}
