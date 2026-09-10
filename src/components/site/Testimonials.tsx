import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

import { Reveal, SectionHeading } from "./primitives";
import { testimonials } from "./site-data";
import { cn } from "@/lib/utils";

const toneClass: Record<string, string> = {
  butter: "bg-butter",
  mint: "bg-mint",
  blush: "bg-blush",
  sky: "bg-sky",
};

function Card({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure
      className={cn(
        "border-ink flex h-full flex-col rounded-3xl border-2 p-6 shadow-[var(--shadow-block-sm)]",
        toneClass[item.tone],
      )}
    >
      <Quote className="text-ink/40 h-7 w-7" aria-hidden />
      <blockquote className="font-display mt-4 flex-1 text-lg leading-snug text-pretty">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="border-ink/20 mt-6 flex items-center gap-3 border-t pt-4">
        <span
          aria-hidden
          className="border-ink bg-cream font-display grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 text-sm font-bold"
        >
          {item.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">{item.name}</span>
          <span className="text-ink/70 block truncate text-xs">{item.title}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Author Stories"
        title="Why Authors Trust Us With Their"
        highlight="&lsquo;Life&rsquo;s Work&rsquo;"
        subtitle="Because we treat a manuscript the way its author does — carefully, and on a schedule we actually keep."
        tone="blush"
      />

      <Reveal className="mt-12 hidden gap-6 lg:grid lg:grid-cols-4">
        {testimonials.map((t) => (
          <Card key={t.name} item={t} />
        ))}
      </Reveal>

      <div className="mt-10 lg:hidden">
        <div className="relative min-h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Card item={testimonials[index]!} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="border-ink bg-card grid h-11 w-11 place-items-center rounded-full border-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}: ${t.name}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "border-ink h-3 w-3 rounded-full border-2 transition-colors",
                  i === index ? "bg-primary" : "bg-transparent",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="border-ink bg-card grid h-11 w-11 place-items-center rounded-full border-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
