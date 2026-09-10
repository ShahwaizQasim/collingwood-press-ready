import { motion, useReducedMotion } from "motion/react";
import { BookOpen, PenLine, Star } from "lucide-react";

import heroBooks from "@/assets/hero-books.jpg";
import { BlockButton, Pill } from "./primitives";
import { platforms } from "./site-data";

const points = [
  "Editing, design, typesetting and distribution under one roof",
  "One named project manager from first call to finished book",
  "You keep your rights, your royalties and every source file",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="paper relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Pill tone="blush">
              <Star className="h-3.5 w-3.5" aria-hidden /> Trusted by authors since 2009
            </Pill>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
          >
            You Wrote <span className="text-primary italic">&lsquo;The Book.&rsquo;</span>
            <span className="mt-2 block">Collingwood Press Gets It Shelf-Ready.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
          >
            A finished manuscript is not a finished book. We handle the editing, the cover, the
            typesetting and the distribution — so the thing you spent years writing arrives in the
            world looking like it deserves to be there.
          </motion.p>

          <ul className="mt-7 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.18 + i * 0.07 }}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <span
                  aria-hidden
                  className="border-ink bg-butter mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 text-[0.6rem] font-bold"
                >
                  ✓
                </span>
                <span className="min-w-0">{p}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <BlockButton href="#contact" size="lg">
              <PenLine className="h-4 w-4" aria-hidden /> Get Your Free Quote
            </BlockButton>
            <BlockButton href="#showcase" size="lg" variant="outline">
              <BookOpen className="h-4 w-4" aria-hidden /> See Our Published Books
            </BlockButton>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="border-ink bg-card rounded-[2rem] border-2 p-3 shadow-[var(--shadow-block)]">
            <img
              src={heroBooks}
              alt="Five hardcover novels published by Collingwood Press displayed in a fan"
              width={1200}
              height={912}
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
          <div className="border-ink bg-butter absolute -bottom-5 -left-3 hidden rounded-2xl border-2 px-4 py-3 shadow-[var(--shadow-block-sm)] sm:block">
            <p className="font-display text-2xl leading-none font-bold">1,400+</p>
            <p className="text-[0.65rem] tracking-[0.16em] uppercase">Titles published</p>
          </div>
        </motion.div>
      </div>

      <div className="border-ink/15 border-y bg-cream/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between">
          <p className="text-muted-foreground text-center text-xs tracking-[0.2em] uppercase lg:text-left">
            Distributed &amp; listed with
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {platforms.map((p) => (
              <li
                key={p}
                className="border-ink bg-card font-display rounded-xl border-2 px-5 py-2 text-sm font-bold tracking-tight shadow-[var(--shadow-block-sm)] sm:text-base"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
