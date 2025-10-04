/**
 * A wrapper component for sections of the portfolio.
 *
 * @param id - The unique identifier for the section, used as the HTML `id` attribute.
 * @param title - The title displayed at the top of the section.
 * @param children - The content to be rendered inside the section.
 *
 * @returns A styled section element containing a title and children.
 */
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
    <section id={id} className="section">
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
