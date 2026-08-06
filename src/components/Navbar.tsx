'use client';

import * as React from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar () {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  function handleNav (href: string) {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.header
      initial={ { y: -80, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={ cn(
          'mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8',
          scrolled
            ? 'mt-3 rounded-full border border-border/60 bg-background/70 py-2.5 backdrop-blur-xl'
            : 'mt-0 border border-transparent py-4'
        ) }
      >
        <button
          onClick={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
          className="group flex items-center gap-2.5 focus-visible:outline-none"
          aria-label="Back to top"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
            <span className="font-display text-sm font-bold text-accent">V</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
          </span>
          <span className="font-display text-sm font-medium tracking-tight text-foreground">
            Victor Owolabi
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          { navLinks.map((l) => (
            <button
              key={ l.href }
              onClick={ () => handleNav(l.href) }
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              { l.label }
            </button>
          )) }
        </nav>

        <a
          href="#contact"
          onClick={ (e) => {
            e.preventDefault();
            handleNav('#contact');
          } }
          className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={ () => setOpen((v) => !v) }
          aria-label={ open ? 'Close menu' : 'Open menu' }
          aria-expanded={ open }
        >
          { open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" /> }
        </button>
      </div>

      <AnimatePresence>
        { open && (
          <motion.nav
            initial={ { opacity: 0, y: -10 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: -10 } }
            transition={ { duration: 0.25 } }
            className="mx-3 mt-2 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col">
              { navLinks.map((l) => (
                <li key={ l.href }>
                  <button
                    onClick={ () => handleNav(l.href) }
                    className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    { l.label }
                  </button>
                </li>
              )) }
            </ul>
          </motion.nav>
        ) }
      </AnimatePresence>
    </motion.header>
  );
}