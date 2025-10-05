import type { JSX } from "react";

/**
 * Renders the Hero section of the portfolio site, including the user's name, subtitle,
 * lead description, call-to-action buttons, and a stylized avatar card with meta information.
 *
 * @returns {JSX.Element} The Hero header component.
 */
function Hero(): JSX.Element {
  return (
    <header className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Jason Shprintz</h1>
          <p className="subtitle">Software Developer</p>
          <p className="lead">
            I build high-fidelity production-grade applications with a focus on
            reusable components and performance.
          </p>
          <div className="hero-ctas">
            <a className="button primary" href="#projects">
              See projects
            </a>
            <a className="button" href="#contact">
              Contact me
            </a>
          </div>
        </div>
        <div className="hero-card">
          <svg
            className="avatar"
            viewBox="0 0 120 120"
            xmlns="src/assets/SDS_Headshots_JasonS-3.jpg"
            role="img"
          ></svg>
          <div className="hero-meta">
            <div className="meta-name">Jason Shprintz</div>
            <div className="meta-role">Senior Software Engineer</div>
            <a className="small-link" href="/resume.pdf" download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
