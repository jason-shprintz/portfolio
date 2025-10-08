import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../constants";

export const Section = styled.section`
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
export const SectionTitle = styled.h2`
  margin: 0 0 1rem 0;

  ${MEDIA_QUERIES.desktop} {
    font-size: 2rem;
  }
`;
