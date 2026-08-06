'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export const SectionHeading = ({
  index,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) => {
  const reduce = useReducedMotion();
  return (
    <div
      className={ cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      ) }
    >
      <motion.div
        initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 12 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true, margin: '-60px' } }
        transition={ { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
        className="flex items-center gap-3"
      >
        <span className="font-mono text-xs tracking-widest text-accent">{ index }</span>
        <span className="h-px w-8 bg-linear-to-r from-accent/60 to-transparent" />
      </motion.div>
      <motion.h2
        initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 18 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true, margin: '-60px' } }
        transition={ { duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] } }
        className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        { title }
      </motion.h2>
      { description && (
        <motion.p
          initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 14 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, margin: '-60px' } }
          transition={ { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] } }
          className={ cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto'
          ) }
        >
          { description }
        </motion.p>
      ) }
    </div>
  );
}