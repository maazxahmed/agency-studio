import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { solutionSlugs } from "@/content/site-map";

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!solutionSlugs.includes(slug)) notFound();

  return (
    <PageHero
      title={slug.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
      description="Structured service page scaffolding with trust, outcomes, deliverables, objections, proof, FAQs, and conversion CTA."
    />
  );
}
