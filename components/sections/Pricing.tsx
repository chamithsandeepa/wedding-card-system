'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING_TIERS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { getWhatsAppUrl } from '@/lib/utils';

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="py-24 bg-[var(--color-ivory)]" aria-label="Pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            Pricing
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Choose the package that suits your celebration. No hidden fees, ever.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={cn(
                'relative rounded-3xl p-8 flex flex-col',
                tier.highlighted
                  ? 'bg-[var(--color-charcoal)] text-white border-2 border-[var(--color-rose)] shadow-2xl shadow-[var(--color-rose)]/20 md:-mt-4'
                  : 'bg-white border border-[var(--color-blush)] shadow-sm'
              )}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="rose" className="text-xs px-4 py-1.5 shadow-md">
                    ✦ {tier.badge}
                  </Badge>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-6">
                <h3
                  className={cn(
                    'text-2xl italic mb-1',
                    tier.highlighted ? 'text-[var(--color-rose)]' : 'text-[var(--color-charcoal)]'
                  )}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-3">
                  <span
                    className={cn(
                      'text-3xl font-bold',
                      tier.highlighted ? 'text-white' : 'text-[var(--color-charcoal)]'
                    )}
                  >
                    {tier.price}
                  </span>
                </div>
                {tier.priceNote && (
                  <p
                    className={cn(
                      'text-xs mt-1',
                      tier.highlighted ? 'text-white/50' : 'text-[var(--color-muted)]'
                    )}
                  >
                    {tier.priceNote}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div
                className={cn(
                  'h-px mb-6',
                  tier.highlighted ? 'bg-white/10' : 'bg-[var(--color-blush)]'
                )}
              />

              {/* Features list */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => {
                  const isBoolean = typeof feature.value === 'boolean';
                  const isTrue = feature.value === true;
                  const isString = typeof feature.value === 'string';
                  return (
                    <li key={feature.label} className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                          isTrue || isString
                            ? 'bg-[var(--color-rose)]/15'
                            : tier.highlighted
                            ? 'bg-white/10'
                            : 'bg-[var(--color-blush)]'
                        )}
                      >
                        {isBoolean ? (
                          isTrue ? (
                            <Check size={11} className="text-[var(--color-rose)]" />
                          ) : (
                            <X
                              size={11}
                              className={tier.highlighted ? 'text-white/30' : 'text-[var(--color-muted)]/40'}
                            />
                          )
                        ) : (
                          <Check size={11} className="text-[var(--color-rose)]" />
                        )}
                      </div>
                      <span
                        className={cn(
                          'text-sm',
                          !isTrue && isBoolean
                            ? tier.highlighted
                              ? 'text-white/30'
                              : 'text-[var(--color-muted)]/40'
                            : tier.highlighted
                            ? 'text-white/80'
                            : 'text-[var(--color-charcoal)]'
                        )}
                      >
                        <span className="font-medium">{feature.label}:</span>{' '}
                        {isBoolean ? (isTrue ? 'Included' : 'Not included') : String(feature.value)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Button
                href={getWhatsAppUrl(SITE_CONFIG.whatsappNumber, tier.whatsappMessage)}
                variant={tier.highlighted ? 'primary' : 'outline'}
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center"
                aria-label={`Order ${tier.name} package on WhatsApp`}
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
