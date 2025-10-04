import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.id} className="card project">
          <h3>{p.name}</h3>
          <p className="muted">{p.description}</p>
          <div className="tech">
            {p.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="card-actions">
            <a href={p.link} className="button ghost">
              View
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
