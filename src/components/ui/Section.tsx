type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="bg-black py-section">
      <div className="container-site">
        {eyebrow ? (
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
