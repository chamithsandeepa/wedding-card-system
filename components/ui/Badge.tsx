'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'rose' | 'sage' | 'blush';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default:
      'bg-[var(--color-blush)] text-[var(--color-rose)] border border-[var(--color-rose)]/20',
    rose: 'bg-[var(--color-rose)] text-white',
    sage: 'bg-[var(--color-sage)]/10 text-[var(--color-sage)] border border-[var(--color-sage)]/20',
    blush: 'bg-[var(--color-blush)] text-[var(--color-muted)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
