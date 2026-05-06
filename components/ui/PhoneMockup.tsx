'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  isActive?: boolean;
}

export function PhoneMockup({ children, className, accentColor = '#C9A96E', isActive = false }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        'relative mx-auto transition-all duration-500',
        isActive ? 'scale-105' : 'scale-100',
        className
      )}
      style={{ width: '220px' }}
    >
      {/* Phone Frame */}
      <div
        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        style={{
          border: `3px solid ${isActive ? accentColor : '#D1D5DB'}`,
          background: '#1a1a1a',
          boxShadow: isActive
            ? `0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px ${accentColor}30`
            : '0 15px 40px rgba(0,0,0,0.2)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-8 h-1.5 rounded-full bg-[#333]" />
        </div>

        {/* Screen */}
        <div className="relative overflow-hidden" style={{ paddingTop: '24px', height: '440px' }}>
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
      </div>

      {/* Side buttons */}
      <div className="absolute top-16 -right-1 w-1 h-10 bg-[#333] rounded-r-md" />
      <div className="absolute top-10 -left-1 w-1 h-6 bg-[#333] rounded-l-md" />
      <div className="absolute top-20 -left-1 w-1 h-8 bg-[#333] rounded-l-md" />
    </div>
  );
}
