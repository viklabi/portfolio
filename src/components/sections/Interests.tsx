'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, Wifi, Bot, Cpu, type LucideIcon } from 'lucide-react';
import { interests } from '@/lib/data';
import { SectionHeading } from '@/components/motion/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Wifi,
  Bot,
  Cpu,
};

export const Interests = () => {
  const reduce = useReducedMotion();
  return (
    <section id="interests" className="relative py-28 sm:py-36" aria-label="Engineering Interests">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          title="What I’m building toward"
          description="Four domains that I don’t treat as separate — I’m most interested in the seams where they meet."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          { interests.map((it, i) => {
            const Icon = iconMap[it.icon] ?? Cpu;
            return (
              <motion.div
                key={ it.title }
                initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 24 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true, margin: '-60px' } }
                transition={ { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-6 transition-colors duration-500 hover:border-accent/40 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      { it.title }
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      { it.description }
                    </p>
                  </div>
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          }) }
        </div>
      </div>
    </section>
  );
}
