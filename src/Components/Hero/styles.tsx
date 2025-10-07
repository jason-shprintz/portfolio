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
  width: 100%;
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
  min-width: 350px;
  background-image: linear-gradient(
    to right bottom,
    #0b1220,
    #0f182b,
    #141e36,
    #1a2342,
    #21284d,
    #1f284c,
    #1e284a,
    #1c2849,
    #14223a,
    #101b2c,
    #0c141d,
    #05090e
  );
  padding: 1rem;
  border-radius: 12px;
  box-shadow: -1px 1px 2px 1px black;
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
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease,
    transform 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
    outline: none;
  }

  &:active {
    background: rgba(255, 255, 255, 0.16);
    color: white;
    transform: scale(0.97) translateY(1px);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const OpenRolesBadge = styled.span`
  padding: 3px 5px;
  background-image: linear-gradient(
    to right top,
    #057d16,
    #068419,
    #088b1c,
    #0a9320,
    #0b9a23,
    #1f9b24,
    #2b9c25,
    #359d26,
    #439825,
    #4e9326,
    #568e27,
    #5c8929
  );
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  margin-left: 8px;
`;
