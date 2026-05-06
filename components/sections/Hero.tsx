'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ChevronDown, Users, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/lib/constants';

// SVG Petal shape
function Petal({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 0 C30 15, 38 30, 20 58 C2 30, 10 15, 20 0Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

const PETALS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 16 + Math.random() * 24,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 4,
  rotate: Math.random() * 360,
  color: i % 3 === 0 ? '#C9A96E' : i % 3 === 1 ? '#D4829A' : '#8A9E85',
}));

const trustBadges = [
  { icon: Users, label: '100+ Couples' },
  { icon: Clock, label: '24hr Delivery' },
  { icon: RefreshCw, label: 'Free Revisions' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, #F4E4E0 0%, #FDFAF6 60%, #FDFAF6 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Floating Petals */}
      {!shouldReduceMotion &&
        PETALS.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute pointer-events-none"
            style={{
              left: `${petal.x}%`,
              top: `${petal.y}%`,
              width: petal.size,
              height: petal.size * 1.5,
              color: petal.color,
              opacity: 0.35,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              rotate: [petal.rotate, petal.rotate + 15, petal.rotate - 10, petal.rotate],
              opacity: [0.35, 0.5, 0.35, 0.45, 0.35],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Petal />
          </motion.div>
        ))}

      {/* Decorative large ampersand */}
      <div
        className="absolute select-none pointer-events-none"
        aria-hidden="true"
        style={{
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(120px, 15vw, 200px)',
          fontStyle: 'italic',
          color: 'var(--color-rose)',
          opacity: 0.06,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        &amp;
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <Badge variant="default" className="text-sm px-4 py-1.5 tracking-wider">
            ✦ Digital Wedding Invitations
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <motion.span
            variants={itemVariants}
            className="block text-[clamp(3rem,7vw,5rem)] italic text-[var(--color-charcoal)]"
          >
            Your Love Story,
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="block text-[clamp(3rem,7vw,5rem)] italic text-[var(--color-rose)]"
          >
            Beautifully Shared
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-[var(--color-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Elegant digital invitations with RSVP, music, countdown &amp; more — delivered as a
          beautiful link in 24 hours
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            href="#demo"
            variant="outline"
            size="lg"
            aria-label="View demo invitation cards"
          >
            View Demo Cards
          </Button>
          <Button
            href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent("Hi LoveLink! I'd like to order a digital wedding invitation.")}`}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order your invitation on WhatsApp"
          >
            Order on WhatsApp
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[var(--color-muted)] text-sm">
              <div className="w-7 h-7 rounded-full bg-[var(--color-rose)]/10 flex items-center justify-center">
                <Icon size={14} className="text-[var(--color-rose)]" />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
