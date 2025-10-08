import { LINKS } from "../../../constants";
import * as S from "../styles";
import * as NavS from "./styles";
import { RiFilePaper2Line } from "react-icons/ri";

interface INavSocialProps {
  isTorM: boolean;
}

/**
 * Renders a set of social media links (LinkedIn, GitHub) as icons, and optionally a resume download link.
 *
 * @param props - Component props.
 * @param props.isTorM - If true, displays the resume download link.
 *
 * @returns The navigation social links component.
 */
const NavSocial: React.FC<INavSocialProps> = ({ isTorM }) => {
  return (
    <S.NavSocial>
      <S.NavSocialLink href={LINKS.linkedin}>
        <img
          src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
          alt="LinkedIn"
        />
      </S.NavSocialLink>
      <S.NavSocialLink href={LINKS.github}>
        <img
          src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
          alt="GitHub"
        />
      </S.NavSocialLink>
      {isTorM && (
        <NavS.NavSocialResumeLink
          href="assets/documents/Jason_Shprintz_Resume.pdf"
          download
        >
          <RiFilePaper2Line />
          &nbsp; Resume
        </NavS.NavSocialResumeLink>
      )}
    </S.NavSocial>
  );
};
export default NavSocial;
