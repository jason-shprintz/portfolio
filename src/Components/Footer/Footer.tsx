import type { JSX } from "react";
import * as S from "./styles";
import { SmallMuted } from "../../styles";
import { LINKS } from "../../constants";

/**
 * Renders the footer section of the website.
 * Displays the current year and the author's name.
 *
 * @returns {JSX.Element} The footer component.
 */
function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.FooterInner>
        <div>© {new Date().getFullYear()} Jason Shprintz</div>
        <SmallMuted>
          <a href={LINKS.linkedin}>
            <img
              src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
              alt="LinkedIn"
            />
          </a>
          &nbsp;
          <a href={LINKS.github}>
            <img
              src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
              alt="GitHub"
            />
          </a>
        </SmallMuted>
      </S.FooterInner>
    </S.Footer>
  );
}

export default Footer;
