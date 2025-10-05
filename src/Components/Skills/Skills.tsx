import type { JSX } from "react";
import { skills } from "../../data/skills";
import * as S from "./styles";

function Skills(): JSX.Element {
  return (
    <S.SkillsGrid>
      {skills.map((s) => (
        <S.Skill key={s}>{s}</S.Skill>
      ))}
    </S.SkillsGrid>
  );
}

export default Skills;
