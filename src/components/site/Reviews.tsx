import { Star } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";
import { extraReviews } from "./site-data";

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="More From Our Authors"
        title="The Book Is The Part That Lasts."
        highlight="So Is The Relationship."
        tone="butter"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {extraReviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1} className="h-full">
            <figure className="border-ink bg-card flex h-full flex-col rounded-3xl border-2 p-6 shadow-[var(--shadow-block-sm)]">
              <div className="flex gap-1" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="fill-gold text-gold h-4 w-4" aria-hidden />
                ))}
              </div>
              <blockquote className="font-display mt-4 flex-1 text-lg leading-snug text-pretty">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="border-ink/15 mt-6 border-t pt-4">
                <span className="block text-sm font-semibold">{r.name}</span>
                <span className="text-muted-foreground block text-xs">{r.title}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
