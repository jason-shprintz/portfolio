import styled from "styled-components";

export const Ticker = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 0.5rem 0;
`;

export const TickerTrack = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  will-change: transform;
  animation: ticker 2s ease-in-out infinite;

  @keyframes ticker {
    from {
      transform: translateX(-115px);
    }
    to {
      transform: translateX(-230px);
    }
  }
`;

export const TickerItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  img {
    height: 25px;
    width: 100px;
    display: block;
  }
`;

export const TickerGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
