import Image from "next/image";
import { Icon, SmartLink } from "@/components/ui";
import type { Project } from "@/types/content";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, material, href, image } = project;

  return (
    <SmartLink href={href} className={styles.card}>
      <div className={styles.media}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
          placeholder="blur"
          className={styles.image}
        />
      </div>

      <div className={styles.meta}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.details}>
            {category} · {material}
          </p>
        </div>
        <Icon name="arrow-up-right" size={16} className={styles.icon} />
      </div>
    </SmartLink>
  );
}
