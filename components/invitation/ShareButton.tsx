'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  accentColor: string;
  textColor: string;
}

export function ShareButton({ accentColor, textColor }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex justify-center py-10 relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="flex items-center gap-2 px-6 py-3 rounded-full border text-xs uppercase tracking-widest transition-colors"
        style={{ borderColor: `${accentColor}40`, color: accentColor }}
      >
        {copied ? <Check size={14} /> : <Share2 size={14} />}
        {copied ? 'Link Copied!' : 'Share Invitation'}
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-24 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded uppercase tracking-tighter"
          >
            Copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
