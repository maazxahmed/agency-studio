import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  variant: "nav" | "footer";
  className?: string;
};

/** Trimmed assets in /public — display height only (width follows aspect ratio). */
const logoConfig = {
  nav: {
    src: "/logo-nav.png",
    width: 4121,
    height: 3117,
    sizeClass: "h-11 w-auto sm:h-12 md:h-14",
    priority: true,
  },
  footer: {
    src: "/logo-footer.png",
    width: 5834,
    height: 1605,
    sizeClass: "h-11 w-auto sm:h-12 md:h-14",
    priority: false,
  },
} as const;

export function SiteLogo({ variant, className = "" }: SiteLogoProps) {
  const { src, width, height, sizeClass, priority } = logoConfig[variant];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-teal)] ${className}`}
      aria-label="Column Bridge home"
    >
      <Image
        src={src}
        alt="Column Bridge"
        width={width}
        height={height}
        className={`block max-w-none object-contain ${sizeClass}`}
        priority={priority}
      />
    </Link>
  );
}
