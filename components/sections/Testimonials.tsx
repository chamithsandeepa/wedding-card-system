'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  // Duplicate for seamless infinite scroll
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDF8F5 0%, #F4E4E0 50%, #FDF8F5 100%)' }}
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            Happy Couples
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Loved by Couples
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Real stories from real couples who shared their special day with LoveLink.
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F4E4E0, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F4E4E0, transparent)' }} />

        <motion.div
          className="flex gap-6 w-max"
          animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ willChange: 'transform' }}
        >
          {items.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="w-80 shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-white/80"
              role="article"
              aria-label={`Testimonial from ${testimonial.coupleName}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[var(--color-rose)] fill-[var(--color-rose)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-5 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Couple info */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                  }}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                    {testimonial.coupleName}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {testimonial.weddingDate}
                    {testimonial.location ? ` · ${testimonial.location}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
