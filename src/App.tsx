import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
// import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import type { JSX } from "react";
import { GlobalStyle, AppContainer, AppRoot } from "../src/styles";
import About from "./Components/About/About";

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
      <AppContainer>
        <GlobalStyle />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <Projects /> */}
          <Experience />
          <Contact />
        </main>
        <Footer />
      </AppContainer>
    </AppRoot>
  );
}

export default App;
