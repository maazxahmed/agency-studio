import { PageHero } from "@/components/sections/PageHero";
import { industrySlugs } from "@/content/site-map";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industry Growth Systems"
        description="Industry-specific digital infrastructure and growth architecture tailored to operational realities and compliance expectations."
      />
      <section className="pb-20">
        <div className="container-site grid gap-4 md:grid-cols-3">
          {industrySlugs.map((slug) => (
            <div key={slug} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 text-sm text-[var(--color-text-muted)]">
              {slug.replaceAll("-", " ")}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
