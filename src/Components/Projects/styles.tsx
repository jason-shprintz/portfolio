import styled from "styled-components";

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  padding: 1rem;
  border-radius: 10px;
  transition: transform 220ms ease, box-shadow 220ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.6);
  }
`;

export const TechRow = styled.div`
  margin-top: 0.6rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.03);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.85rem;
`;
