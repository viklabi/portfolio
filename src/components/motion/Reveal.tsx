'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import * as React from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'li' | 'span';
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = 'div',
}: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={ className }
      initial={ reduce ? { opacity: 0 } : { opacity: 0, y } }
      whileInView={ reduce ? { opacity: 1 } : { opacity: 1, y: 0 } }
      viewport={ { once, margin: '-80px' } }
      transition={ { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
    >
      { children }
    </Comp>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};