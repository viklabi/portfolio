'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { MagneticButton } from '@/components/motion/MagneticButton';

const EMAIL = 'owolabivictor333@gmail.com';

export const Contact = () => {
  const reduce = useReducedMotion();
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="relative py-28" aria-label="Contact">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          title="Let’s build something"
          description="I’m open to collaboration, research opportunities and conversations about engineering at the edge of healthcare. The best way to reach me is email."
          align="center"
        />

        <motion.div
          initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, margin: '-60px' } }
          transition={ { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
          className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-6"
        >
          <a
            href={ `mailto:${EMAIL}` }
            className="group inline-flex items-center flex-col sm:flex-row gap-3 rounded-2xl border border-border bg-card/40 px-6 py-4 transition-colors hover:border-accent/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Mail className="h-5 w-5" />
            </span>
            <span className="font-mono text-sm text-foreground/90 transition-colors group-hover:text-foreground sm:text-base">
              { EMAIL }
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={ `mailto:${EMAIL}` } variant="primary">
              Send a message
            </MagneticButton>
            <button
              onClick={ copyEmail }
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Copy email address"
            >
              { copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy email
                </>
              ) }
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
