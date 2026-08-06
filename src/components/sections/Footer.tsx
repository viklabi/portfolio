'use client';

import { ArrowUp } from 'lucide-react';
import { navLinks, socials } from '@/lib/data';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 py-10" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
                <span className="font-display text-sm font-bold text-accent">V</span>
              </span>
              <span className="font-display text-sm font-medium tracking-tight text-foreground">
                Victor Owolabi
              </span>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Building intelligent systems at the intersection of software, electronics
              and healthcare.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              { navLinks.map((l) => (
                <li key={ l.href }>
                  <a
                    href={ l.href }
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    { l.label }
                  </a>
                </li>
              )) }
            </ul>
          </nav>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              { socials.map((s) => (
                <li key={ s.label }>
                  <a
                    href={ s.href }
                    target={ s.href.startsWith('http') ? '_blank' : undefined }
                    rel={ s.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    { s.label }
                  </a>
                </li>
              )) }
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/70">
            © { year } Victor Owolabi. Designed & built with intent.
          </p>
          <button
            onClick={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
