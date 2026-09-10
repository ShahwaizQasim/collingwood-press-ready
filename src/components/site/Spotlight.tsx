import spotlight from "@/assets/cover-spotlight.jpg";
import { BlockButton, Pill, Reveal } from "./primitives";

const meta = [
  { label: "Author", value: "Daniel Rayne" },
  { label: "Genre", value: "Literary Thriller" },
  { label: "Format", value: "Hardback · Paperback · eBook" },
  { label: "Published", value: "March 2026" },
];

export function Spotlight() {
  return (
    <section id="spotlight" className="bg-sand/60 border-ink/15 border-y">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="border-ink bg-ink absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2" />
            <img
              src={spotlight}
              alt="Cover design for A Shepherd's Wolf At Last by Daniel Rayne"
              loading="lazy"
              width={704}
              height={1056}
              className="border-ink relative h-auto w-full rounded-3xl border-2"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Pill tone="butter">Cover Design Spotlight</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl leading-[1.08] text-balance sm:text-4xl lg:text-[2.75rem]">
              A Shepherd&rsquo;s Wolf <span className="text-primary italic">At Last</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
              Daniel came to us with a finished thriller and a cover that made it look like a hiking
              guide. Our design team read the manuscript end to end, then built a treatment around
              its single quietest image — a wolf watching a valley it can never return to. The
              typography was drawn to sit heavy on a shop shelf and still read at thumbnail size on
              a retail listing.
            </p>
          </Reveal>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {meta.map((m, i) => (
              <Reveal key={m.label} delay={0.12 + i * 0.05}>
                <div className="border-ink bg-card rounded-2xl border-2 px-4 py-3">
                  <dt className="text-muted-foreground text-[0.6rem] tracking-[0.18em] uppercase">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{m.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.3}>
            <div className="mt-8">
              <BlockButton href="#contact" size="lg" variant="ink">
                Request A Cover Consultation
              </BlockButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
