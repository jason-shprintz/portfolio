import { useState } from "react";
import "./App.css";

type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    name: "Project Atlas",
    description:
      "A full-stack platform for managing developer portfolios, with fast search and deploy workflows.",
    tech: ["TypeScript", "React", "Node", "Postgres"],
    link: "#",
  },
  {
    id: "p2",
    name: "Realtime Chat",
    description:
      "Scalable WebSocket chat with presence, rooms and moderation tools.",
    tech: ["React", "WebSocket", "Redis"],
    link: "#",
  },
  {
    id: "p3",
    name: "Design System",
    description:
      "A component library and token system used across multiple products.",
    tech: ["React", "Storybook", "CSS Modules"],
    link: "#",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">Jason Shprintz</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact" className="cta">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
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

function SectionWrapper({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "Postgres",
    "Docker",
    "AWS",
  ];
  return (
    <div className="skills-grid">
      {skills.map((s) => (
        <span key={s} className="skill">
          {s}
        </span>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.id} className="card project">
          <h3>{p.name}</h3>
          <p className="muted">{p.description}</p>
          <div className="tech">
            {p.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="card-actions">
            <a href={p.link} className="button ghost">
              View
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div className="experience-list">
      <article className="exp-item">
        <div className="exp-left">
          <strong>Acme Co.</strong>
          <div className="muted">Senior Engineer · 2021 — Present</div>
        </div>
        <div className="exp-right">
          Led a team building internal tools and customer-facing web apps.
          Improved performance and cut deployment times by 40%.
        </div>
      </article>
      <article className="exp-item">
        <div className="exp-left">
          <strong>Widget Labs</strong>
          <div className="muted">Software Engineer · 2018 — 2021</div>
        </div>
        <div className="exp-right">
          Built scalable APIs and integrations used by 100k+ end users.
        </div>
      </article>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jason@example.com";
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop (clipboard may be unavailable)
    }
  }

  return (
    <div className="contact-grid">
      <div className="contact-card">
        <h3>Get in touch</h3>
        <p className="muted">
          I'm currently open to full-time and contract roles. Placeholder
          contact info below.
        </p>
        <div className="contact-row">
          <a className="button primary" href={`mailto:${email}`}>
            Email me
          </a>
          <button
            className="button"
            onClick={copyEmail}
            aria-label="Copy email"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
        <p className="small muted">
          Or connect on <a href="#">LinkedIn</a> · <a href="#">GitHub</a>
        </p>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input placeholder="Your name" />
        </label>
        <label>
          Email
          <input placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Quick message" />
        </label>
        <div className="form-actions">
          <button className="button primary" type="submit">
            Send (placeholder)
          </button>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Jason Shprintz</div>
        <div className="muted small">Placeholder: Built with React + Vite</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Hero />
        <SectionWrapper id="about" title="About">
          <p className="muted">
            I am a software engineer who enjoys solving hard problems with
            pragmatic, well-tested solutions. I care about building delightful
            developer experiences and reliable systems.
          </p>
          <p>
            Placeholder: 6+ years experience across full-stack web development.
            Comfortable leading teams and shipping end-to-end features.
          </p>
        </SectionWrapper>

        <SectionWrapper id="skills" title="Skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects" title="Selected projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="experience" title="Experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="contact" title="Contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
