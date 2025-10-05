import { useState } from "react";

/**
 * Nav component renders the main navigation bar for the portfolio site.
 *
 * Features:
 * - Displays the site brand.
 * - Provides a responsive navigation menu with a hamburger toggle for mobile devices.
 * - Contains navigation links to different sections of the page.
 * - Closes the menu when a navigation link is clicked.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <div className="nav-inner">
        <div className="brand">Jason Shprintz</div>
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="cta" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
