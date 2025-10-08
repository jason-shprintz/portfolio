import styled, { createGlobalStyle } from "styled-components";
import { MEDIA_QUERIES } from "./constants";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b1220;
    --card: #05090e;
    --muted: #9aa4b2;
    --accent: #646cff;
    --accent-2: #61dafb;
    --glass: rgba(255,255,255,0.02);
  }

  /* animations */
  @keyframes fadeUp { from { opacity:0; transform: translateY(8px)} to { opacity:1; transform: translateY(0)} }
  @keyframes menuIn { from { opacity:0; transform: translateY(-6px)} to { opacity:1; transform: translateY(0)} }

  html, body, #root { height: 100%; width: 100%;}
  body { margin:0; font-family: Tomorrow, system-ui, Avenir, Helvetica, Arial, sans-serif; line-height:1.5; background: var(--bg); color: rgba(255,255,255,0.87); -webkit-font-smoothing:antialiased }
  a { color: var(--accent); text-decoration: none; user-select: none; }
  a:hover { color: #535bf2 }
`;

export const AppRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #0b1220;
  user-select: none;
`;

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #0b1220;
  box-sizing: border-box;
  font-size: 1.5rem;

  ${MEDIA_QUERIES.desktop} {
    font-size: 2rem;
  }
`;

export const Button = styled.a<{
  variant?: "primary" | "ghost";
}>`
  width: 100px;
  display: inline-block;
  padding: 0.2rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: transparent;
  color: inherit;
  text-decoration: none;
  text-align: center;
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
  font-size: 1.1rem;
  margin: 0;
`;

export const SmallMuted = styled.small`
  color: var(--muted);
  font-size: 0.9rem;
`;
