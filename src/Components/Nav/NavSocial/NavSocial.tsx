import { LINKS } from "../../../constants";
import styles from "../Nav.module.css";
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
    <div className={styles.navSocial}>
      <a href={LINKS.linkedin} className={styles.navSocialLink}>
        <img
          src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
          alt="LinkedIn"
        />
      </a>
      <a href={LINKS.github} className={styles.navSocialLink}>
        <img
          src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
          alt="GitHub"
        />
      </a>
      {isTorM && (
        <a
          href="assets/documents/Jason_Shprintz_Resume.pdf"
          download
          className={styles.navSocialResumeLink}
        >
          <RiFilePaper2Line />
          &nbsp; Resume
        </a>
      )}
    </div>
  );
};
export default NavSocial;
