import type { JSX } from "react";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import TextType from "./Components/TextType";

/**
 * Renders the About section of the portfolio, including a personal story about the developer's passion for programming
 * and a summary of their professional experience in web development and quality assurance.
 *
 * @component
 * @returns {JSX.Element} The rendered About section.
 */
const About = (): JSX.Element => {
  return (
    <SectionWrapper id="about" title="About">
      <TextType
        text={`My passion for programming was sparked when I was in high school. I created a game called “Perfect Pump” on the TI-83+ calculator. The game had a number displayed in currency, and the goal was to press a button and stop it perfectly on $20. The game was simple, but everyone really enjoyed it, and I vividly remember loving the feeling of making a program that everyone else used. I went on to take courses in C++ and Java, but didn’t pursue it as a career until much later in life. 
        
With over 3 years of professional web development experience and over 6 years of quality assurance experience, I am uniquely qualified with both knowledge of the latest tech and a keen eye for detail.`}
        typingSpeed={25}
        pauseDuration={1000000000}
        showCursor={true}
        cursorCharacter="|"
        startOnVisible={true}
        deletingSpeed={15}
      />
    </SectionWrapper>
  );
};

export default About;
