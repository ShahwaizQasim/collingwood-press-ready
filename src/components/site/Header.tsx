import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BlockButton } from "./primitives";
import { navLinks } from "./site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-cream/95 border-ink/15 border-b backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="border-ink bg-ink text-cream font-display grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 text-lg"
          >
            C
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-base leading-tight font-bold tracking-tight sm:text-lg">
              Collingwood Press
            </span>
            <span className="text-muted-foreground hidden text-[0.65rem] tracking-[0.22em] uppercase sm:block">
              Independent Publishing
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:bg-sand rounded-full px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <BlockButton href="#contact" className="ml-3">
            Start Your Book
          </BlockButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="border-ink bg-card grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-ink/15 bg-cream overflow-hidden border-t lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-sand rounded-xl px-3 py-3 text-base font-medium"
                >
                  {l.label}
                </a>
              ))}
              <BlockButton href="#contact" size="lg" className="mt-2">
                Start Your Book
              </BlockButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
