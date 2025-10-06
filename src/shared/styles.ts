import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;
export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const AvatarWrapper = styled(FlexCol)`
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

export const Subtitle = styled.p`
  color: var(--muted);
  margin-top: 0.2rem;
`;
