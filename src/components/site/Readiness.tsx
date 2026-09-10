import { BookMarked, Palette, Type, Megaphone } from "lucide-react";

import { BlockButton, Reveal, SectionHeading } from "./primitives";
import { readinessCards } from "./site-data";
import { cn } from "@/lib/utils";

const toneClass: Record<string, string> = {
  mint: "bg-mint",
  sky: "bg-sky",
  butter: "bg-butter",
  blush: "bg-blush",
};

const icons = [BookMarked, Palette, Type, Megaphone];

export function Readiness() {
  return (
    <section id="readiness" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="What We Do"
        title="Your Book Is Ready."
        highlight="But Does It Look Ready?"
        subtitle="Four stages stand between a finished manuscript and a book a reader will pick up. We run all four, or any one of them on its own."
        tone="mint"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {readinessCards.map((card, i) => {
          const Icon = icons[i]!;
          return (
            <Reveal key={card.title} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "border-ink flex h-full flex-col rounded-3xl border-2 p-6 shadow-[var(--shadow-block-sm)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-block)]",
                  toneClass[card.tone],
                )}
              >
                <span
                  aria-hidden
                  className="border-ink bg-cream grid h-12 w-12 place-items-center rounded-2xl border-2"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="border-ink bg-cream/70 mt-5 inline-flex w-fit rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.16em] uppercase">
                  {card.tag}
                </span>
                <h3 className="mt-3 text-xl leading-tight">{card.title}</h3>
                <p className="text-ink/75 mt-3 flex-1 text-sm leading-relaxed text-pretty">
                  {card.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <BlockButton href="#contact" size="lg">
            Talk To A Publishing Advisor
          </BlockButton>
          <BlockButton href="#spotlight" size="lg" variant="ink">
            See The Work First
          </BlockButton>
        </div>
      </Reveal>
    </section>
  );
}
