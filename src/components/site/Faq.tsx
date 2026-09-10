import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal, SectionHeading } from "./primitives";
import { faqs } from "./site-data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand/60 border-ink/15 border-y">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything authors ask us before they sign, answered plainly."
          tone="cream"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 4) * 0.05}>
                <div className="border-ink bg-card overflow-hidden rounded-2xl border-2 shadow-[var(--shadow-block-sm)]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="hover:bg-sand/50 flex w-full items-center gap-4 px-5 py-4 text-left transition-colors"
                    >
                      <span className="font-display min-w-0 flex-1 text-base font-bold text-pretty sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "border-ink grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition-transform duration-300",
                          isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-butter",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="panel"
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground px-5 pb-5 text-sm leading-relaxed text-pretty sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
