import Image from "next/image";
import type { ImageAsset } from "@/types/content";
import { cn } from "@/lib/utils/cn";
import styles from "./BackgroundImage.module.scss";

interface BackgroundImageProps {
  image: ImageAsset;
  sizes?: string;
  /** Samo za glavnu (LCP) sliku na vrhu strane. */
  preload?: boolean;
  /** Jačina tamnog sloja preko slike — radi čitljivosti belog teksta. */
  overlay?: "soft" | "strong";
  className?: string;
}

/** Fotografija preko cele površine roditelja, sa tamnim slojem. */
export function BackgroundImage({
  image,
  sizes = "100vw",
  preload = false,
  overlay = "soft",
  className,
}: BackgroundImageProps) {
  return (
    <div className={cn(styles.media, styles[overlay], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className={styles.image}
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}
