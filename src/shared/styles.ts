import styled from "styled-components";
import { MEDIA_QUERIES } from "../constants";

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
  width: 140px;
  height: 152px;
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    #646cff,
    #0091ff,
    #00adff,
    #00c5ff,
    #61dafb
  );

  ${MEDIA_QUERIES.desktop} {
    width: 180px;
  }
`;

export const Avatar = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const Subtitle = styled.p`
  color: var(--muted);
  padding-right: 5px;
  margin: 0;
`;
