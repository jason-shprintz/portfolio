import { useState, useRef, useEffect, type JSX } from "react";
import styles from "./Nav.module.css";
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
    <nav ref={navRef} className={styles.navBar} aria-label="Main navigation">
      <div className={styles.navInner}>
        <div className={styles.brand}>
          {!isTorM && <NavSocial isTorM={isTorM} />}
          {isTorM ? (
            <div className={styles.avatarWrapper}>
              <img
                src={"assets/images/headshot_cropped.jpg"}
                alt="Jason Shprintz headshot"
                className={styles.avatar}
              />
            </div>
          ) : (
            <div className={styles.navTitleContainer}>
              <h1 className={styles.navTitle}>Jason Shprintz</h1>
              <p className={styles.subtitle}>Software Developer</p>
            </div>
          )}
          {isTorM && <NavSocial isTorM={isTorM} />}
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
          />
        </button>
        <ul
          className={`${styles.navLinks} ${open ? styles.navLinksOpen : ""}`}
        >
          <li>
            <a
              href="#about"
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
          </li>
          {/* <li>
            <a
              href="#projects"
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li> */}
          <li>
            <a
              href="#experience"
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.ctaLink}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
