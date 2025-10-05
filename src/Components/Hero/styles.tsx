import styled from "styled-components";

export const Hero = styled.header`
  padding: 2.4rem 0;
`;

export const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.4rem;
  align-items: center;
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div``;
export const HeroTitle = styled.h1`
  margin: 0 0 0.2rem 0;
  font-size: 2.2rem;
  @media (max-width: 720px) {
    font-size: 1.6rem;
    animation: fadeUp 560ms ease both;
  }
`;
export const Subtitle = styled.p`
  color: var(--muted);
  margin-top: 0.2rem;
`;
export const Lead = styled.p`
  margin-top: 1rem;
  color: var(--muted);
`;
export const HeroCtas = styled.div`
  margin-top: 1.15rem;
  display: flex;
  gap: 0.6rem;
  @media (max-width: 720px) {
    flex-direction: column;
  }
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
  @media (max-width: 720px) {
    width: 100%;
    display: block;
    text-align: center;
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
  @media (max-width: 720px) {
    justify-content: flex-start;
    animation: fadeUp 680ms ease both;
    animation-delay: 90ms;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 83px;
  height: 91px;
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    #646cff,
    #0091ff,
    #00adff,
    #00c5ff,
    #61dafb
  );
`;

export const Avatar = styled.img`
  height: 86px;
  border-radius: 10px;
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
