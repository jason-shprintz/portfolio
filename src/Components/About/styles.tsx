import styled from "styled-components";
import { MEDIA_QUERIES } from "../../constants";

export const About = styled.header`
  padding: 2.4rem 0;
`;

export const AboutInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

export const AboutCopy = styled.div`
  width: 60%;

  ${MEDIA_QUERIES.desktop} {
    width: 100%;
  }
`;

export const AboutTitle = styled.h1`
  margin: 0 0 0.2rem 0;
  font-size: 2.2rem;
`;

export const Description = styled.p`
  color: var(--muted);

  font-size: 1.1rem;

  ${MEDIA_QUERIES.desktop} {
    font-size: 1.4rem;
  }
`;
export const AboutCtas = styled.div`
  margin-top: 1.15rem;
  display: flex;
  gap: 0.6rem;
`;

export const AboutCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
