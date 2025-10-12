import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";

/**
 * Stock-ticker style continuous marquee for skills.
 * - Duplicates the items to create a seamless loop.
 * - Pauses animation if the user prefers reduced motion.
 */
function Skills(): JSX.Element {

  return (
    <SectionWrapper id="skills" title="Skills">
      <S.Ticker aria-label="Skills ticker" role="region" aria-live="off">
        <S.TickerTrack>
          <S.TickerGroup>
            {skills.map((s, i) => (
              <S.TickerItem key={`a-${s.alt}-${i}`}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </S.TickerItem>
            ))}
          </S.TickerGroup>
        </S.TickerTrack>
      </S.Ticker>
    </SectionWrapper>
  );
}

export default Skills;
