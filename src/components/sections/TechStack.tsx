'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { techStack } from '@/lib/data';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { cn } from '@/lib/utils';

const categoryStyles: Record<string, string> = {
  Frontend: 'border-primary/30 text-primary',
  Programming: 'border-accent/30 text-accent',
  Hardware: 'border-emerald-500/30 text-emerald-400',
  Tooling: 'border-violet-400/30 text-violet-300',
};

export const TechStack = () => {
  const reduce = useReducedMotion();
  const categories = Array.from(new Set(techStack.map((s) => s.category)));

  return (
    <section id="stack" className="relative py-28 sm:py-36" aria-label="Tech Stack">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          title="The tools I reach for"
          description="A short, honest list — the technologies I actually build with, across software and hardware."
        />

        <div className="mt-14 space-y-10">
          { categories.map((cat, ci) => (
            <div key={ cat }>
              <div className="mb-4 flex items-center gap-3">
                <span className={ cn('rounded-full border px-2.5 py-0.5 font-mono text-xs', categoryStyles[cat]) }>
                  { cat }
                </span>
                <span className="h-px flex-1 bg-border/60" />
              </div>
              <ul className="flex flex-wrap gap-3">
                { techStack
                  .filter((s) => s.category === cat)
                  .map((s, i) => (
                    <motion.li
                      key={ s.name }
                      initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 16 } }
                      whileInView={ { opacity: 1, y: 0 } }
                      viewport={ { once: true, margin: '-50px' } }
                      transition={ { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } }
                      className="group relative overflow-hidden rounded-xl border border-border bg-card/40 px-5 py-3.5 transition-colors duration-300 hover:border-accent/50"
                    >
                      <span className="font-display text-base font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                        { s.name }
                      </span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-linear-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    </motion.li>
                  )) }
              </ul>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}