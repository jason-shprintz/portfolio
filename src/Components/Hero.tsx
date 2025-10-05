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
          <p className="subtitle">
            Software developer — building reliable, maintainable web apps
          </p>
          <p className="lead">
            I build production-grade applications with a focus on performance,
            clarity, and developer experience. Currently open to new roles.
            Placeholder resume and contact details are below.
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
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#646cff" />
                <stop offset="1" stopColor="#61dafb" />
              </linearGradient>
            </defs>
            <rect width="120" height="120" rx="18" fill="#0f1724" />
            <g transform="translate(10,28)">
              <circle cx="50" cy="22" r="18" fill="url(#g)" opacity="0.18" />
              <circle
                cx="50"
                cy="22"
                r="16"
                fill="#111827"
                stroke="url(#g)"
                strokeWidth="2"
              />
              <rect
                x="10"
                y="58"
                width="80"
                height="10"
                rx="4"
                fill="#0b1220"
              />
              <rect x="10" y="72" width="60" height="6" rx="3" fill="#0b1220" />
            </g>
          </svg>
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
