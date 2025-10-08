import styled, { keyframes } from "styled-components";

export const spin = keyframes`
    to { transform: rotate(360deg); }
  `;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top: 3px solid #333;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
