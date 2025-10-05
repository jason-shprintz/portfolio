import styled from "styled-components";

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ExpItem = styled.article`
  display: flex;
  gap: 1rem;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const ExpLeft = styled.div`
  width: 220px;
  @media (max-width: 720px) {
    width: auto;
  }
`;
export const ExpRight = styled.div``;
