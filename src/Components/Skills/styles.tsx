import styled from "styled-components";

export const Ticker = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 0.5rem 0;
`;

export const TickerTrack = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  will-change: transform;
  animation: ticker 18s linear infinite;

  @keyframes ticker {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

export const TickerItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  img {
    height: 28px;
    width: auto;
    display: block;
  }
`;

export const TickerGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

// Back-compat small helpers
export const SkillsGrid = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Skill = styled.span`
  background: var(--glass);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
`;
