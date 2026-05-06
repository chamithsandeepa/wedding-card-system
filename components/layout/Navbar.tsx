'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollY } from '@/hooks/useScrollY';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isScrolled = scrollY > 60;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-md bg-[var(--color-ivory)]/80 border-b border-[var(--color-blush)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group" aria-label="LoveLink home">
          <span
            className="font-heading text-2xl italic text-[var(--color-charcoal)] group-hover:text-[var(--color-rose)] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Love
          </span>
          <span
            className="font-heading text-2xl italic text-[var(--color-rose)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Link
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-charcoal)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--color-rose)] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            aria-label="Get started with LoveLink"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--color-charcoal)] hover:bg-[var(--color-blush)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-[var(--color-ivory)]/95 backdrop-blur-md border-b border-[var(--color-blush)]"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-charcoal)] font-medium py-2 border-b border-[var(--color-blush)] hover:text-[var(--color-rose)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full mt-2"
                aria-label="Get started with LoveLink"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
              <Button
                href={SITE_CONFIG.whatsappUrl}
                variant="whatsapp"
                size="md"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
