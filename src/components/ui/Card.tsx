type CardProps = {
  title: string;
  body: string;
};

export function Card({ title, body }: CardProps) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{body}</p>
    </article>
  );
}
