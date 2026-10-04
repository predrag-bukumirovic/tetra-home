import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Container.module.scss";

/** Centriran omotač sa bočnim marginama i maksimalnom širinom sadržaja. */
export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn(styles.container, className)} {...props} />;
}
