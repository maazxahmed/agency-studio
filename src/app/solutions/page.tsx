import { SlideIn } from "@/components/motion/SlideIn";
import { PageHero } from "@/components/sections/PageHero";
import { solutionSlugs } from "@/content/site-map";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Solutions Architecture"
        description="Outcome-led solutions that align revenue growth, customer experience, product execution, and operational scale."
      />
      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="right">
          <div className="container-site grid gap-4 md:grid-cols-3">
            {solutionSlugs.map((slug) => (
              <div key={slug} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 text-sm text-[var(--color-text-muted)]">
                {slug.replaceAll("-", " ")}
              </div>
            ))}
          </div>
        </SlideIn>
      </section>
    </>
  );
}
