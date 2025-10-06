import styled from "styled-components";

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ContactCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.6rem;
`;

export const ContactForm = styled.form``;
export const ContactLabel = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  color: var(--muted);
`;
export const ContactInput = styled.input`
  width: 100%;
  padding: 0.55rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: transparent;
  color: inherit;
`;
export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 0.55rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: transparent;
  color: inherit;
`;
