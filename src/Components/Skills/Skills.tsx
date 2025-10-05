import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";

/**
 * Stock-ticker style continuous marquee for skills.
 * - Duplicates the items to create a seamless loop.
 * - Pauses animation if the user prefers reduced motion.
 */
function Skills(): JSX.Element {
  return (
    <S.Ticker aria-label="Skills ticker" role="marquee">
      <S.TickerTrack>
        <S.TickerGroup>
          {skills.map((s, i) => (
            <S.TickerItem key={`a-${s.alt}-${i}`}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </S.TickerItem>
          ))}
        </S.TickerGroup>

        <S.TickerGroup aria-hidden="true">
          {skills.map((s, i) => (
            <S.TickerItem key={`b-${s.alt}-${i}`}>
              <img src={s.src} alt="" loading="lazy" />
            </S.TickerItem>
          ))}
        </S.TickerGroup>
      </S.TickerTrack>
    </S.Ticker>
  );
}

export default Skills;
