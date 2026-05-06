'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { INVITATION_STYLES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Music2, Heart } from 'lucide-react';

// Classic invitation card content
function ClassicCard() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between py-6 px-4 text-center"
      style={{ background: 'linear-gradient(160deg, #1B2A4A 0%, #243660 100%)', color: '#F0E6C8' }}
    >
      <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">— Together Forever —</div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-px bg-[#C9A96E] opacity-60" />
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontStyle: 'italic', color: '#C9A96E' }}>
          Nimal
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontStyle: 'italic', color: '#F0E6C8' }}>
          &amp;
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontStyle: 'italic', color: '#C9A96E' }}>
          Kumari
        </div>
        <div className="w-12 h-px bg-[#C9A96E] opacity-60" />
        <div className="text-[9px] tracking-widest uppercase opacity-60 mt-1">Request your presence</div>
        <div className="text-[10px] mt-1" style={{ color: '#C9A96E' }}>14 February 2026</div>
        <div className="text-[9px] opacity-50">Grand Ballroom, Colombo</div>
      </div>
      <CountdownTimer targetDate="2026-02-14" className="text-[#F0E6C8]" />
    </div>
  );
}

// Floral invitation card content
function FloralCard() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between py-5 px-4 text-center relative overflow-hidden"
      style={{ background: '#FDF8F5', color: '#5A3A4A' }}
    >
      {/* Decorative floral corners */}
      {['top-0 left-0', 'top-0 right-0 scale-x-[-1]', 'bottom-0 left-0 scale-y-[-1]', 'bottom-0 right-0 scale-[-1]'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-14 h-14 opacity-30`} aria-hidden="true">
          <svg viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="10" r="8" fill="#D4829A" opacity="0.5" />
            <circle cx="25" cy="8" r="5" fill="#E8A0B4" opacity="0.4" />
            <circle cx="10" cy="25" r="5" fill="#D4829A" opacity="0.4" />
            <path d="M5 5 Q20 2 18 18 Q5 20 5 5" fill="#8A9E85" opacity="0.3" />
          </svg>
        </div>
      ))}
      <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: '#D4829A' }}>
        — With joy —
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="text-[9px] tracking-wider opacity-60 uppercase">The wedding of</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontStyle: 'italic', color: '#5A3A4A' }}>
          Rajan
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#D4829A' }}>❧</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontStyle: 'italic', color: '#5A3A4A' }}>
          Priya
        </div>
        <div className="mt-2 text-[10px]" style={{ color: '#D4829A' }}>22 March 2026</div>
        <div className="text-[9px] opacity-50">Rose Garden, Kandy</div>
        <button className="mt-3 text-[9px] px-4 py-1.5 rounded-full font-medium text-white" style={{ background: '#D4829A' }}>
          RSVP Now
        </button>
      </div>
      <div className="flex items-center gap-1 text-[9px] opacity-40">
        <Music2 size={8} /> <span>Playing: Perfect — Ed Sheeran</span>
      </div>
    </div>
  );
}

// Minimal invitation card content
function MinimalCard() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between py-6 px-5 text-center"
      style={{ background: '#F9F7F4', color: '#2C2C2C' }}
    >
      <div className="w-full flex flex-col items-center gap-1">
        <div className="w-8 h-px bg-[#2C2C2C] opacity-30" />
        <div className="text-[8px] tracking-[0.4em] uppercase opacity-40 mt-1">You are invited</div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300 }}>
          Kasun
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-[#2C2C2C] opacity-15" />
          <Heart size={12} className="text-[#8A9E85]" />
          <div className="flex-1 h-px bg-[#2C2C2C] opacity-15" />
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300 }}>
          Thilini
        </div>
        <div className="mt-4 space-y-1">
          <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: '#8A9E85' }}>
            07 · 06 · 2026
          </div>
          <div className="text-[9px] opacity-40">Grand Hotel, Matara</div>
        </div>
        <button className="mt-2 text-[9px] px-5 py-1.5 border border-[#2C2C2C]/20 rounded-full tracking-widest uppercase hover:bg-[#2C2C2C] hover:text-white transition-colors">
          RSVP
        </button>
      </div>
      <CountdownTimer targetDate="2026-06-07" className="text-[#2C2C2C]" />
    </div>
  );
}

const CARD_CONTENT = [ClassicCard, FloralCard, MinimalCard];

export function DemoShowcase() {
  const [activeStyle, setActiveStyle] = useState(1); // default to floral (middle)
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="demo" className="py-24 bg-white" aria-label="Demo showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            Live Previews
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            See It in Action
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Browse our invitation styles — each crafted to tell your story beautifully.
          </p>
        </AnimatedSection>

        {/* Style switcher pills */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center gap-2 mb-14 flex-wrap">
            {INVITATION_STYLES.map((style, i) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(i)}
                aria-label={`View ${style.name} style`}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeStyle === i
                    ? 'bg-[var(--color-rose)] text-white shadow-md shadow-[var(--color-rose)]/30'
                    : 'bg-[var(--color-blush)] text-[var(--color-muted)] hover:bg-[var(--color-rose)]/10'
                )}
              >
                {style.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Phone mockups */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8">
          {INVITATION_STYLES.map((style, i) => {
            const CardContent = CARD_CONTENT[i];
            const isActive = activeStyle === i;
            const offset = i === 0 ? 'md:mb-8' : i === 2 ? 'md:mb-8' : '';
            return (
              <motion.div
                key={style.id}
                className={cn('flex flex-col items-center gap-5', offset)}
                animate={
                  shouldReduceMotion
                    ? {}
                    : { y: isActive ? -8 : 0, scale: isActive ? 1.04 : 0.96 }
                }
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setActiveStyle(i)}
                style={{ cursor: 'pointer' }}
              >
                <PhoneMockup accentColor={style.accentColor} isActive={isActive}>
                  <CardContent />
                </PhoneMockup>
                <div className="text-center">
                  <p
                    className={cn(
                      'font-semibold text-sm transition-colors duration-300',
                      isActive ? 'text-[var(--color-rose)]' : 'text-[var(--color-charcoal)]'
                    )}
                  >
                    {style.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5 max-w-[160px]">
                    {style.description}
                  </p>
                  <Link
                    href={`/invitations/templates/${style.id}`}
                    target="_blank"
                    className={cn(
                      'inline-block mt-3 text-[10px] uppercase tracking-widest font-bold border-b pb-1 transition-all duration-300',
                      isActive
                        ? 'text-[var(--color-rose)] border-[var(--color-rose)] hover:tracking-[0.15em]'
                        : 'text-[var(--color-muted)] border-transparent hover:text-[var(--color-charcoal)]'
                    )}
                  >
                    View Full Demo
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
