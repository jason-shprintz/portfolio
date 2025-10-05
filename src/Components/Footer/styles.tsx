import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.02);
  margin-top: 2rem;
`;
export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
