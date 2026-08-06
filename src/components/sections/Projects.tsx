'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { cn } from '@/lib/utils';

const statusStyles: Record<Project['status'], string> = {
  'In Development': 'bg-accent/15 text-accent border-accent/30',
  Research: 'bg-primary/15 text-primary border-primary/30',
  Prototype: 'bg-primary/15 text-primary border-primary/30',
  Completed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const reduce = useReducedMotion();
  const accentClass = project.accent === 'yellow' ? 'from-accent/20' : 'from-primary/20';
  return (
    <motion.article
      initial={ reduce ? { opacity: 0 } : { opacity: 0, y: 30 } }
      whileInView={ { opacity: 1, y: 0 } }
      viewport={ { once: true, margin: '-80px' } }
      transition={ { duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] } }
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors duration-500 hover:border-accent/40 sm:p-8"
    >
      <div className={ cn('absolute -right-16 -top-16 h-48 w-48 rounded-full bg-linear-to-br to-transparent opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100', accentClass) } />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            { String(index + 1).padStart(2, '0') }
          </span>
          <span className={ cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium', statusStyles[project.status]) }>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            { project.status }
          </span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <div className="relative mt-6">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          { project.title }
        </h3>
        <p className="mt-1.5 font-mono text-sm text-accent">{ project.tagline }</p>
      </div>

      <p className="relative mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        { project.description }
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        { project.technologies.map((t) => (
          <li
            key={ t }
            className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground/70"
          >
            { t }
          </li>
        )) }
      </ul>

      <div className="relative mt-7 flex items-center gap-2 border-t border-border/60 pt-5">
        { project.github && (
          <a
            href={ project.github }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            GitHub
          </a>
        ) }
        { project.demo && (
          <a
            href={ project.demo }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        ) }
      </div>
    </motion.article>
  );
}

export function Projects () {
  return (
    <section id="projects" className="relative py-28 sm:py-36" aria-label="Featured Projects">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-20" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          title="Featured projects"
          description="Each project is a small argument for a larger idea — that careful engineering can make care more human."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          { projects.map((p, i) => (
            <ProjectCard key={ p.slug } project={ p } index={ i } />
          )) }
        </div>
      </div>
    </section>
  );
}
