import { ShieldCheck } from "lucide-react";

import { BlockButton, Reveal } from "./primitives";

const paragraphs = [
  "Search for a publisher and you will be told, within thirty seconds, that your book is a bestseller waiting to happen. You will be offered packages named after precious metals. You will be quoted a number that changes twice before you sign.",
  "We don't work that way. Every quote is itemised and fixed in writing before any work starts. Every project has one named manager whose direct line you get on day one. Every file we produce is yours to take anywhere.",
  "And if we don't think your manuscript is ready — or if we don't think spending this money is the right decision for you right now — we will tell you that instead of taking it.",
];

export function Promises() {
  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <Reveal>
          <span
            aria-hidden
            className="border-cream/30 bg-cream/10 mx-auto grid h-14 w-14 place-items-center rounded-2xl border-2"
          >
            <ShieldCheck className="h-7 w-7" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]">
            The Internet Is Full Of Promises.
            <span className="text-primary italic"> Not All Of Them Are Real.</span>
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5">
          {paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.06}>
              <p className="text-cream/75 mx-auto max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <BlockButton href="#contact" size="lg" variant="primary" className="border-cream">
              Discover How We Publish With Purpose
            </BlockButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
