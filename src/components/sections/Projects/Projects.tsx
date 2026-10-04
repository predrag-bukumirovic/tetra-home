import { ArrowLink, Container, SectionIntro } from "@/components/ui";
import type { ProjectsContent } from "@/types/content";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

export function Projects({ id, title, intro, link, items }: ProjectsContent) {
  const titleId = `${id}-naslov`;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container>
        <SectionIntro title={title} indent={1.6} text={intro} titleId={titleId}>
          <ArrowLink href={link.href}>{link.label}</ArrowLink>
        </SectionIntro>

        <ul className={styles.grid}>
          {items.map((project, index) => (
            <li key={project.href} className={styles.item}>
              <ProjectCard project={project} index={index + 1} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
