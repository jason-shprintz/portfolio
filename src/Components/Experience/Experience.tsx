import type { JSX } from "react";
import * as S from "./styles";
import { Muted } from "../../styles";
import { experience } from "../../data/experience";

/**
 * Renders a list of professional experiences.
 *
 * Each experience displays the company/job image, name, title, time period, and description.
 * The experiences are styled using styled components from the `S` namespace.
 *
 * @returns {JSX.Element} The rendered experience list component.
 */
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
              <S.ExpRight>
                {job.description.map((des, idx) => {
                  return <p key={idx}>* {des}</p>;
                })}
              </S.ExpRight>
            </S.ExpItem>
          </S.ExpItemContainer>
        );
      })}
    </S.ExperienceList>
  );
}

export default Experience;
