import { Button } from "@/components/ui/Button";
import { SlideIn } from "@/components/motion/SlideIn";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-black py-section">
      <SlideIn className="w-full" direction="up">
        <div className="container-site">
          <h1 className="text-balance text-4xl font-semibold text-[var(--color-text)] md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-[var(--color-text-muted)]">{description}</p>
          <div className="mt-8 flex gap-3">
            <Button href="/book-strategy-call">Book a Strategy Call</Button>
            <Button href="/request-proposal" variant="secondary">
              Request Proposal
            </Button>
          </div>
        </div>
      </SlideIn>
    </section>
  );
}
