import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const base =
  "group relative inline-flex items-center justify-center overflow-visible text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--border-accent)] bg-white/[0.01] text-[var(--text-primary)] shadow-[0_0_0_0_rgba(3,181,167,0)] hover:-translate-y-0.5 hover:shadow-[var(--glow-cta)] active:translate-y-0",
  secondary:
    "border border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] hover:border-white/30 hover:text-[var(--text-primary)] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-transparent px-4 py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]",
};

const padding: Record<ButtonVariant, string> = {
  primary: "px-8 py-3.5",
  secondary: "px-7 py-3",
  ghost: "px-4 py-2",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variantStyles[variant]} ${padding[variant]}`}
    >
      <span className="relative z-10 inline-block">{children}</span>
    </Link>
  );
}
