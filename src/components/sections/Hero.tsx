'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, FolderGit2 } from 'lucide-react';
import { CircuitBackground } from '@/components/motion/CircuitBackground';
import { MagneticButton } from '@/components/motion/MagneticButton';

export const Hero = () => {
  const reduce = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden"
      aria-label="Introduction"
    >

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40 mask-fade-edges" />
        <CircuitBackground className="absolute inset-0 opacity-[0.55] mask-fade-edges" />
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/0 to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-18 sm:px-8">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 14 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm my-0 mx-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Electronic &amp; Electrical Engineering — Nigeria
          </motion.div>

          <div className="max-w-6xl w-full">
            <motion.p
              initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 16 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] } }
              className="font-mono text-sm md:text-lg font-bold  tracking-wide text-accent text-center"
            >
              Victor Owolabi
            </motion.p>

            <motion.h1
              initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 24 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] } }
              className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl text-center"
            >
              Building intelligent systems at the{ ' ' }
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  intersection
                </span>
                <motion.span
                  initial={ { scaleX: 0 } }
                  animate={ { scaleX: 1 } }
                  transition={ { duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] } }
                  className="absolute -bottom-1 left-0 h-0.75 w-full origin-left rounded-full bg-linear-to-r from-primary to-accent"
                />
              </span>{ ' ' }
              of software, electronics and AI.
            </motion.h1>

            <motion.p
              initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 18 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] } }
              className="mt-6 max-w-8xl w-full text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg text-center"
            >
              An engineering student and frontend developer exploring how AI, IoT,
              robotics and embedded systems can come together to shape the future of technology.
            </motion.p>
          </div>

          <motion.div
            initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 18 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] } }
            className="flex flex-wrap items-center gap-3 my-0 mx-auto"
          >
            <MagneticButton href="#projects" variant="primary">
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </MagneticButton>

            <MagneticButton href="#contact" variant="ghost">
              Contact
              <ArrowDownRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 1, delay: 1.1 } }
          className="mt-12 flex items-center gap-3 text-xs text-muted-foreground/70"
        >
          <span className="font-mono">scroll to explore</span>
          <span className="h-px w-12 bg-linear-to-r from-muted-foreground/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
