import type { JSX } from "react";

/**
 * Renders the site footer containing copyright information and a technology stack placeholder.
 *
 * @returns {JSX.Element} The footer element for the website.
 */
function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Jason Shprintz</div>
        <div className="muted small">Placeholder: Built with React + Vite</div>
      </div>
    </footer>
  );
}

export default Footer;
