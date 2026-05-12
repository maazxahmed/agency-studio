import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const base =
  "relative inline-flex -skew-x-[11deg] items-center justify-center overflow-visible text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-white/15 bg-gradient-to-br from-[#ebe4ff] via-[var(--color-primary)] to-[#a78bfa] text-[#140a22] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_1px_2px_rgba(0,0,0,0.35)] hover:border-white/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_32px_rgba(208,188,255,0.22)] active:scale-[0.99]",
  secondary:
    "border border-white/18 bg-white/[0.04] text-[var(--color-text)] backdrop-blur-sm hover:border-white/28 hover:bg-white/[0.08] hover:text-[var(--color-text)] active:scale-[0.99]",
  ghost:
    "border border-transparent px-4 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]",
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
      <span className="relative z-10 inline-block skew-x-[11deg]">{children}</span>
    </Link>
  );
}
