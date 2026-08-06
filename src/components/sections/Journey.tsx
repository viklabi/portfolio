'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { journey, type JourneyEntry } from '@/lib/data';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { cn } from '@/lib/utils';

const tagStyles: Record<JourneyEntry['tag'], string> = {
  Education: 'text-primary',
  Project: 'text-accent',
  Milestone: 'text-emerald-400',
};

export const Journey = () => {
  const reduce = useReducedMotion();
  return (
    <section id="journey" className="relative py-28 sm:py-36" aria-label="Journey Timeline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          title="The path so far"
          description="Not a résumé — a direction. Where I’ve been, what I’m doing now, and where I’m headed."
        />

        <div className="mt-14 relative">
          {/* Vertical line */ }
          <div className="absolute left-3 top-2 bottom-2 w-px bg-linear-to-b from-primary/50 via-border to-accent/50 sm:left-4" />

          <ul className="space-y-8">
            { journey.map((entry, i) => (
              <motion.li
                key={ entry.title }
                initial={ reduce ? { opacity: 0 } : { opacity: 0, x: -20 } }
                whileInView={ { opacity: 1, x: 0 } }
                viewport={ { once: true, margin: '-60px' } }
                transition={ { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:left-0.5">
                  <span className="absolute h-6 w-6 rounded-full bg-accent/20 animate-pulse-soft" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
                </span>

                <div className="group rounded-2xl border border-border bg-card/30 p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className={ cn('font-mono text-xs uppercase tracking-widest', tagStyles[entry.tag]) }>
                      { entry.tag }
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="font-mono text-xs text-muted-foreground">{ entry.period }</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    { entry.title }
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">{ entry.org }</p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    { entry.description }
                  </p>
                </div>
              </motion.li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  );
}