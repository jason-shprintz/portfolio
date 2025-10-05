import { projects } from "../../data/projects";
import * as L from "./styles";
import { Button, Muted, CardActions } from "../../styles";

function Projects() {
  return (
    <L.ProjectsGrid>
      {projects.map((p) => (
        <L.ProjectCard key={p.id}>
          <h3>{p.name}</h3>
          <Muted>{p.description}</Muted>
          <L.TechRow>
            {p.tech.map((t) => (
              <L.Tag key={t}>{t}</L.Tag>
            ))}
          </L.TechRow>
          <CardActions>
            <Button variant="ghost" href={p.link}>
              View
            </Button>
          </CardActions>
        </L.ProjectCard>
      ))}
    </L.ProjectsGrid>
  );
}

export default Projects;
