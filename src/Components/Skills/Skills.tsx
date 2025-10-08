import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import { useEffect, useState } from "react";

/**
 * Stock-ticker style continuous marquee for skills.
 * - Duplicates the items to create a seamless loop.
 * - Pauses animation if the user prefers reduced motion.
 */
function Skills(): JSX.Element {
  const [tickerSkills, setTickerSkills] = useState(skills);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerSkills((prev) => {
        if (prev.length === 0) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="skills" title="Skills">
      <S.Ticker aria-label="Skills ticker" role="region" aria-live="off">
        <S.TickerTrack>
          <S.TickerGroup>
            {tickerSkills.map((s, i) => (
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
