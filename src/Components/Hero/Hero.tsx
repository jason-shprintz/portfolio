import { type JSX } from "react";
import * as S from "./styles";
import * as SharedS from "../../shared/styles";
import { DEVICE_TYPES } from "../../constants";
import useDeviceType from "../../hooks/useDeviceType";

/**
 * Renders the hero section of the portfolio site, introducing Jason Shprintz.
 *
 * Displays the developer's name, role, a brief description, and call-to-action buttons.
 * Includes an avatar image, meta information, and a link to download the resume.
 *
 * @returns {JSX.Element} The hero section component.
 */
function Hero(): JSX.Element {
  const isTablet: boolean = useDeviceType() === DEVICE_TYPES.tablet;
  const isMobile: boolean = useDeviceType() === DEVICE_TYPES.mobile;
  const isTorM: boolean = isTablet || isMobile;

  return (
    <S.Hero id="home">
      <S.HeroInner>
        {!isTorM && (
          <S.HeroCard>
            <SharedS.AvatarWrapper>
              <SharedS.Avatar
                src={"assets/images/headshot_cropped.png"}
                alt="Jason Shprintz headshot"
              />
            </SharedS.AvatarWrapper>
            <S.HeroMeta>
              <S.MetaName>Jason Shprintz</S.MetaName>
              <S.MetaRole>Software Developer</S.MetaRole>
              <S.SmallLink
                href="assets/documents/Jason_Shprintz_Resume.pdf"
                download
              >
                Download Resume
              </S.SmallLink>
            </S.HeroMeta>
          </S.HeroCard>
        )}
        <S.HeroCopy>
          {isTorM && (
            <>
              <S.HeroTitle>Jason Shprintz</S.HeroTitle>
              <SharedS.Subtitle>Software Developer</SharedS.Subtitle>
            </>
          )}
          <S.Lead>
            I build production-grade applications with a focus on performance,
            clarity, and user experience.
          </S.Lead>
          <S.OpenRolesBadge>Currently open to new roles!</S.OpenRolesBadge>
        </S.HeroCopy>
      </S.HeroInner>
    </S.Hero>
  );
}

export default Hero;
