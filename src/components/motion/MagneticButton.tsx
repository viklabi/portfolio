'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MagneticButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
  strength?: number;
  external?: boolean;
};

export const MagneticButton = ({
  children,
  href,
  variant = 'primary',
  className,
  strength = 0.35,
  external = false,
}: MagneticButtonProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }
  const reset = () => {
    x.set(0);
    y.set(0);
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';
  const variants = {
    primary:
      'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_0_1px_hsl(var(--accent)/0.3),0_8px_30px_-12px_hsl(var(--accent)/0.5)]',
    ghost: 'text-foreground/80 hover:text-foreground hover:bg-secondary/60 border-[3px] border-border/80 hover:border-accent/60 backdrop-blur-sm',
    outline:
      'border border-border bg-card/40 text-foreground/90 hover:border-accent/60 hover:text-foreground backdrop-blur-sm',
  } as const;

  return (
    <motion.a
      ref={ ref }
      href={ href }
      onMouseMove={ handleMove }
      onMouseLeave={ reset }
      style={ { x: sx, y: sy } }
      className={ cn(base, variants[variant], className) }
      { ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    >
      <span className="relative z-10 inline-flex items-center gap-2">{ children }</span>
    </motion.a>
  );
}