import styled from "styled-components";
import { MEDIA_QUERIES } from "../../constants";

export const Hero = styled.header`
  padding: 2.4rem 0;
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

export const HeroCopy = styled.div`
  width: 60%;

  ${MEDIA_QUERIES.desktop} {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 0.2rem 0;
  font-size: 2.2rem;
`;

export const Lead = styled.p`
  margin-top: 1rem;
  color: var(--muted);

  font-size: 1.1rem;

  ${MEDIA_QUERIES.desktop} {
    font-size: 1.4rem;
  }
`;
export const HeroCtas = styled.div`
  margin-top: 1.15rem;
  display: flex;
  gap: 0.6rem;
`;

export const Button = styled.a<{ asButton?: boolean }>`
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: transparent;
  color: inherit;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  &.primary {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    color: #061226;
    border: none;
  }
  &.ghost {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.04);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const HeroCard = styled.div`
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

export const HeroMeta = styled.div`
  color: white;
`;
export const MetaName = styled.div`
  font-weight: 700;
`;
export const MetaRole = styled.div`
  color: var(--muted);
  font-size: 0.95rem;
  margin-top: 0.25rem;
`;
export const SmallLink = styled.a`
  color: var(--muted);
  font-size: 0.9rem;
`;

export const OpenRolesBadge = styled.span`
  padding: 3px 5px;
  background-color: green;
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  margin-left: 8px;
`;
