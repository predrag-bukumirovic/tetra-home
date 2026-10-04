import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { Icon } from "../Icon/Icon";
import type { IconName } from "../Icon/icons";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon?: IconName | null;
  fullWidth?: boolean;
}

/** Tamno dugme velikim slovima, sa strelicom ↗. */
export function Button({
  children,
  icon = "arrow-up-right",
  fullWidth = false,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(styles.button, fullWidth && styles.fullWidth, className)} {...props}>
      {children}
      {icon && <Icon name={icon} size={14} />}
    </button>
  );
}
