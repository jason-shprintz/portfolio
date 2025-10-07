import styled from "styled-components";
import { FlexRow } from "../../shared/styles";

export const ContactCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
`;

export const ContactRow = styled(FlexRow)`
  justify-content: space-evenly;
`;
