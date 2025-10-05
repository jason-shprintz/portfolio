import type { JSX } from "react";
import * as S from "./styles";

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
      </S.FooterInner>
    </S.Footer>
  );
}

export default Footer;
