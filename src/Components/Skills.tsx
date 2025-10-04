import type { JSX } from "react";
import { skills } from "../data/skills";

/**
 * Renders a grid of skill names as individual span elements.
 *
 * @returns {JSX.Element} A div containing a list of skills.
 *
 * @example
 * <Skills />
 *
 * @remarks
 * The skills are hardcoded in an array and displayed in a grid layout.
 */
function Skills(): JSX.Element {
  return (
    <div className="skills-grid">
      {skills.map((s) => (
        <span key={s} className="skill">
          {s}
        </span>
      ))}
    </div>
  );
}

export default Skills;
