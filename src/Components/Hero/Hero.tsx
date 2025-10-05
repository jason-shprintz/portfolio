import type { JSX } from "react";
import * as S from "./styles";
import { Button } from "../../styles";

/**
 * Renders the Hero section of the portfolio site, including the user's name, subtitle,
 * lead description, call-to-action buttons, and a stylized avatar card with meta information.
 *
 * @returns {JSX.Element} The Hero header component.
 */
function Hero(): JSX.Element {
  return (
    <S.Hero id="home">
      <S.HeroInner>
        <S.HeroCopy>
          <S.HeroTitle>Jason Shprintz</S.HeroTitle>
          <S.Subtitle>
            Software developer — building reliable, maintainable web apps
          </S.Subtitle>
          <S.Lead>
            I build production-grade applications with a focus on performance,
            clarity, and developer experience. Currently open to new roles.
            Placeholder resume and contact details are below.
          </S.Lead>
          <S.HeroCtas>
            {/* <Button variant="primary" href="#projects">
              See projects
            </Button> */}
            <Button href="#contact">Contact me</Button>
          </S.HeroCtas>
        </S.HeroCopy>
        <S.HeroCard>
          <S.AvatarWrapper>
            <S.Avatar
              src={"src/assets/headshot_cropped.png"}
              alt="Jason Shprintz headshot"
            />
          </S.AvatarWrapper>
          <S.HeroMeta>
            <S.MetaName>Jason Shprintz</S.MetaName>
            <S.MetaRole>Senior Software Engineer</S.MetaRole>
            <S.SmallLink href="/resume.pdf" download>
              Download resume
            </S.SmallLink>
          </S.HeroMeta>
        </S.HeroCard>
      </S.HeroInner>
    </S.Hero>
  );
}

export default Hero;
