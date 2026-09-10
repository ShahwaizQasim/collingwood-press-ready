import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "butter" | "mint" | "blush" | "sky" | "ink";
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream text-ink",
    butter: "bg-butter text-ink",
    mint: "bg-mint text-ink",
    blush: "bg-blush text-ink",
    sky: "bg-sky text-ink",
    ink: "bg-ink text-cream",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  tone = "butter",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "cream" | "butter" | "mint" | "blush" | "sky" | "ink";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <Reveal>
          <Pill tone={tone}>{eyebrow}</Pill>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.9rem]">
          {title}
          {highlight ? <span className="text-primary italic"> {highlight}</span> : null}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-muted-foreground mt-4 text-base leading-relaxed text-pretty sm:text-lg",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ink" | "outline";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
};

export function BlockButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink hover:-translate-y-0.5 active:translate-y-0";
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground shadow-[var(--shadow-block-sm)] hover:shadow-[var(--shadow-block)]",
    ink: "bg-ink text-cream shadow-[var(--shadow-block-sm)] hover:shadow-[var(--shadow-block)]",
    outline: "bg-card text-ink hover:bg-sand",
  };
  const sizes: Record<string, string> = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
