'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Palette, Share2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

const ICONS = { FileText, Palette, Share2 };

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-ivory)]" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            The Process
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Simple, Beautiful, Fast
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            From your details to a shareable link — we handle everything in between.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Dashed connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-14 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-[var(--color-rose)]/25"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-0">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center text-center px-6 relative"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Step number */}
                  <div
                    className="text-[4.5rem] font-bold leading-none mb-3 select-none"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-rose)',
                      opacity: 0.15,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div className="relative -mt-10 mb-5 w-16 h-16 rounded-2xl bg-[var(--color-rose)]/10 border border-[var(--color-rose)]/20 flex items-center justify-center shadow-sm">
                    <Icon size={26} className="text-[var(--color-rose)]" />
                  </div>

                  <h3
                    className="text-xl font-semibold text-[var(--color-charcoal)] mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
