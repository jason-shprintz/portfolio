/**
 * A wrapper component for sections of the portfolio.
 *
 * @param id - The unique identifier for the section, used as the HTML `id` attribute.
 * @param title - The title displayed at the top of the section.
 * @param children - The content to be rendered inside the section.
 *
 * @returns A styled section element containing a title and children.
 */
import * as S from "./styles";

function SectionWrapper({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <S.Section id={id}>
      <div className="section-inner">
        <S.SectionTitle>{title}</S.SectionTitle>
        {children}
      </div>
    </S.Section>
  );
}

export default SectionWrapper;
