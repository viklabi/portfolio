'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, MapPin, Target } from 'lucide-react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. Technology, Electronic & Electrical Engineering' },
  { icon: MapPin, label: 'Location', value: 'Nigeria' },
  { icon: Target, label: 'Focus', value: 'AI · IoT · Robotics · Embedded Systems' },
];

export const About = () => {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative py-28 sm:py-36" aria-label="About">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          title="Engineering with intent"
          description="I’m an Electronic & Electrical Engineering student at Obafemi Awolowo University and a frontend developer. I care about the space where rigorous hardware meets thoughtful software — and where both can serve human health."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 sm:p-9">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <p className="relative text-pretty text-lg leading-relaxed text-foreground/90">
                  My vision is to build{ ' ' }
                  <span className="text-accent">intelligent healthcare technologies</span>{ ' ' }
                  — systems that sense, interpret and act on the world using AI, IoT,
                  robotics and embedded systems.
                </p>
                <p className="relative mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
                  I move between the bench and the browser: soldering and flashing
                  microcontrollers one day, designing interfaces and motion systems the
                  next. That range is the point — the best healthcare tools will be built
                  by people who understand both the signal and the person reading it.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <ul className="flex flex-col gap-3">
              { facts.map((f, i) => (
                <motion.li
                  key={ f.label }
                  initial={ reduce ? { opacity: 0 } : { opacity: 0, x: 20 } }
                  whileInView={ { opacity: 1, x: 0 } }
                  viewport={ { once: true, margin: '-60px' } }
                  transition={ { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card/30 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      { f.label }
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{ f.value }</p>
                  </div>
                </motion.li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
