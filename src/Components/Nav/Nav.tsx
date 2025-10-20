import { useState, useRef, useEffect, type JSX } from "react";
import * as S from "./styles";
import * as SharedS from "../../shared/styles";
import useDeviceType from "../../hooks/useDeviceType";
import { DEVICE_TYPES } from "../../constants";
import NavSocial from "./NavSocial/NavSocial";

/**
 * Navigation bar component for the portfolio site.
 *
 * - Displays brand, social links, and navigation links.
 * - Supports mobile menu toggle with accessible keyboard navigation.
 * - Focus is trapped within the menu when open, and returns to the previously focused element when closed.
 * - Handles Escape key to close the menu and Tab/Shift+Tab for focus cycling.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Nav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const isTablet: boolean = useDeviceType() === DEVICE_TYPES.tablet;
  const isMobile: boolean = useDeviceType() === DEVICE_TYPES.mobile;
  const isTorM: boolean = isTablet || isMobile;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && open && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      document.addEventListener("keydown", onKey);
      // focus first link in nav
      setTimeout(() => {
        const first = navRef.current?.querySelector<HTMLElement>("a, button");
        first?.focus();
      }, 0);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      if (!open && previouslyFocused.current) previouslyFocused.current.focus();
    };
  }, [open]);

  return (
    <S.NavBar ref={navRef}>
      <S.NavInner>
        <S.Brand>
          {!isTorM && <NavSocial isTorM={isTorM} />}
          {isTorM ? (
            <SharedS.AvatarWrapper>
              <SharedS.Avatar
                src={"assets/images/headshot_cropped.jpg"}
                alt="Jason Shprintz headshot"
              />
            </SharedS.AvatarWrapper>
          ) : (
            <S.NavTitleContainer>
              <S.NavTitle>Jason Shprintz</S.NavTitle>
              <SharedS.Subtitle>Software Developer</SharedS.Subtitle>
            </S.NavTitleContainer>
          )}
          {isTorM && <NavSocial isTorM={isTorM} />}
        </S.Brand>

        <S.MobileToggle
          onClick={() => setOpen((s) => !s)}
          open={open}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="hamburger" />
        </S.MobileToggle>
        <S.NavLinks open={open}>
          <li>
            <S.NavLink href="#about" onClick={() => setOpen(false)}>
              About
            </S.NavLink>
          </li>
          <li>
            <S.NavLink href="#skills" onClick={() => setOpen(false)}>
              Skills
            </S.NavLink>
          </li>
          {/* <li>
            <S.NavLink href="#projects" onClick={() => setOpen(false)}>
              Projects
            </S.NavLink>
          </li> */}
          <li>
            <S.NavLink href="#experience" onClick={() => setOpen(false)}>
              Experience
            </S.NavLink>
          </li>
          <li>
            <S.CtaLink href="#contact" onClick={() => setOpen(false)}>
              Contact
            </S.CtaLink>
          </li>
        </S.NavLinks>
      </S.NavInner>
    </S.NavBar>
  );
}

export default Nav;
