'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-[var(--color-blush)] shadow-sm',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
        glow &&
          'hover:border-[var(--color-rose)]/50 hover:shadow-[0_0_24px_0_rgba(201,169,110,0.15)]',
        className
      )}
    >
      {children}
    </div>
  );
}
