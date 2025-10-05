import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";

/**
 * Renders a grid of skill icons using the provided `skills` array.
 * Each skill is displayed as an image with its corresponding `src` and `alt` attributes.
 *
 * @returns {JSX.Element} The rendered skills grid component.
 */
function Skills(): JSX.Element {
  return (
    <S.SkillsGrid>
      {skills.map((s) => (
        <img key={s.alt} src={s.src} alt={s.alt} />
      ))}
    </S.SkillsGrid>
  );
}

export default Skills;
