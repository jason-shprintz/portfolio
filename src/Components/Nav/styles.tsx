import styled, { css } from "styled-components";
import { MEDIA_QUERIES } from "../../constants";
import { FlexCol, FlexRow } from "../../shared/styles";

export const NavBar = styled.nav<{ open?: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(6px);
  background: linear-gradient(
    180deg,
    rgba(11, 18, 28, 0.6),
    rgba(11, 18, 28, 0.2)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
`;

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
`;

export const Brand = styled(FlexRow)`
  justify-content: space-between;

  font-weight: 700;
  font-size: 1.05rem;
`;

export const MobileToggle = styled.button<{ open?: boolean }>`
  display: none;
  background: transparent;
  border: 0;
  padding: 0.35rem;
  border-radius: 8px;

  ${MEDIA_QUERIES.mobile} {
    display: inline-flex;
    align-items: center;
  }

  .hamburger {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--muted);
    position: relative;
    transition: background 200ms ease, transform 200ms ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--muted);
    transition: transform 200ms ease, top 200ms ease, opacity 200ms ease;
  }
  .hamburger::before {
    top: -6px;
  }
  .hamburger::after {
    top: 6px;
  }

  ${(p) =>
    p.open &&
    css`
      .hamburger {
        background: transparent;
      }
      .hamburger::before {
        transform: rotate(45deg);
        top: 0;
      }
      .hamburger::after {
        transform: rotate(-45deg);
        top: 0;
      }
    `}
`;

export const NavLinks = styled.ul<{ open?: boolean }>`
  list-style: none;
  display: flex;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  align-items: center;

  ${MEDIA_QUERIES.mobile} {
    position: absolute;
    right: 0;
    top: 64px;
    background: linear-gradient(
      180deg,
      rgba(11, 18, 28, 0.98),
      rgba(11, 18, 28, 0.96)
    );
    border-radius: 10px;
    padding: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    min-width: 160px;
    box-shadow: 0 8px 20px rgba(2, 6, 23, 0.6);
    overflow: hidden;
    max-height: ${(p) => (p.open ? "360px" : "0")};
    opacity: ${(p) => (p.open ? "1" : "0")};
    transform: ${(p) => (p.open ? "translateY(0)" : "translateY(-6px)")};
    transition: max-height 320ms cubic-bezier(0.2, 0.9, 0.2, 1),
      opacity 220ms ease, transform 220ms ease;
  }
`;

export const NavLink = styled.a`
  color: var(--muted);
  &:hover {
    color: var(--accent);
  }
  ${MEDIA_QUERIES.mobile} {
    padding: 0.5rem 0.75rem;
    width: 100%;
  }
`;

export const CtaLink = styled.a`
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  color: white;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  display: inline-block;

  ${MEDIA_QUERIES.mobile} {
    display: block;
    text-align: center;
    width: 100%;
  }
`;

export const NavSocial = styled(FlexCol)`
  height: auto;
  align-items: flex-start;
  margin-right: 25px;
`;

export const NavSocialLink = styled.a`
  margin: 0;
  padding: 0;
`;

export const NavTitleContainer = styled(FlexCol)`
  align-items: flex-start;
`;

export const NavTitle = styled.h1`
  margin: 0;
`;
