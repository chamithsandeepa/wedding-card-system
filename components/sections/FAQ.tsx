'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FAQ_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-24 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            FAQ
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Common Questions
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Everything you need to know about LoveLink digital invitations.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                className={cn(
                  'rounded-2xl border transition-colors duration-200 overflow-hidden',
                  isOpen
                    ? 'border-[var(--color-rose)]/40 bg-[var(--color-ivory)]'
                    : 'border-[var(--color-blush)] bg-white hover:border-[var(--color-rose)]/25'
                )}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span
                    className={cn(
                      'text-base font-medium transition-colors duration-200',
                      isOpen ? 'text-[var(--color-rose)]' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-rose)]'
                    )}
                  >
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300',
                      isOpen
                        ? 'bg-[var(--color-rose)] text-white rotate-0'
                        : 'bg-[var(--color-blush)] text-[var(--color-muted)]'
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-[var(--color-rose)]/10 mb-4" />
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
