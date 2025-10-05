import "./App.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import SectionWrapper from "./Components/SectionWrapper";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import type { JSX } from "react";

/**
 * The main application component that renders the portfolio site layout.
 * Includes navigation, hero section, and multiple content sections such as About,
 * Skills, Projects, Experience, and Contact, each wrapped in a `SectionWrapper`.
 * Also renders a footer at the bottom of the page.
 *
 * @returns {JSX.Element} The root JSX element for the portfolio application.
 */
function App(): JSX.Element {
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
