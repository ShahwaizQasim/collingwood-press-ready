import { ArrowRight, Clock } from "lucide-react";

import { BlockButton, Pill, Reveal } from "./primitives";

export function CtaBanner() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:pb-24">
      <Reveal>
        <div className="paper border-ink mx-auto max-w-5xl rounded-[2.5rem] border-2 px-6 py-14 text-center shadow-[var(--shadow-block)] sm:px-12">
          <Pill tone="ink">
            <Clock className="h-3.5 w-3.5" aria-hidden /> Limited Autumn Intake
          </Pill>
          <h2 className="mt-6 text-3xl leading-[1.08] text-balance sm:text-4xl lg:text-5xl">
            Your Story&rsquo;s First Chapter <span className="text-primary italic">Starts Here.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
            Send us your manuscript and we&rsquo;ll come back within two working days with an honest
            read, a fixed written quote and a dated schedule. No obligation, no sales script.
          </p>

          <ul className="text-muted-foreground mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <li>Free manuscript assessment</li>
            <li aria-hidden>·</li>
            <li>Fixed written quote</li>
            <li aria-hidden>·</li>
            <li>You keep 100% of your rights</li>
          </ul>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <BlockButton href="#contact" size="lg">
              Claim Your Free Publishing Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </BlockButton>
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            Places are limited so every author gets a dedicated project manager.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
