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

export const Avatar = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const Subtitle = styled.p`
  color: var(--muted);
  padding-right: 5px;
  margin: 0;
`;

// Avatar gradient colors
const avatarGradientColors = [
  "#646cff",
  "#0091ff",
  "#00adff",
  "#00c5ff",
  "#61dafb",
];

// Open Roles Badge gradient colors
const openBadgeGradientColors = [
  "#057d16",
  "#068419",
  "#088b1c",
  "#0a9320",
  "#0b9a23",
  "#1f9b24",
  "#2b9c25",
  "#359d26",
  "#439825",
  "#4e9326",
  "#568e27",
  "#5c8929",
];

const gradientDirections = [
  "to top",
  "to top right",
  "to right",
  "to bottom right",
  "to bottom",
  "to bottom left",
  "to left",
  "to top left",
  "to top",
];

// Gradient helper function
const getGradient = (direction: string, colors: string[]) =>
  `linear-gradient(${direction}, ${colors.join(", ")})`;

export const OpenRolesBadge = styled.a`
  padding: 3px 5px;
  background-image: ${getGradient("to top", openBadgeGradientColors)};
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  margin-left: 8px;
  cursor: pointer;
`;

// Avatar styles
const avatarKeyframes = gradientDirections
  .map((direction, i) => {
    const percent = Math.round((i / (gradientDirections.length - 1)) * 100);
    return `
      ${percent}% {
        background-image: ${getGradient(direction, avatarGradientColors)};
      }
    `;
  })
  .join("\n");

export const AvatarWrapper = styled(FlexCol)`
  width: 140px;
  height: 152px;
  border-radius: 10px;
  background-image: ${getGradient("to top", avatarGradientColors)};
  animation: avatarGradientShift 2s ease-in-out infinite;

  @keyframes avatarGradientShift {
    ${avatarKeyframes}
  }

  ${MEDIA_QUERIES.desktop} {
    width: 180px;
  }
`;
