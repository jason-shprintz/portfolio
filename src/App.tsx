import { lazy, Suspense } from "react";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import type { JSX } from "react";
import { GlobalStyle, AppContainer, AppRoot } from "../src/styles";
import Loading from "./shared/Components/Loading/Loading";
import useDeviceType from "./hooks/useDeviceType";

// Lazy load components that are below the fold
const About = lazy(() => import("./Components/About/About"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
// const Projects = lazy(() => import("./Components/Projects/Projects"));

/**
 * The main application component that renders the portfolio site layout.
 * Includes navigation, hero section, and multiple content sections such as About,
 * Skills, Projects, Experience, and Contact, each wrapped in a `SectionWrapper`.
 * Also renders a footer at the bottom of the page.
 *
 * @returns {JSX.Element} The root JSX element for the portfolio application.
 */
function App(): JSX.Element {
  const isLoaded: boolean = useDeviceType() !== null;

  if (!isLoaded) {
    return (
      <AppRoot>
        <AppContainer>
          <GlobalStyle />
          <Loading />
        </AppContainer>
      </AppRoot>
    );
  }

  return (
    <AppRoot>
      <AppContainer>
        <GlobalStyle />
        <Nav />
        <main>
          <Hero />
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Skills />
          </Suspense>
          {/* <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense> */}
          <Suspense fallback={<Loading />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </AppContainer>
    </AppRoot>
  );
}

export default App;
