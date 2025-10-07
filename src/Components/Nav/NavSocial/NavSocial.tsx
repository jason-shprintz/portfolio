import * as S from "../styles";
import * as NavS from "./styles";
import { RiFilePaper2Line } from "react-icons/ri";

interface INavSocialProps {
  isTorM: boolean;
}

const NavSocial: React.FC<INavSocialProps> = ({ isTorM }) => {
  return (
    <S.NavSocial>
      <S.NavSocialLink href="https://www.linkedin.com/in/jasonshprintz/">
        <img
          src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
          alt="LinkedIn"
        />
      </S.NavSocialLink>
      <S.NavSocialLink href="https://github.com/jason-shprintz">
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
