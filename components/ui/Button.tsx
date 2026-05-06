'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-[var(--color-rose)] text-white hover:brightness-110 hover:shadow-lg hover:shadow-[var(--color-rose)]/30 active:scale-[0.98]',
    outline:
      'border-2 border-[var(--color-rose)] text-[var(--color-rose)] hover:bg-[var(--color-rose)] hover:text-white active:scale-[0.98]',
    ghost:
      'text-[var(--color-charcoal)] hover:bg-[var(--color-blush)] active:scale-[0.98]',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20BC5A] hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} aria-label={props['aria-label']}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
