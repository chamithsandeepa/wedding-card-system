'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ClipboardList, Music2, Timer, Images, QrCode, MessageCircle
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FEATURES } from '@/lib/constants';

const ICONS = { ClipboardList, Music2, Timer, Images, QrCode, MessageCircle };

export function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" className="py-24 bg-white" aria-label="Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            What's Included
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Everything Your Guests Will Love
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Every invitation is packed with features that delight and engage your guests.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={feature.id}
                className="group p-6 rounded-2xl border border-[var(--color-blush)] bg-[var(--color-ivory)] transition-all duration-300 hover:border-[var(--color-rose)]/40 hover:shadow-[0_0_28px_0_rgba(201,169,110,0.12)] hover:-translate-y-1 cursor-default"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-rose)]/10 border border-[var(--color-rose)]/15 flex items-center justify-center mb-4 group-hover:bg-[var(--color-rose)]/15 transition-colors duration-300">
                  <Icon size={22} className="text-[var(--color-rose)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
