import { type JSX } from "react";
import * as S from "./styles";
import * as SharedS from "../../shared/styles";
import { Button } from "../../styles";
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

  return (
    <S.Hero id="home">
      <S.HeroInner>
        {!isTablet && (
          <S.HeroCard>
            <SharedS.AvatarWrapper>
              <SharedS.Avatar
                src={"src/assets/headshot_cropped.png"}
                alt="Jason Shprintz headshot"
              />
            </SharedS.AvatarWrapper>
            <S.HeroMeta>
              <S.MetaName>Jason Shprintz</S.MetaName>
              <S.MetaRole>Senior Software Engineer</S.MetaRole>
              <S.SmallLink
                href="src/assets/doc/Jason_Shprintz_Resume.pdf"
                download
              >
                Download resume
              </S.SmallLink>
            </S.HeroMeta>
          </S.HeroCard>
        )}
        <S.HeroCopy>
          {isTablet && (
            <>
              <S.HeroTitle>Jason Shprintz</S.HeroTitle>
              <SharedS.Subtitle>
                Software Developer — Building Reliable, Maintainable Web Apps
              </SharedS.Subtitle>
            </>
          )}
          <S.Lead>
            I build production-grade applications with a focus on performance,
            clarity, and developer experience.&nbsp;
          </S.Lead>
          <S.OpenRolesBadge>Currently open to new roles!</S.OpenRolesBadge>
          {isMobile && (
            <S.HeroCtas>
              {/* <Button variant="primary" href="#projects">
              See projects
            </Button> */}
              <Button href="#contact">Contact me</Button>
            </S.HeroCtas>
          )}
        </S.HeroCopy>
      </S.HeroInner>
    </S.Hero>
  );
}

export default Hero;
