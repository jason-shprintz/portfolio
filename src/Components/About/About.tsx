import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import * as S from "./styles";

const About = () => {
  return (
    <SectionWrapper id="about" title="About">
      <S.Description>
        My passion for programming was sparked when I was in high school. I
        created a game called “Perfect Pump” on the TI-83+ calculator. The game
        had a number displayed in currency, and the goal was to press a button
        and stop it perfectly on $20. The game was simple, but everyone really
        enjoyed it, and I vividly remember loving the feeling of making a
        program that everyone else used. I went on to take courses in C++ and
        Java, but didn’t pursue it as a career until much later in life.
      </S.Description>
      <S.Description>
        With over 3 years of professional web development experience and over 6
        years of quality assurance experience, I am uniquely qualified with
        knowledge of the latest tech and a keen eye for detail.
      </S.Description>
    </SectionWrapper>
  );
};

export default About;
