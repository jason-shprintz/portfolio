import type { JSX } from "react";

/**
 * Renders the site footer containing copyright information and a technology stack placeholder.
 *
 * @returns {JSX.Element} The footer element for the website.
 */
import * as S from "./styles";

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
