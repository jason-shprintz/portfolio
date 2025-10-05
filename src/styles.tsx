import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b1220;
    --card: #08101a;
    --muted: #9aa4b2;
    --accent: #646cff;
    --accent-2: #61dafb;
    --glass: rgba(255,255,255,0.02);
  }

  /* animations */
  @keyframes fadeUp { from { opacity:0; transform: translateY(8px)} to { opacity:1; transform: translateY(0)} }
  @keyframes menuIn { from { opacity:0; transform: translateY(-6px)} to { opacity:1; transform: translateY(0)} }

  html, body, #root { height: 100%; }
  body { margin:0; font-family: system-ui, Avenir, Helvetica, Arial, sans-serif; line-height:1.5; background: var(--bg); color: rgba(255,255,255,0.87); -webkit-font-smoothing:antialiased }
  a { color: var(--accent); text-decoration: none }
  a:hover { color: #535bf2 }
`;

export const AppRoot = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Button = styled.a<{
  asButton?: boolean;
  variant?: "primary" | "ghost";
}>`
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: transparent;
  color: inherit;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  ${(p) =>
    p.variant === "primary" &&
    `background: linear-gradient(90deg, var(--accent), var(--accent-2)); color: #061226; border: none;`}
  ${(p) =>
    p.variant === "ghost" &&
    `background: transparent; border: 1px solid rgba(255,255,255,0.04);`}
  &:active {
    transform: translateY(1px);
  }
  @media (max-width: 720px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const CardActions = styled.div`
  margin-top: 0.6rem;
  display: flex;
  gap: 0.5rem;
`;

export const FormActions = styled.div`
  margin-top: 0.8rem;
`;

export const Muted = styled.p`
  color: var(--muted);
  margin-top: 0.35rem;
`;

export const SmallMuted = styled.small`
  color: var(--muted);
  font-size: 0.9rem;
`;
