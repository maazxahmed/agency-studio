import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { industrySlugs } from "@/content/site-map";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!industrySlugs.includes(slug)) notFound();

  return (
    <PageHero
      title={`${slug.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())} Systems`}
      description="Industry page framework with pain points, messaging, proof, linked services, and consultation-ready CTA flow."
    />
  );
}
