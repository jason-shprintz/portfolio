import { projects } from "../../data/projects";
import * as S from "./styles";
import { Button, Muted, CardActions } from "../../styles";
import type { JSX } from "react";

/**
 * Renders a grid of project cards, each displaying project details such as name, description, technologies used, and a link to view the project.
 *
 * @returns {JSX.Element} The rendered grid of project cards.
 *
 * @remarks
 * - Expects a `projects` array to be available in scope, where each project has `id`, `name`, `description`, `tech`, and `link` properties.
 * - Uses styled components from the `S` namespace for layout and styling.
 * - Each project card includes a list of technology tags and a button linking to the project's external page.
 */
function Projects(): JSX.Element {
  return (
    <S.ProjectsGrid>
      {projects.map((p) => (
        <S.ProjectCard key={p.id}>
          <h3>{p.name}</h3>
          <Muted>{p.description}</Muted>
          <S.TechRow>
            {p.tech.map((t) => (
              <S.Tag key={t}>{t}</S.Tag>
            ))}
          </S.TechRow>
          <CardActions>
            <Button variant="ghost" href={p.link}>
              View
            </Button>
          </CardActions>
        </S.ProjectCard>
      ))}
    </S.ProjectsGrid>
  );
}

export default Projects;
