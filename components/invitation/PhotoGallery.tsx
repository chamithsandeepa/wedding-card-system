'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PhotoGalleryProps {
  photos: string[];
  accentColor: string;
}

export function PhotoGallery({ photos, accentColor }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="w-full px-4 py-12">
      <h3 className="text-xl text-center mb-8 italic" style={{ fontFamily: 'var(--font-heading)' }}>
        Captured Moments
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="aspect-[4/5] relative rounded overflow-hidden cursor-pointer bg-gray-100"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 480px) 50vw"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg aspect-[4/5]"
            >
              <Image
                src={selectedPhoto}
                alt="Selected gallery image"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
