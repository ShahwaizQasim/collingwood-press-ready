import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { BlockButton, Pill, Reveal } from "./primitives";

const details = [
  { icon: Mail, label: "Email", value: "hello@thecollingwoodpress.com" },
  { icon: Phone, label: "Phone", value: "+44 20 3488 1170" },
  { icon: MapPin, label: "Office", value: "27 Bedford Row, London WC1R 4HE" },
  { icon: Clock3, label: "Hours", value: "Mon–Fri, 9am–6pm GMT" },
];

const fieldClass =
  "w-full rounded-xl border-2 border-ink bg-cream px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="border-ink bg-card h-full rounded-3xl border-2 p-6 shadow-[var(--shadow-block)] sm:p-8">
            <Pill tone="blush">Ready to Publish?</Pill>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              Tell Us About <span className="text-primary italic">Your Book</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A few details is all we need to give you a considered reply within two working days.
            </p>

            <form className="mt-7 space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase">
                    Your name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Jane Ashworth" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="title" className="mb-1.5 block text-xs font-semibold uppercase">
                    Book title
                  </label>
                  <input id="title" name="title" className={fieldClass} placeholder="Working title is fine" />
                </div>
                <div>
                  <label htmlFor="stage" className="mb-1.5 block text-xs font-semibold uppercase">
                    Stage
                  </label>
                  <select id="stage" name="stage" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a stage
                    </option>
                    <option>Still writing</option>
                    <option>First draft complete</option>
                    <option>Fully edited manuscript</option>
                    <option>Already published, needs relaunch</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase">
                  About your book
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={fieldClass}
                  placeholder="Genre, approximate word count, and what you need help with."
                />
              </div>

              <BlockButton type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4" aria-hidden /> Send My Enquiry
              </BlockButton>

              <p aria-live="polite" className="text-primary min-h-5 text-center text-sm font-medium">
                {sent ? "Thank you — your enquiry has been noted. We'll be in touch within two working days." : ""}
              </p>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-ink text-cream h-full rounded-3xl border-2 p-6 shadow-[var(--shadow-block)] sm:p-8">
            <span className="border-cream/40 inline-flex rounded-full border-2 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase">
              Connect With Us
            </span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              We Answer <span className="text-primary italic">Every Message.</span>
            </h2>
            <p className="text-cream/70 mt-3 text-sm leading-relaxed">
              Prefer to talk it through? Call the office and ask for a publishing advisor — no
              switchboard, no queue.
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="border-cream/30 bg-cream/10 grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2"
                  >
                    <d.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-cream/55 block text-[0.6rem] tracking-[0.18em] uppercase">
                      {d.label}
                    </span>
                    <span className="block text-sm font-medium break-words sm:text-base">
                      {d.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-cream/20 mt-8 rounded-2xl border-2 border-dashed p-5">
              <p className="font-display text-lg">Send us your manuscript</p>
              <p className="text-cream/70 mt-2 text-sm leading-relaxed">
                Attach the first three chapters as a Word or PDF file and we&rsquo;ll read them
                before we ever quote you a number.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
