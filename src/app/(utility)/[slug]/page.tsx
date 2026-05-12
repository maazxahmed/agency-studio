import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { utilitySlugs } from "@/content/site-map";

export function generateStaticParams() {
  return utilitySlugs.map((slug) => ({ slug }));
}

export default async function UtilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!utilitySlugs.includes(slug)) notFound();

  return (
    <PageHero
      title={slug.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
      description="Utility and compliance page scaffold with accessible typography and clear information hierarchy."
    />
  );
}
