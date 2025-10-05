import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";

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
