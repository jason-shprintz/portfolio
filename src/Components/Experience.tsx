import type { JSX } from "react";

/**
 * Renders a list of professional experiences as articles.
 *
 * Each experience displays the company name, role, duration, and a brief description
 * of responsibilities or achievements.
 *
 * @returns {JSX.Element} The experience list component.
 */
function Experience(): JSX.Element {
  return (
    <div className="experience-list">
      <article className="exp-item">
        <div className="exp-left">
          <strong>Acme Co.</strong>
          <div className="muted">Senior Engineer · 2021 — Present</div>
        </div>
        <div className="exp-right">
          Led a team building internal tools and customer-facing web apps.
          Improved performance and cut deployment times by 40%.
        </div>
      </article>
      <article className="exp-item">
        <div className="exp-left">
          <strong>Widget Labs</strong>
          <div className="muted">Software Engineer · 2018 — 2021</div>
        </div>
        <div className="exp-right">
          Built scalable APIs and integrations used by 100k+ end users.
        </div>
      </article>
    </div>
  );
}

export default Experience;
