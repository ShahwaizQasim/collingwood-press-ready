import { Mail } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";
import { team } from "./site-data";
import { cn } from "@/lib/utils";

const toneClass: Record<string, string> = {
  sky: "bg-sky",
  butter: "bg-butter",
  mint: "bg-mint",
};

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="The People You'll Speak To"
        title="Meet The"
        highlight="Project Managers"
        subtitle="You get one of them for the life of your project. Not a shared inbox, not a rotating queue."
        tone="sky"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {team.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.1} className="h-full">
            <article className="border-ink bg-card flex h-full flex-col rounded-3xl border-2 p-6 text-center shadow-[var(--shadow-block-sm)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-block)]">
              <span
                aria-hidden
                className={cn(
                  "border-ink font-display mx-auto grid h-20 w-20 place-items-center rounded-full border-2 text-2xl font-bold",
                  toneClass[person.tone],
                )}
              >
                {person.initials}
              </span>
              <h3 className="mt-5 text-xl">{person.name}</h3>
              <p className="text-primary mt-1 text-xs font-semibold tracking-[0.16em] uppercase">
                {person.role}
              </p>
              <p className="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed text-pretty">
                {person.bio}
              </p>
              <a
                href="#contact"
                className="border-ink hover:bg-sand mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden /> Ask for {person.name.split(" ")[0]}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
