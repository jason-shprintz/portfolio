import type { JSX } from "react";
import * as S from "./styles";
import { Muted } from "../../styles";
import { experience } from "../../data/experience";

function Experience(): JSX.Element {
  return (
    <S.ExperienceList>
      {experience.map((job) => {
        return (
          <S.ExpItemContainer key={job.name}>
            <S.ExpItem>
              <S.ExpLeft>
                <S.JobContainer>
                  <S.JobImg src={job.imgSrc} alt={job.name} />
                  <strong>{job.name}</strong>
                </S.JobContainer>

                <Muted>{job.title}</Muted>
                <Muted>{job.time}</Muted>
              </S.ExpLeft>
              <S.ExpRight style={{ backgroundColor: "hotpink" }}>
                {job.description}
              </S.ExpRight>
            </S.ExpItem>
          </S.ExpItemContainer>
        );
      })}
    </S.ExperienceList>
  );
}

export default Experience;
