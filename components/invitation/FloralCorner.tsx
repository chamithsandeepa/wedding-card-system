'use client';

import { motion } from 'framer-motion';

interface FloralCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: string;
}

export function FloralCorner({ position, color }: FloralCornerProps) {
  const rotations = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`absolute w-32 h-32 ${positions[position]} ${rotations[position]} z-10 pointer-events-none`}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Rose */}
        <circle cx="30" cy="30" r="12" fill={color} fillOpacity="0.2" />
        <path d="M30 18C23.3726 18 18 23.3726 18 30C18 36.6274 23.3726 42 30 42C36.6274 42 42 36.6274 42 30C42 23.3726 36.6274 18 30 18ZM30 38C25.5817 38 22 34.4183 22 30C22 25.5817 25.5817 22 30 22C34.4183 22 38 25.5817 38 30C38 34.4183 34.4183 38 30 38Z" fill={color} />
        
        {/* Petals */}
        <path d="M30 26C28 22 24 20 20 20C16 20 14 22 14 26C14 30 18 34 30 40C42 34 46 30 46 26C46 22 44 20 40 20C36 20 32 22 30 26Z" fill={color} fillOpacity="0.1" />
        
        {/* Leaves */}
        <path d="M45 45C45 35 55 30 65 30C55 30 50 40 50 50L45 45Z" fill={color} fillOpacity="0.4" />
        <path d="M35 55C25 55 20 65 20 75C20 65 30 60 40 60L35 55Z" fill={color} fillOpacity="0.4" />
        
        {/* Decorative swirls */}
        <path d="M10 60Q20 70 40 60" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M60 10Q70 20 60 40" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
    </motion.div>
  );
}
