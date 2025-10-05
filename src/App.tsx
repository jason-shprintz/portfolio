import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import SectionWrapper from "./Components/SectionWrapper/SectionWrapper";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import type { JSX } from "react";
import { GlobalStyle, AppRoot } from "../src/styles";

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
    <AppRoot>
      <GlobalStyle />
      <Nav />
      <main>
        <Hero />
        <SectionWrapper id="about" title="About">
          <p className="muted">
            My passion for programming was sparked when I was in high school. I
            created a game called “Perfect Pump” on the TI-83+ calculator. The
            game had a number displayed in currency, and the goal was to press a
            button and stop it perfectly on $20. The game was simple, but
            everyone really enjoyed it, and I vividly remember loving the
            feeling of making a program that everyone else used. I went on to
            take courses in C++ and Java, but didn’t pursue it as a career until
            much later in life.
          </p>
          <p>
            With over 3 years of professional web development experience and
            over 6 years of quality assurance experience, I am uniquely
            qualified with knowledge of the latest tech and a keen eye for
            detail.
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
    </AppRoot>
  );
}

export default App;
